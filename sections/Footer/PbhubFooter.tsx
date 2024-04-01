import { ImageWidget } from "apps/admin/widgets.ts";

// Definição das interfaces para as propriedades
export interface Props {
  baseContact: BaseTextConfiguration;
  baseText: BaseTextConfiguration;
  logo?: Logo;
  social: Social[];
}

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface Social {
  src: ImageWidget;
  alt: string;
  href: string;
}

export interface BaseTextConfiguration {
  text: string;
  textFontSize: number;
  textFontWeight?: number;
  textAlign?: "center" | "left" | "right";
}

// Propriedades padrão
const DEFAULT_PROPS = {
  baseContact: {
    text: "Insira seus contatos!", // Texto padrão
    textFontSize: 12, // Tamanho padrão da fonte
    textFontWeight: 600, // Peso padrão da fonte
    textAlign: "center", // Alinhamento padrão do texto
  },
  baseText: {
    text: "Insira seu texto do Footer!", // Texto padrão
    textFontSize: 12, // Tamanho padrão da fonte
    textFontWeight: 600, // Peso padrão da fonte
    textAlign: "center", // Alinhamento padrão do texto
  },
};

export default function PbhubFooter(props: Props) {
  // Combina as propriedades fornecidas com as padrões
  const { baseContact, baseText, logo, social } = {
    ...DEFAULT_PROPS,
    ...props,
  };
  // Se 'social' não for um array, esta verificação impedirá o erro.
  const socialContent = Array.isArray(social)
    ? social.map((item, index) => (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        class="w-4 h-4 hover:scale-110 transition-transform duration-500" // Classe para efeito de zoom e transição
      >
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          class="w-4 h-4"
        />
      </a>
    ))
    : null;
  return (
    <div class="w-full text-center bg-primary-500 mb-6 last:mb-0 py-5">
      <div class="flex justify-center mb-6 last:mb-0">
        <img
          src={logo?.src}
          alt={logo?.alt}
          width={logo?.width}
          height={logo?.height}
        />
      </div>
      <div
        class="mb-6 last:mb-0"
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: `${baseContact.textFontSize}px`,
          fontWeight: baseContact.textFontWeight,
          textAlign: baseContact.textAlign,
        }}
      >
        <p style={{ color: "white" }}>{baseContact.text}</p>
      </div>
      <div class="flex justify-center space-x-8 mb-6">
        {socialContent}
      </div>
      <div
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: `${baseText.textFontSize}px`,
          fontWeight: baseText.textFontWeight,
          textAlign: baseText.textAlign,
        }}
      >
        <p style={{ color: "white" }}>{baseText.text}</p>
      </div>
    </div>
  );
}
