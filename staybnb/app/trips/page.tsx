import React from "react";
import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import TripsClient from "./TripsClient";
type Props = {};

async function TripsPage({}: Props) {
  const currentUser = await getCurrentUser();
  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Look like you havent reserved any trips."
      />
    );
  }
  return <TripsClient reservation={reservations} currentUser={currentUser} />;
}

export default TripsPage;
