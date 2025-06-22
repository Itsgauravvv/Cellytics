import Features from "../components/Home/Features";
import Logo from "../components/Logo";
import Hero from "../components/Home/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B2B] flex flex-col">
      <Logo />

      <Hero />

      <Features />
    </div>
  );
}

export default Home;
