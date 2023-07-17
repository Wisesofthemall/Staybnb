"use client";
import { SafeUser } from "@/app/types";
import { Reservation, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

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
  actionId,
  key,
  data,
}: Props) {
  const router = useRouter();
  return <div>ListingCard</div>;
}

export default ListingCard;
