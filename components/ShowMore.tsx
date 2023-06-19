"use client";

import { ShowMoreTypes } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ isNext, pageNumber }: ShowMoreTypes) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    localStorage.setItem("persistentScroll", window.scrollY.toString());
    router.push(newPathName);
  };
  useEffect(() => {
    // Retrieve scrollY value from localStorage after routing
    const persistentScroll = localStorage.getItem("persistentScroll");
    if (persistentScroll === null) return;

    // Restore the window's scroll position
    window.scrollTo({ top: Number(persistentScroll) });

    // Remove scrollY from localStorage after restoring the scroll position
    // This hook will run before and after routing happens so this check is
    // here to make we don't delete scrollY before routing
    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem("persistentScroll");
  }, [searchParams]);
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        ></CustomButton>
      )}
    </div>
  );
};

export default ShowMore;
