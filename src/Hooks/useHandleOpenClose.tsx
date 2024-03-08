import { useState } from "react";

export default function handleOpenClose() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    handleClose,
    handleOpen,
  };
}
