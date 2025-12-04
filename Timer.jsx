import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(300); // 5 min

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>Time: {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}</div>;
}
