import Services from "@/components/home/services";
import Connect from "@/components/global/connect";
import CompletedProject from "@/components/home/completedProject";
import OurTech from "@/components/home/ourTech";
import Platforms from "@/components/home/platforms";
import DigitalJourny from "@/components/home/digitalJourny";
import DedicatedResource from "@/components/home/dedicatedResource";
import Professionalism from "@/components/home/professionalism";
import DiverseIndustries from "@/components/home/diverseIndustries";
import CustomerExprience from "@/components/home/customerExprience";
import OurClient from "@/components/home/ourClient";
import FeaturedArticles from "@/components/home/featuredArticales";
import GetInTouch from "@/components/home/getInTouch";
import Header from "@/components/home/header";

export default function Home() {
  return (
      <>
          <Header />
        <Services/>
        <Connect/>
        <CompletedProject/>
        <OurTech/>
        <Platforms/>
        <DigitalJourny/>
        <DedicatedResource/>
        <Professionalism/>
        <DiverseIndustries/>
        <CustomerExprience/>
        <OurClient/>
        <FeaturedArticles/>
          <GetInTouch/>
      </>
  );
}
