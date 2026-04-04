import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureTags } from "@/components/FeatureTags";
import { Statistics } from "@/components/Statistics";
import { WhoIsItFor } from "@/components/WhoIsItFor";
import { CourseProgram } from "@/components/CourseProgram";
import { Author } from "@/components/Author";
import { CtaFooter } from "@/components/CtaFooter";
import { FloatingCta } from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Hero />
        <FeatureTags />
        <Statistics />
        <WhoIsItFor />
        <CourseProgram />
        <Author />
        <CtaFooter />
      </div>
      <FloatingCta />
    </>
  );
}
