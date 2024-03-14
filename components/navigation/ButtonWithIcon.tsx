import { useUI } from "deco-sites/pbhub/sdk/useUI.ts";
import Button from "deco-sites/pbhub/components/ui/Button.tsx";
import Icon from "deco-sites/pbhub/components/ui/Icon.tsx";

type Props = {
  icon: "WhatsApp" | "Linkedin" | "Instagram" | "Message";
  url: string;
};

const ButtonWithIcon = ({ icon, url }: Props) => {
  const { displaySearchDrawer, displaySearchPopup } = useUI();

  return (
    <>
      <Button
        class="btn-circle btn-sm btn-ghost sm:flex bg-primary-500 hover:bg-primary-400 items-center justify-center hover:scale-125 transition:all ease-in-out duration-300"
        aria-label="search icon button"
        onClick={() => {
          displaySearchPopup.value = !displaySearchPopup.value;
        }}
      >
        <a href={url}>
          <Icon
            id={icon}
            size={20}
            strokeWidth={0.1}
            style={{
              color: "#fff",
            }}
          />
        </a>
      </Button>
      <Button
        class="btn-circle btn-sm btn-ghost sm:hidden"
        aria-label="search icon button"
        onClick={() => {
          displaySearchDrawer.value = !displaySearchDrawer.value;
        }}
      >
        <Icon id={icon} size={20} strokeWidth={0.1} />
      </Button>
    </>
  );
};

export default ButtonWithIcon;
