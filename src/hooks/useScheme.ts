import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { queryKey } from "src/constants/queryKey";

type Scheme = "light" | "dark";
type SetScheme = (scheme: Scheme) => void;

const useScheme = (): [Scheme, SetScheme] => {
  const queryClient = useQueryClient();

  // Use useState to manage the scheme state
  const [scheme, setSchemeState] = useState<Scheme>('light');

  // Function to update the theme
  const setScheme = (scheme: Scheme) => {
    setSchemeState(scheme);
    queryClient.setQueryData(queryKey.scheme(), scheme);
  };

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== 'undefined') {
      // Function to get the system theme
      const getSystemTheme = (): Scheme => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      };

      // Set the initial theme based on the system preference
      setScheme(getSystemTheme());

      const updateScheme = (e: MediaQueryListEvent) => {
        const newScheme = e.matches ? 'dark' : 'light';
        setScheme(newScheme);
      };

      // Create a MediaQueryList object
      const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

      // Add listener for changes
      mediaQueryList.addEventListener('change', updateScheme);

      // Cleanup function
      return () => {
        mediaQueryList.removeEventListener('change', updateScheme);
      };
    }
  }, []);

  return [scheme, setScheme];
};

export default useScheme;
