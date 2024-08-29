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
    setIsIdle(true); // Seteo el estado de isIdle a True
    getLastActiveTime(); // Función de la librería react-idle-timer para obtener el último momento en que estuvo activo
    onIdle?.(); // Funcion que debe hacer cuando esté inactivo
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * idleTime,
    onIdle: handleOnIdle,
    debounce: 500, // Tiempo en milisegundos antes de volverla a ejecutar
    crossTab: true, // Toma en cuenta el tiempo en el que se encuentra en otras pestañas o pantallas.
  });

  return {
    getRemainingTime,
    getLastActiveTime,
    isIdle,
  };
}
