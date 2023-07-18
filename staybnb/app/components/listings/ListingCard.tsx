"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { Reservation, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";

type Props = {
  currentUser?: SafeUser | null;
  reservation?: Reservation;
  onAction: (id: string) => void;
  disabled?: boolean;
  actionLabel: string;
  actionId?: string;
  key: string;
  data: any;
};

function ListingCard({
  currentUser,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  key,
  data,
}: Props) {
  const router = useRouter();
  const { getByValue } = useCountries();
  const locarion = getByValue(data.locationValue);
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [onAction, disabled, actionId],
  );
  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
      key={key}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className="object-cover w-full h-full group-hover:scale-110 transition"
            src={data.imageSrc}
            alt={data.title}
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
      </div>
      ListingCard
    </div>
  );
}

export default ListingCard;
