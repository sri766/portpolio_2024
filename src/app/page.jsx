import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Swiper from "../components/Swiper";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
export default function Home() {

  return (
    <>
      <video
          autoPlay
          muted
          loop
          id='myVideo'
          className='absolute h-[850px] rotate-180 left-0 -top-[26rem] z-[-5] object-cover opacity-15'
        >
          <source src='/space-assets/blackhole.webm' type='video/webm' />
        </video>
      <div className="main relative my-2 mx-4 lg:mx-64">
        <Hero />
        <Experience />
        <Skills />
        <Swiper />
        <Footer />
      </div>
    </>
  );
}


