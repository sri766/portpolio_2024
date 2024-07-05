import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Swiper from "../components/Swiper";
import Experience from "../components/Experience";

export default function Home() {

  return (
    <>
      <video
          autoPlay
          muted
          loop
          id='myVideo'
          className='absolute h-[850px] rotate-180 left-0 top-[-55%] z-[-5] object-cover opacity-35'
        >
          <source src='/space-assets/blackhole.webm' type='video/webm' />
        </video>
      <div className="main relative my-2 mx-4 lg:mx-64">
        <Hero />
        <Experience />
        <Skills />
        <Swiper />
      </div>
    </>
  );
}


