import { Props } from "deco-sites/pbhub/components/pbhub-carousel/Component.tsx";

export default function Variant3({ slides }: Props) {
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
          <div class="w-[90%] sm:w-[50%] 2xl:w-[30%] flex flex-col gap-[16px] items-center">
            <h2 class="text-3xl md:text-[42px] text-primary-550 font-sans text-center md:text-start font-semibold">
              {items.title}
            </h2>
          </div>
          <div class="flex justify-around items-center w-full mt-5 sm:mt-0">
            {items?.slideInfo?.map((image, index) => (
              <img src={image.image} width={60} height={60} />
            ))}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mb-4 ">
            <a
              className={`btn btn-ghost hover:text-white bg-white border-0 `}
              onClick={index > 0 ? scrollToSlide(index - 1) : undefined}
            >
              ❮
            </a>
            <a
              className={`btn btn-ghost bg-white hover:text-white border-0`}
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
