"use client";
import React from "react";

type Props = {
  price: number;
  totalPrice: number;
  onChangeDate: (value: any) => void;
  dateRange: any;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
};

function ListingReservation({}: Props) {
  return <div>ListingReservation</div>;
}

export default ListingReservation;
