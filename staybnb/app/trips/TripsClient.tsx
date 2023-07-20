"use client";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "../types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

type Props = {
  reservation: SafeReservation[];
  currentUser: SafeUser | null;
};

function TripsClient({ reservation, currentUser }: Props) {
  const router = useRouter();
  const [deletingId, setDeletingId] = React.useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation canceled");
          router.refresh();
        })
        .catch((error) => {
          error?.response?.data?.error;
        })
        .finally(() => {});
    },
    [router],
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservation.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel={"Cancel reservation"}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}

export default TripsClient;
