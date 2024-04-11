import { ImageWidget } from "apps/admin/widgets.ts";
import TecnologyCarrousel from "deco-sites/pbhub/islands/TecnologyCarrousel.tsx";

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

export default function TecnologiesAndServices({
  slides = [
    {
      title: "Tecnologias",
      subtitle:
        "Somos capacitados nas principais tecnologias de desenvolvimento de soluções digitais.",
      slideInfo: [
        {
          image: "/image/tecnologiesAndSolutions/mobile.png",
          imageDescription: "Mobile",
        },
        {
          image: "/image/tecnologiesAndSolutions/web.png",
          imageDescription: "Web Front End",
        },
        {
          image: "/image/tecnologiesAndSolutions/backend.png",
          imageDescription: "Web Back End",
        },
        {
          image: "/image/tecnologiesAndSolutions/infra.png",
          imageDescription: "Infra",
        },
      ],
    },
    {
      title: "Soluções",
      subtitle: "Principais serviços oferecidos",
      slideInfo: [
        {
          image: "/image/tecnologiesAndSolutions/discovery.png",
          imageDescription: "Ideação & Discovery",
        },
        {
          image: "/image/tecnologiesAndSolutions/mobile.png",
          imageDescription: "Mobile",
        },
        {
          image: "/image/tecnologiesAndSolutions/mobile.png",
          imageDescription: "Mobile",
        },
        {
          image: "/image/tecnologiesAndSolutions/mobile.png",
          imageDescription: "Mobile",
        },
        {
          image: "/image/tecnologiesAndSolutions/mobile.png",
          imageDescription: "Mobile",
        },
      ],
    },
  ],
}: Props) {
  return (
    <section class="w-full flex flex-col items-center py-[60px]">
      <TecnologyCarrousel slides={slides as Slide[]} />
    </section>
  );
}
