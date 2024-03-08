import { useState } from "react";
import { IIdleTimer, useIdleTimer } from "react-idle-timer";

interface Props {
  onIdle:
    | ((event?: Event | undefined, idleTimer?: IIdleTimer | undefined) => void)
    | undefined;
  idleTime: number;
}

//idleTime in min
export default function useIdle({ onIdle, idleTime }: Props) {
  const [isIdle, setIsIdle] = useState<boolean>(false);

  const handleOnIdle = () => {
    setIsIdle(true);
    getLastActiveTime();
    onIdle?.();
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * idleTime,
    onIdle: handleOnIdle,
    debounce: 500,
    crossTab: true,
  });

  return {
    getRemainingTime,
    getLastActiveTime,
    isIdle,
  };
}
