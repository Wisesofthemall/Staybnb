"use client";
import React, { useEffect } from "react";
import EmptyState from "./components/EmptyState";

type Props = {
  errors: Error;
};

function error({ errors }: Props) {
  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
}

export default error;
