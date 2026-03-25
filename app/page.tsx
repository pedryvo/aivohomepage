import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SystemOS } from "@/components/sections/system-os";
import { CaseStudy } from "@/components/sections/case-study";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ai-vo",
    url: "https://aivolabs.online",
    areaServed: "Brasil",
    description:
      "MVPs operacionais e automações com IA para pequenas e médias empresas que precisam destravar processos críticos.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+55-77-98835-0905",
      availableLanguage: "Português",
    },
    sameAs: ["https://aivolabs.online"],
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary/30">
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
        />
        <Hero />
        <CaseStudy />
        <Services />
        <SystemOS />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
