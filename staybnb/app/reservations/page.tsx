import React from "react";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import ReservationsClient from "./ReservationsClient";
type Props = {};

async function ReservationPage({}: Props) {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState title="No Reservations" subtitle="You have no reservations" />
    );
  }

  return (
    <div>
      <ReservationsClient reservations={reservations} user={currentUser} />
    </div>
  );
}

export default ReservationPage;
