import { useState } from "react";
export default function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
}
