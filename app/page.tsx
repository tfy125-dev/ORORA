import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Ritual } from "@/components/ritual";
import { Signup } from "@/components/signup";
import { Story } from "@/components/story";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Story />
        <Features />
        <Ritual />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
