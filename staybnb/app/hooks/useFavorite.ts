import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";

type FavoriteTypes = {
  listingId: string;
  currentUser?: SafeUser | null;
};

const useFavorite = ({ listingId, currentUser }: FavoriteTypes) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);
  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) {
        return loginModal.onOpen();
      }
      try {
        let request;
        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }
        await request();
        router.refresh();
        toast.success("Favorite added");
      } catch (error) {
        toast.error("Failed to add favorite");
      }
    },
    [currentUser, hasFavorite, listingId, loginModal, router],
  );

  return { hasFavorite, toggleFavorite };
};

export default useFavorite;
