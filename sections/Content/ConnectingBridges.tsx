export interface Props {
  subtitle: string;
  description: string;
  urlSource: string;
}

export default function ConnectingBridges({
  subtitle,
  description,
  urlSource,
}: Props) {
  return (
    <section class="w-full py-[20px] px-[20px] items-center md:px-[30px] md:py-[30px] flex flex-col md:flex-row md:justify-center md:gap-[40px] gap-[20px] bg-[#E6E8E6]">
      <div class="flex flex-col md:items-start md:w-[50%] w-full gap-[15px] md:gap-[30px]">
        <div class="">
          <h2 class="text-3xl md:text-[42px] text-secondary font-sans text-center md:text-start">
            SOMOS{" "}
            <strong class="text-3xl md:text-[42px] text-secondary font-sans ">
              PONTE
            </strong>{" "}
            QUE{" "}
            <strong class="text-3xl md:text-[42px] text-secondary font-sans ">
              CONECTA IDEIAS
            </strong>
          </h2>
        </div>

        <div class="flex flex-col md:flex-col gap-[10px] w-full ">
          {subtitle && <p class="md:text-[16px] text-secondary">{subtitle}</p>}
          {description && (
            <p class="md:text-[16px] text-secondary">{description}</p>
          )}
        </div>
      </div>

      <video width="500" height="300" controls>
        <source src={urlSource} type="" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
