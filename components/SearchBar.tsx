"use client";
import React, { useEffect, useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchTypes } from "@/types";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-contain"
      ></Image>
    </button>
  );
};
const SearchBar = () => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchModel.trim() === "" && searchManufacturer.trim() === "")
      return alert("Please fill in the search bar");
    updateSearchParams(
      searchManufacturer.toLowerCase(),
      searchModel.toLowerCase()
    );
  };
  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
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
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        ></Image>
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        ></input>
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
