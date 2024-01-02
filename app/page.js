import Advanced from "@/components/Advanced";
import Boost from "@/components/Boost";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shortener from "@/components/Shortener";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Shortener />
      <Advanced />
      <Boost />
      <Footer />
    </main>
  );
}
