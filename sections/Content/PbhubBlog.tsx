import { ImageWidget } from "apps/admin/widgets.ts";

// Definição das interfaces para as propriedades
export interface Props {
  title: string;
  blogs: Blog[];
}

export interface Blog {
  src: ImageWidget;
  alt: string;
  href: string;
  description: string; // Campo de descrição
}

// Propriedades padrão
const DEFAULT_PROPS = {
  title: "Blogs",
  blogs: [], // Definido como um array vazio
};

export default function PbhubFooter(props: Props) {
  const { title, blogs } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const blogsContent = Array.isArray(blogs) && blogs.length > 0
    ? (
      <div class="flex justify-center mt-8 mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogs.slice(0, 3).map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              class="block hover:scale-110 transition-transform duration-300 overflow-hidden m-4 shadow-lg rounded-lg bg-white p-6" // Mantém a classe rounded-lg para todo o bloco
            >
              <img
                src={item.src}
                alt={item.alt}
                class="w-full h-auto object-cover rounded-lg" // Aplica arredondamento a todos os cantos da imagem
              />
              <p class="text-primary-500 text-center font-semibold p-2">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    )
    : null;

  return (
    <div class="w-full text-center bg-gray-200 py-16">
      <h1 class="text-3xl font-semibold text-primary-500 mb-4">{title}</h1>
      {blogsContent}
    </div>
  );
}
