import { herobg } from "../assets/images";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-4 shadow-lg md:py-12 xl:py-20">
      <img src={ herobg } alt="background photo" className="absolute inset-0 h-screen w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
      <div className="relative flex flex-col items-center mt-5 sm:max-w-xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-white sm:text-8xl md:mb-8 md:text-6xl">PappaPaul <span className="text-green-500">Says</span></h1>
        <p className="mb-12 text-center text-lg text-white sm:text-3xl md:mb-14">Clothes and Clothings</p>
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block px-8 py-3 text-center text-lg font-semibold text-white border border-green-500 outline-none ring-indigo-300 transition duration-100 hover:bg-green-500 hover:text-black focus-visible:ring active:bg-indigo-700 md:text-base">Shop Now</a>
        </div>
      </div>
    </section>
  )
}

export default Hero