"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounceValue<string>(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log();

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue[0],
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
