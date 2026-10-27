import {
  About,
  Contact,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  SocialMedia,
} from "@/components";

import IntroWrapper from "@/components/IntroWrapper";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <IntroWrapper>
      <div>
        <Navbar />
        <Hero />
        <div className="bg-primary relative z-[1] h-full">
          <div className="relative z-[1]">
            <About />

            <div className="overflow-hidden">
              <Tech />
            </div>
            <ProjectShowcase />
            {/* <Works /> */}

            <Contact />
            <SocialMedia />
          </div>
          <StarsCanvas />
        </div>
      </div>
    </IntroWrapper>
  );
}
