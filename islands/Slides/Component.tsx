import { ImageWidget } from "apps/admin/widgets.ts";

export type Slide = Array<{
  title: string;
  image: ImageWidget;
}>;

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
        {slides.map((images, index) => (
          <div
            id={"slide" + index}
            className="carousel-item relative w-full"
          >
            <div class="flex justify-around items-center w-full">
              {images.map((image, index) => (
                <img
                  src={image.image}
                  className="w-32"
                />
              ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                className="btn btn-circle"
                onClick={scrollToSlide(
                  index - 1 < 0 ? slides.length - 1 : index - 1,
                )}
              >
                ❮
              </a>
              <a
                className="btn btn-circle"
                onClick={scrollToSlide(
                  index + 1 >= slides.length ? 0 : index + 1,
                )}
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
