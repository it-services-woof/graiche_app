import { SectionApp } from "@/components/SectionApp";
import { SectionAwards } from "@/components/SectionAwards";
import { SectionBenefits } from "@/components/SectionBenefits";
import { SectionCalculator } from "@/components/SectionCalculator";
import { SectionDog } from "@/components/SectionDog";
import { SectionOffers } from "@/components/SectionOffers";
import { SectionQuestions } from "@/components/SectionQuestions";
import { SectionVideoDog } from "@/components/SectionVideoDog";

export default function Home() {
	return (
		<section className="w-full flex flex-col items-center justify-center">
			<SectionVideoDog />
			<SectionApp />
			<SectionAwards />
			<SectionQuestions />
			<SectionDog />
			<SectionBenefits />
			<SectionOffers />
			<SectionCalculator />
		</section>
	);
}
