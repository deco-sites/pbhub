import { ImageWidget } from "apps/admin/widgets.ts";
import Slides from "$store/islands/Slides/Slides.tsx";

interface OurClientsProps {
  title?: string;
  slides?: Array<{
    title: string;
    image: ImageWidget;
  }>[];
}

export default function OurClients({
  title = "Nossos clientes",
  slides = [
    [
      {
        title: "Prospera Saúde",
        image: "/image/carrousel/prospera.png",
      },
      {
        title: "Conducco",
        image: "/image/carrousel/conducco.png",
      },
      {
        title: "Latendi",
        image: "/image/carrousel/tendi.png",
      },
      {
        title: "Pordeus",
        image: "/image/carrousel/pordeus.png",
      },
      {
        title: "Looping",
        image: "/image/carrousel/looping.png",
      },
    ],
    [
      {
        title: "Biomaq",
        image: "/image/carrousel/biomaq.png",
      },
      {
        title: "Refera",
        image: "/image/carrousel/refera.png",
      },
      {
        title: "Viva Móveis",
        image: "/image/carrousel/vivamoveis.png",
      },
      {
        title: "Phorte",
        image: "/image/carrousel/phorte.png",
      },
      {
        title: "SS Móveis",
        image: "/image/carrousel/ssmoveis.jpg",
      },
    ],
    [
      {
        title: "UChallenger",
        image: "/image/carrousel/uchallenger.png",
      },
      {
        title: "Protector Brasil",
        image: "/image/carrousel/protectorbrasil.png",
      },
      {
        title: "Passaporte do Saber",
        image: "/image/carrousel/passaportedosaber.jpg",
      },
      {
        title: "KVoltz",
        image: "/image/carrousel/kvoltz.jpg",
      },
      {
        title: "Felipelli",
        image: "/image/carrousel/felipelli.jpg",
      },
    ],
    [
      {
        title: "Colabora Saúde",
        image: "/image/carrousel/colaborasaude.jpg",
      },
    ],
  ],
}: OurClientsProps) {
  return (
    <>
      <div class="py-24">
        <h1 class="mb-8 text-3xl text-primary-500 font-semibold text-center">
          {title}
        </h1>
        <Slides slides={slides} />
      </div>
    </>
  );
}
