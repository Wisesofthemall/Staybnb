"use client";
import React, { useEffect, useState } from "react";

type Props = {
  childeren: React.ReactNode;
};

function ClientOnly({ childeren }: Props) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div>{childeren}</div>;
}

export default ClientOnly;
