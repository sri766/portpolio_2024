import Hero from "@/components/Hero";
import Swiper from "@/components/Swiper";


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
      <div className="main relative my-2 mx-12 lg:mx-64">
        <Hero />
        <Swiper />
      </div>
    </>
  );
}
