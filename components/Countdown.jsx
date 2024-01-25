import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Countdown = ({ data }) => {
  const router = useRouter();

  const [time, setTime] = useState({
    minutes: 15,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.seconds > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          seconds: prevTime.seconds - 1,
        }));
      } else if (time.minutes > 0) {
        setTime((prevTime) => ({
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      }

      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval);
        router.push("/errorPay");
        localStorage.clear();
      }
      if (data.status === "EX" || data.status === "OC") {
        clearInterval(interval);
        router.push("/errorPay");
        localStorage.clear();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div className="flex items-center mb-4">
      <FontAwesomeIcon className="text-xl mr-2 " icon={faStopwatch} />
      <p>{`${formatTime(time.minutes)}:${formatTime(time.seconds)}`}</p>
    </div>
  );
};

export default Countdown;
