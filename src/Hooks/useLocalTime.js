// useLocalTime.js
import { useEffect, useState } from "react";

const useLocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  const updateTime = () => {
    // Get the current date and time
    const now = new Date();

    // Format the time for Algeria (UTC+2)
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "America/Belize", // Set the timezone to Algeria
    };

    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);

    // Set the UTC offset
    const utcOffset = "UTC-6";

    // Combine the time with the UTC offset
    setLocalTime(`${timeString} ${utcOffset}`);
  };

  useEffect(() => {
    updateTime(); // Initial time update
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return localTime; // Return the formatted local time
};

export default useLocalTime;
