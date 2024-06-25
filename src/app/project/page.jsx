import { BentoCard, BentoGrid } from "../../components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <Image height={500} width={500} className="absolute -right-20 -top-20 opacity-60" src="/assets/project/portfolio.png" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <Image height={500} width={500} className="absolute -right-20 -top-20 opacity-60" src="/assets/project/movie1.png" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <Image height={500} width={500} className="absolute -right-20 -top-20 opacity-60" src="/assets/project/movie2.png" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <Image height={500} width={500} className="absolute -right-20 -top-20 opacity-60" src="/assets/project/disney1.png" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <Image height={500} width={500} className="absolute -right-20 -top-20 opacity-60" src="/assets/project/indiquest1.png" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoDemo = () => {
  return (
    <div className="flex flex-col relative lg:mx-64 ">
      <div className="title">
        <video
            autoPlay
            muted
            loop
            id='myVideo'
            className='h-full w-full rotate-180 left-0 top-[-55%] z-[-5] object-cover opacity-35'
          >
            <source src='/space-assets/encryption.webm' type='video/webm' />
          </video>
          <h1 className="absolute top-0 left-[50%] lg:top-[15%] lg:left-[25%] lg:text-9xl py-4 sm:text-4xl font-bold text-white text-gradient">Projects</h1>
      </div>
      <BentoGrid className="lg:grid-cols-3">
      {features.map((feature) => (
        <BentoCard
          key={feature.name} 
          {...feature}/>
      ))}
       </BentoGrid>
    </div>
  );
};

export default BentoDemo;
