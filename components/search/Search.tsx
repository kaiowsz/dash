"use client"

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce"

interface SearchProps {
    placeholder: string;
}

const Search = ({placeholder}: SearchProps) => {
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();



  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if(event.target.value) {
      event.target.value.length > 2 && params.set("q", event.target.value);

      params.set("q", event.target.value);
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`);
  }


  return (
    <div className={styles.container}>
        <MdSearch />
        <input type="text" onChange={e => handleSearch(e)} placeholder={placeholder} className={styles.input} />
    </div>
  )
}

export default Search