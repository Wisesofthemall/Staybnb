"use client";
import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import React, { useMemo } from "react";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";

type Props = {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  current: SafeUser | null;
};

function ListingClient({ listing, current }: Props) {
  const category = useMemo(
    () => categories.find((item) => item.label === listing.category),
    [listing.category],
  );
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={current}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
