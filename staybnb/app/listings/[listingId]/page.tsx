import React from "react";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservation";
type Props = {
  listingId?: string;
};

async function ListingPage({ params }: { params: Props }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <ListingClient
      listing={listing}
      current={currentUser}
      reservation={reservations}
    />
  );
}

export default ListingPage;
