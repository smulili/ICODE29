import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const LetsTalkButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Link
      to="/#contact"
      className=""
      style={{ writingMode: "horizontal-tb" }}
    >
      Let's Talk <ArrowRight size={14} />
    </Link>
  );
};

export default LetsTalkButton;
