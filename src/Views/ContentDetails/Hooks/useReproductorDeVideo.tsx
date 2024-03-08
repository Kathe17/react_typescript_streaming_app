import { useState } from "react";

export default function useReproductorDeVideo() {
  const [reproduciendo, setReproduciendo] = useState(false);

  return { reproduciendo, setReproduciendo };
}
