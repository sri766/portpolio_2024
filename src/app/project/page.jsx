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
    Icon: GlobeIcon,
    name: "StoreTrend",
    description: "Ecommerce Website build with React,Redux and Strapi.",
    href: "https://store-trend.vercel.app/",
    cta: "Visit Site",
    background: <Image height={600} width={600} className="absolute opacity-60 object-cover" src="/assets/project/storetrend1.png" alt="storetrend"/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FileTextIcon,
    name: "MovieFlex",
    description: "A collection of Movies with TMDB API.",
    href: "https://movie-db-theta-ten.vercel.app/",
    cta: "Visit Site",
    background: <Image height={1500} width={500} className="absolute opacity-60 object-cover" src="/assets/project/movie.png" alt="movie"/>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Netflix Clone with CI/CD",
    description: "Search through all your files in one place.",
    href: "https://sri766-blog.vercel.app/netflix-clone-on-aws-ec2",
    cta: "Visit Blog",
    // background: <Image height={500} width={500} className="absolute opacity-60 aspect-video" src="/assets/project/hashnode.png" alt="devops"/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "Disney+ Clone",
    description: "Build with React, Firebase Auth and FireStore ",
    href: "https://todo-3ce31.web.app/",
    cta: "Visit Site",
    background: <Image height={600} width={600} className="absolute opacity-60 object-cover" src="/assets/project/disney3.png" alt="disney+"/>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "IndiQuest",
    description:
      "A Web-App which promote India's Heritage and Culture",
    href: "https://indi-quest.vercel.app/",
    cta: "Visit Site",
    background: <Image height={500} width={500} className="absolute opacity-60 object-cover" src="/assets/project/indiquest.png" alt="indiquest" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoDemo = () => {
  return (
    <div className="flex flex-col h-full relative lg:mx-64">
      <div className="title">
        <video
            autoPlay
            muted
            loop
            id='myVideo'
            className='absolute h-full w-full rotate-180 left-0 top-[-55%] z-[-5] object-cover opacity-35'
          >
            <source src='/space-assets/encryption.webm' type='video/webm'/>
          </video>
      </div>
      <h1 className="lg:text-9xl flex justify-center items-center py-4 text-4xl font-semibold text-white text-gradient">Projects</h1>
      <BentoGrid className="lg:grid-cols-3 mx-6 my-8">
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
