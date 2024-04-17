import { ImageWidget } from "apps/admin/widgets.ts";
import { JSX } from "preact/jsx-runtime";

export type Slide = {
  title: string;
  subtitle: string;
  slideInfo: {
    imageDescription: string;
    image: ImageWidget;
  }[];
};

export interface Props {
  slides: Slide[];
}

const scrollToSlide = (index: number) => {
  return (event: Event) => {
    event?.preventDefault();
    document.querySelector(`#slide${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
};

export default function Component({ slides }: Props) {
  return (
    <>
      <div className="carousel w-full">
        {slides.map((items, index) => (
          <div
            id={"slide" + index}
            class="carousel-item relative w-full flex flex-col items-center justify-center gap-[40px]"
          >
            <div class="w-[90%] sm:w-[50%] 2xl:w-[30%] flex flex-col gap-[16px] items-center">
              <h2 class="text-3xl md:text-[42px] text-primary-550 font-sans text-center md:text-start font-semibold">
                {items.title}
              </h2>
              <p class="text-[16px] md:text-[20px] text-primary-550 text-center">
                {items.subtitle}
              </p>
            </div>

            <div class="flex justify-around items-center w-full mt-5 sm:mt-0">
              {items.slideInfo.map((image, index) => (
                <div
                  id="image-container"
                  class={`flex flex-col gap-4 items-center justify-center ${
                    index === 3 ? "hidden" : "sm:flex"
                  } last:hidden md:last:flex`}
                >
                  <img
                    src={image.image}
                    width={image.imageDescription === "Mobile" ? 34 : 60}
                    height={image.imageDescription === "Mobile" ? 30 : 60}
                  />
                  <span class="text-[16px] md:text-[22px] text-primary-550 text-center">
                    {image.imageDescription}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mb-4 ">
              <a
                className={`btn btn-ghost hover:text-white bg-white border-0 ${
                  index === 0 ? "hover:bg-gray-500" : "hover:bg-[#36185C]"
                } ${index === 0 ? "disabled" : ""}`}
                onClick={index > 0 ? scrollToSlide(index - 1) : undefined}
              >
                ❮
              </a>
              <a
                className={`btn btn-ghost bg-white hover:text-white border-0 ${
                  index === slides.length - 1
                    ? "hover:bg-gray-500"
                    : "hover:bg-[#36185C]"
                } ${index === slides.length - 1 ? "disabled" : ""}`}
                onClick={index < slides.length - 1
                  ? scrollToSlide(index + 1)
                  : undefined}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4 justify-center w-full py-2 gap-4">
        {slides.map((_, index) => (
          <a
            onClick={scrollToSlide(index)}
            className="w-[5px] h-[5px] bg-secondary-500 rounded-full cursor-pointer"
          />
        ))}
      </div>
    </>
  );
}
