import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { SEO } from "@/components/SEO";
import { pageMeta } from "@/lib/meta";

const Index = () => {
  return (
    <>
      <SEO {...pageMeta.home} />
      <Layout>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <InfrastructureSection />
        <ContactCTA />
      </Layout>
    </>
  );
};

export default Index;
