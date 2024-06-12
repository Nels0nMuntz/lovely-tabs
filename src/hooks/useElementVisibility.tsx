import { useEffect, useState } from "react";

export const useElementVisibility = (element: Element | null) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: document,
        threshold: [0, 1],
      },
    );
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element]);
  return isVisible;
};
