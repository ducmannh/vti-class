/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const useTimeOut = () => {
  const [timeOut, setTimeOut] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: any = null;

    const resetTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setTimeOut(true);
      }, 5000);
    };

    const handleActivity = () => {
      setTimeOut(false);
      resetTimeout();
    };

    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);
    document.addEventListener("scroll", handleActivity);

    return () => {
      clearTimeout(timeoutId);
      document.addEventListener("mousemove", handleActivity);
      document.addEventListener("keydown", handleActivity);
      document.addEventListener("scroll", handleActivity);
    };
  }, []);

  return { timeOut };
};
