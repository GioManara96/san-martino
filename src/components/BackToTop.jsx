import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // la freccia compare solo dopo aver scrollato di almeno 500px
  window.addEventListener("scroll", () => {
    const backToTopButton = document.querySelector("#scrollToTop");

    if (window.scrollY > 100) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  return (
    <div className="hidden fixed bottom-[1.5rem] right-4 lg:bottom-[3.5rem] lg:right-[5.5rem] rounded-full bg-white p-3 text-black" id="scrollToTop" role="button" onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
}
