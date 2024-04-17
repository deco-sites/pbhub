import { ImageWidget } from "apps/admin/widgets.ts";
import Variant1 from "deco-sites/pbhub/components/pbhub-carousel/Variant1.tsx";
import Variant2 from "deco-sites/pbhub/components/pbhub-carousel/Variant2.tsx";
import Variant3 from "deco-sites/pbhub/components/pbhub-carousel/Variant3.tsx";

export type PbhubSlider = {
  title: string;
  description?: string;
  buttonText?: string;
  slideInfo?: {
    image: ImageWidget;
  }[];
  variant: "1" | "2" | "3";
};

export interface Props {
  slides: PbhubSlider[];
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
        {slides.map((variation) =>
          variation.variant === "1"
            ? <Variant1 slides={slides} />
            : variation.variant === "2"
            ? <Variant2 slides={slides} />
            : <Variant3 slides={slides} />
        )}
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
