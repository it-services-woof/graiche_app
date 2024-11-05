import { SectionVideoDog } from "@/components/SectionVideoDog";
import { SectionVideoHero } from "@/components/SectionVideoHero";
import { SectionDog } from "@/components/SectionDog";
import { SectionBenefits } from "@/components/SectionBenefits";
import { SectionOffers } from "@/components/SectionOffers";
import { SectionCalculator } from "@/components/SectionCalculator";
import { SectionFrequentlyQuestions } from "@/components/SectionFrequentlyQuestions";

export default function Home() {
	return (
		<section className="w-full flex flex-col items-center justify-center">
			<SectionVideoDog />
			<SectionVideoHero />
			<SectionDog />
			<SectionBenefits />
			<SectionOffers />
			<SectionCalculator />
			<SectionFrequentlyQuestions />
		</section>
	);
}
