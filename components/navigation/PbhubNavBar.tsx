import { SiteNavigationElement } from "apps/commerce/types.ts";

const PbhubNavBar = ({ item }: { item: SiteNavigationElement[] }) => {
  return (
    <nav class={`w-[80%] flex items-center justify-center ml-5`}>
      <ul class={`flex gap-10 items-center`}>
        {item?.map((node) => (
          <li class="hover:bg-primary-400 hover:text-white hover:font-medium hover:scale-125 transition:all ease-in-out duration-300 px-6 py-2 rounded-md cursor-pointer ">
            <a href={node.url}>
              <span>{node.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PbhubNavBar;
