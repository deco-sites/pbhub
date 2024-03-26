import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import * as Icon from "deco-sites/pbhub/components/ui/icons/index.tsx";
import { JSX } from "preact/jsx-runtime";

export interface Props {
  title?: string;
  description?: string;
  values?: Array<{
    label: string;
    icon: JSX.Element;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function OurValues({
  title = "Nossos Valores",
  description = "",
  values = [
    {
      icon: <Icon.Diversity />,
      label: "Diversidade",
    },
    {
      icon: <Icon.TeamWork />,
      label: "Trabalho em Equipe",
    },
    {
      icon: <Icon.ClientFocus />,
      label: "Foco no Cliente",
    },
    {
      icon: <Icon.Autonomy />,
      label: "Autonomia",
    },
    {
      icon: <Icon.Innovation />,
      label: "Inovação",
    },
  ],
}: Props) {
  return (
    <div class="py-16 bg-gray-200 w-full p-2 text-center">
      <div class="max-w-5xl mx-auto">
        <Title title={title} />
        <Container>
          {values.map((value) => (
            <Card
              label={value.label}
              icon={value.icon}
            />
          ))}
        </Container>
      </div>
    </div>
  );
}

interface CardProps {
  label: string;
  icon: JSX.Element;
}

function Card({ label, icon }: CardProps) {
  return (
    <div class="w-full flex flex-col align-middle items-center justify-center xl:justify-normal h-64 sm:h-48 p-4 bg-primary-600 rounded-badge shadow-md">
      <div class="mt-2 text-lg font-semibold text-primary-100">
        {label}
      </div>
      <div class="mt-2">
        {icon}
      </div>
    </div>
  );
}

function Title({ title }: { title: string }) {
  return <h1 class="pb-8 text-3xl font-semibold text-primary-500">{title}</h1>;
}

interface ContainerProps {
  children: ComponentChildren;
}

function Container({ children }: ContainerProps) {
  return (
    <div class="grid grid-cols-1 p-4 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
      {children}
    </div>
  );
}
