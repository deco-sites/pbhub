import { ImageWidget } from "apps/admin/widgets.ts";
import { useId } from "deco-sites/pbhub/sdk/useId.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useState } from "preact/compat";

export type Slide = {
  /** @format html */
  comment?: string;
  profileImage?: ImageWidget;
};

export interface Props {
  comments: Slide[];
  layout?: {
    numberOfSliders?: {
      mobile?: 1 | 2 | 3 | 4 | 5;
      desktop?: 1 | 2 | 3 | 4 | 5;
    };
  };
  title?: string;
  subtitle?: string;
}

export default function Component({
  comments,
  layout = {
    numberOfSliders: {
      mobile: 1,
      desktop: 3,
    },
  } as Props["layout"],
  title,
  subtitle,
}: Props) {
  const [openModal, setOpenModal] = useState(false);

  const id = useId();

  const slideDesktop = {
    1: "md:w-full",
    2: "md:w-1/2",
    3: "md:w-1/3",
    4: "md:w-1/4",
    5: "md:w-1/5",
  };

  const slideMobile = {
    1: "w-full",
    2: "w-1/2",
    3: "w-1/3",
    4: "w-1/4",
    5: "w-1/5",
  };
  return (
    <div class="w-full flex bg-gray-100 justify-center">
      <div class="w-full py-8 lg:max-w-7xl justify-center flex flex-col gap-6 lg:pt-32 pb-16 ">
        <div class="mb-8 flex items-center flex-col gap-1">
          <h1 class="text-3xl font-semibold text-primary-500">{title ?? ""}</h1>
          <h2 class="text-2xl font-medium text-primary-500">
            {subtitle ?? ""}
          </h2>
        </div>

        <div
          id={id}
          class={`grid px-6 grid-cols-[48px_1fr_48px] -mt-20`}
        >
          <Slider class="carousel gap-4 carousel-center sm:carousel-end h-[26rem] items-center row-start-2 px-4 row-end-5">
            {comments && comments?.map((card, index) => (
              <Slider.Item
                index={index}
                class={`carousel-item   ${
                  slideDesktop[layout?.numberOfSliders?.desktop ?? 2]
                } ${slideMobile[layout?.numberOfSliders?.mobile ?? 1]}`}
              >
                <div
                  class={` w-full h-60 flex rounded-[33px] cursor-pointer flex-col ${
                    index % 2 === 0 ? "bg-primary-500" : "bg-white"
                  }  p-8 text-white relative shadow-cardShadow`}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <div
                    class={`flex-1 flex ${
                      index % 2 === 0 ? "text-white" : "text-primary-500"
                    } h-[72%] line-clamp-5 leading-relaxed`}
                    dangerouslySetInnerHTML={{ __html: card.comment ?? "" }}
                  />

                  <div
                    class={`font-medium ${
                      index % 2 === 0 ? "text-white" : "text-primary-500"
                    }`}
                  >
                    Ler mais...
                  </div>

                  <img
                    src={card.profileImage}
                    class="shadow-cardShadow rounded-full w-24 h-24 absolute -bottom-[2.8rem] right-12"
                  />
                </div>
              </Slider.Item>
            ))}
          </Slider>

          <>
            <div class="relative block z-10 col-start-1 row-start-3">
              <Slider.PrevButton class="absolute w-12 h-12 flex justify-center items-center">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
              </Slider.PrevButton>
            </div>
            <div class="relative block z-10 col-start-3 row-start-3">
              <Slider.NextButton class="absolute w-12 h-12 flex justify-center items-center">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
          <SliderJS rootId={id} />
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div class="w-40 h-40 bg-red-500">Modal</div>
      </Modal>
    </div>
  );
}
