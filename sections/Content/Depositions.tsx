import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

interface ContainerProps {
  children: ComponentChildren;
}

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  values?: Array<DepositionProps>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div class="mb-8">
      <h1 class="text-3xl font-semibold text-white">{title}</h1>
      <h2 class="text-2xl font-medium text-white">{subtitle}</h2>
    </div>
  );
}

function Container({ children }: ContainerProps) {
  return (
    <div class="w-full p-2 py-16">
      {children}
    </div>
  );
}

interface DepositionProps {
  text: string;
  name: string;
  role: string;
  avatar?: string;
}

function Bubble({ text }: { text: string }) {
  return (
    <div class="bg-white p-4 rounded-badge chat-bubble">
      <p class="text-sm text-primary-600">{text}</p>
    </div>
  );
}

function Deposition({ text, name, role, avatar }: DepositionProps) {
  return (
    <div class="flex flex-col items-center chat chat-end">
      <Bubble text={text} />
      <div class="w-full flex gap-2 items-center justify-end mt-4">
        <div class="flex flex-col items-end">
          <p class="text-white text-lg font-semibold">{name}</p>
          <p class="text-white text-md font-medium">{role}</p>
        </div>
        <Avatar src={avatar ?? ""} />
      </div>
    </div>
  );
}

interface AvatarProps {
  src: string;
}

function Avatar({ src }: AvatarProps) {
  return (
    <div class="w-12 h-12 bg-white rounded-full border-2 border-purple-400 flex items-center justify-center">
      {!src
        ? (
          <span class="text-lg font-bold text-primary-500">
            PH
          </span>
        )
        : (
          <img
            src={src}
            alt="Avatar"
            class="w-full h-full object-cover rounded-full"
          />
        )}
    </div>
  );
}

export default function Depositions({
  title = "Depoimentos",
  subtitle = "dos nossos clientes",
  values = [
    {
      text:
        "Ótimo atendimento e excelência em todas as etapas do processo. Somos muito gratos por essa parceria, dedicação e profissionalismo da equipe.",
      name: "Fábio",
      role: "Coordenador de TI da Fellipelli",
      avatar: "",
    },
    {
      text:
        `"Ficou muito top, Eu particularmente gostei muito, um time dinâmico, extrovertido, paciente, muito paciente e focado voltado a solução. Quanto a qualidade de trabalho e entrega: Nota 10."
      "Código Bem estruturado, código leve, fácil de identificar eu abri o código de vocês aqui e consegui entender a estrutura de boa, então ele ta bem identado, consegui fazer alteração por aqui sem precisar incomodar vocês ai. Então Parabens amigo Excelente o trabalho de vocês. Tem a minha recomendação."`,
      name: "Bruno Henrique",
      role: "Gerente de Tecnologia",
      avatar: "",
    },
  ],
}: Props) {
  return (
    <div class="w-full text-center bg-primary-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        fill="#FFFFFF"
      >
        <path
          class="elementor-shape-fill"
          opacity="0.33"
          d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        >
        </path>
        <path
          class="elementor-shape-fill"
          opacity="0.66"
          d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        >
        </path>
        <path
          class="elementor-shape-fill"
          d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        >
        </path>
      </svg>
      <div class="max-w-5xl mx-auto">
        <Container>
          <Header title={title} subtitle={subtitle} />
          <div class="flex flex-col gap-12">
            {values.map((value) => (
              <Deposition
                text={value.text}
                name={value.name}
                role={value.role}
                avatar={value.avatar}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
