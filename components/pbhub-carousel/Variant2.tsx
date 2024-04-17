import { Props } from "deco-sites/pbhub/components/pbhub-carousel/Component.tsx";

export default function Variant2({ slides }: Props) {
  const scrollToSlide = (index: number) => {
    return (event: Event) => {
      event?.preventDefault();
      document.querySelector(`#slide${index}`)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    };
  };

  return (
    <>
      {slides.map((items, index) => (
        <div
          id={"slide" + index}
          class="carousel-item relative w-full flex flex-col items-center justify-center gap-[40px]"
        >
          <div class="w-full sm:w-[50%] 2xl:w-[30%] flex flex-col gap-[20px] items-center">
            <h2 class="text-white text-3xl md:text-[42px] lg:text-[60px] font-sans text-center md:text-start font-bold">
              {items.title}
            </h2>
            <p class="text-[16px] md:text-[38px] font-semibold text-white text-center">
              {items.description}
            </p>

            <button class="bg-secondary-600 text-white font-bold mt-5 p-5">
              {items.buttonText}
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mb-4 ">
            <a
              className={`btn btn-ghost text-white hover:text-white bg-[#3b115d] border-0 `}
              onClick={index > 0 ? scrollToSlide(index - 1) : undefined}
            >
              ❮
            </a>
            <a
              className={`btn btn-ghost text-white bg-[#3b115d] hover:text-white border-0`}
              onClick={index < slides.length - 1
                ? scrollToSlide(index + 1)
                : undefined}
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
