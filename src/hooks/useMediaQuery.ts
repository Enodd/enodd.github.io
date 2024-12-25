import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      const matchQueryList = window.matchMedia(query);
      setMatches(matchQueryList.matches);
    }
    handleChange();

    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };

  }, [query]);

  return matches;
}