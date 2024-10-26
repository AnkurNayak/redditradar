"use client";
import SearchBar from "@/components/header/Searchbar";
import { ReactNodeProps } from "@/types/ReactNodeProps";

export default function LandingLayout({ children }: ReactNodeProps) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
