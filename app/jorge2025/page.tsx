import { HeroSectionJorge } from "@/components/hero-section-jorge"
import { CandidateSection } from "@/components/candidate-section"
import { PlatformSection } from "@/components/platform-section"
import { VotingSection } from "@/components/voting-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <HeroSectionJorge />
      <CandidateSection />
      <PlatformSection />
      <VotingSection />
      <Footer />
    </>
  )
}
