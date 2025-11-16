import Herobg from "../assets/Herofinal.png";

function Hero() {
  return (
    <section className="mt-14 ml-4 p-4 flex justify-center">
      <div className="w-full max-w-6xl flex justify-center">
        <img
          src={Herobg}
          alt="Hero"
          className="w-full object-contain rounded-xl"
        />
      </div>
    </section>
  );
}

export default Hero;
