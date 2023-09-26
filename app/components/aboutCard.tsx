import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";

type Props = {
  img: string | StaticImport;
  desc: string;
  title: string;
  link: string;
};
const AboutCard: FC<Props> = ({ img, desc, title, link }) => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-around text-gray-700 md:p-10 p-2">
      <Image
        unoptimized={true}
        width={120}
        height={120}
        src={img}
        className="object-cover md:basis-[45%] basis-full md:w-[''] w-[50%]"
        alt="logo"
        title="Logo"
      />
      <div className="flex flex-col basis-[45%] p-5">
        <span className="self-center md:text-2xl text-lg font-bold">
          <a href={link} target="_blank" className="text-blue-400">{title}</a>
        </span>
        <span className="md:text-base text-sm md:text-left text-center">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default AboutCard;
