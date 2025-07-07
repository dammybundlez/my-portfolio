import { useEffect, useState } from "react";

const formatTime = (time: number): string => time.toString().padStart(2, "0");

export default function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${formatTime(hours % 12 || 12)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;

  return (
    <div className="lg:flex hidden items-center justify-center font-quantico">
      <div className="text-black text-sm tracking-widest px-8 py-4 font-quantico">
        {formattedTime}
      </div>
    </div>
  );
}
