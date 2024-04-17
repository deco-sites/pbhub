import { PbhubSlider } from "deco-sites/pbhub/components/pbhub-carousel/Component.tsx";
import PbhubCarousel from "deco-sites/pbhub/islands/PbhubCarousel.tsx";

export interface Props {
  slides: PbhubSlider[];
}

export default function PbhubMainCarousel({
  slides = [
    {
      title: "PB HUB",
      description: "O SEU HUB DE SOLUÇÕES",
      buttonText: "Conheça",
      variant: "1",
    },
    {
      title: "SOMOS PONTE QUE CONECTA IDEIAS",
      description:
        "Estamos aqui para auxiliar a especificar, desenvolver e fornecer sistemas web/mobile capazes de auxiliar na eficiência, segurança e lucratividade do seu negócio.",
      buttonText: "SAIBA MAIS",
      variant: "2",
    },
    {
      title: "Nossos Valores",
      slideInfo: [
        {
          image: "/image/pbhubCarousel/diversidade.png",
        },
        {
          image: "/image/pbhubCarousel/autonomia.png",
        },
      ],
      variant: "3",
    },
  ],
}: Props) {
  return (
    <section class="w-full flex flex-col items-center py-[60px] bg-[#3b115d]">
      <PbhubCarousel slides={slides} />
    </section>
  );
}
