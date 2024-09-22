import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Skills,
  SEO,
} from "../components";

function Home() {
  return (
    <>
      <SEO
        description="Defiboy is a Developer Relations and Advocate with over 5 years of development experience and 2+ years in community management. Now transitioning full-time into DevRel and Dev Advocacy, he specializes in building developer communities and enhancing engagement through Web3 technologies."
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
