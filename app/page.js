import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
    </main>
  );
}
