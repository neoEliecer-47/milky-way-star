import { useEffect, useState } from "react";

const useIsMobileScreenDetector = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < breakpoint
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mediaQuery.matches);

    function handleResize(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return { isMobile };
};

export default useIsMobileScreenDetector;
