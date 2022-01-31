import { useCallback, useEffect, useMemo, useState } from 'react';
import { differenceInSeconds, intervalToDuration } from 'date-fns';

interface UseCountDownProps {
  countDownUnix: number;
}
export default function useCountDown(props: UseCountDownProps) {
  const { countDownUnix } = props;
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const deadlineDate = new Date(Number(countDownUnix) * 1000);

  const getCoundown = useCallback(() => {
    const diffInSeconds = differenceInSeconds(deadlineDate, currentTime);
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const intervalTotal = intervalToDuration({ start: new Date(), end: deadlineDate });
    return intervalTotal;
  }, [deadlineDate, currentTime]);

  const countdown = useMemo(getCoundown, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return countdown;
}
