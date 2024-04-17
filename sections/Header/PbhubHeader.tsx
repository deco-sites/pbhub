import { ImageWidget } from "apps/admin/widgets.ts";
import { SiteNavigationElement } from "apps/commerce/types.ts";
import Navbar from "deco-sites/pbhub/components/header/Navbar.tsx";
import PbhubNavBar from "deco-sites/pbhub/components/navigation/PbhubNavBar.tsx";
import { SearchButton } from "deco-sites/pbhub/islands/Header/Buttons.tsx";
import ButtonWithIcon from "deco-sites/pbhub/components/navigation/ButtonWithIcon.tsx";

interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

interface Props {
  navItems?: SiteNavigationElement[] | null;
  logo?: Logo;
  iconButtons?: {
    icon: "Instagram" | "Linkedin" | "Message" | "WhatsApp";
    url: string;
  }[];
}

function PbhubHeader({
  navItems = [
    {
      "@type": "SiteNavigationElement",
      name: "Home",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sobre nós",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Serviços",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Casos",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Blog",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Contato",
      url: "/",
    },
  ],
  logo,
  iconButtons = [
    {
      icon: "WhatsApp",
      url:
        "https://api.whatsapp.com/send/?phone=5511989833697&text&type=phone_number&app_absent=0",
    },
    {
      icon: "Instagram",
      url: "https://www.instagram.com/pbhubsolucoes/",
    },
    {
      icon: "Linkedin",
      url: "https://www.linkedin.com/company/pbhubsolucoes",
    },
    {
      icon: "Message",
      url: "/",
    },
  ],
}: Props) {
  return (
    <header class="max-h-[140px] w-full flex items-center justify-center p-4 ">
      <div class="w-[90%] flex justify-center items-center">
        <img
          src={logo?.src}
          class="h-[76px] w-[150px]"
          alt={logo?.alt}
          width={logo?.width}
          height={logo?.height}
        />

        <PbhubNavBar item={navItems as SiteNavigationElement[]} />

        <div class="lg:flex hidden items-center lg:gap-2">
          {iconButtons.map((button) => (
            <ButtonWithIcon icon={button.icon} url={button.url} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default PbhubHeader;
