import useMobileMenu from "../hooks/useMobileMenu";

export default function MobileIcon() {
  const { isOpen, setIsOpen } = useMobileMenu();
  console.log({ isOpen });
  return (
    <div
      className={isOpen ? "mobile-icon open" : "mobile-icon"}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
