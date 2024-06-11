import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState, useCallback } from "react";
import { queryKey } from "src/constants/queryKey";

type Scheme = "light" | "dark";
type SetScheme = (scheme: Scheme) => void;

const useScheme = (): [Scheme, SetScheme] => {
  const queryClient = useQueryClient();

  // Use useState to manage the scheme state
  const [scheme, setSchemeState] = useState<Scheme>('dark');

  // Function to update the theme, memoized with useCallback
  const setScheme = useCallback((scheme: Scheme) => {
    setSchemeState(scheme);
    queryClient.setQueryData(queryKey.scheme(), scheme);
  }, [queryClient]);

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
  }, [setScheme]);

  return [scheme, setScheme];
};

export default useScheme;
