import { useEffect } from "react";
import { useRouter } from "next/router";

export default function usePageScroll() {
  const router = useRouter();
  useEffect(() => {
    const hash = router.asPath.replace("/#", "");
    const article = document.getElementById(hash);
    setTimeout(() => {
      window.scrollTo({
        top:
          article && hash === "skills"
            ? article.offsetTop
            : article
            ? article.offsetTop - 80
            : 0,
        behavior: "smooth",
      });
    }, 10);
  });

  return {};
}
