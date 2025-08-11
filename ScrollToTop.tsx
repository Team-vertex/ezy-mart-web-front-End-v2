// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // අහසින් පිටුවේ මුල් කොටසේට යන්න
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // or "smooth"
  }, [pathname]);

  return null;
}
