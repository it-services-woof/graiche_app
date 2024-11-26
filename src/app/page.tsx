import { Awards } from "@/components/awards";
import { Footer } from "@/components/Footer";
import { SectionBenefits } from "@/components/SectionBenefits";
import { SectionCalculator } from "@/components/SectionCalculator";
import { SectionDog } from "@/components/SectionDog";
import { SectionFrequentlyQuestions } from "@/components/SectionFrequentlyQuestions";
import { SectionGoogleCloudVideo } from "@/components/SectionGoogleCloudVideo";
import { SectionOffers } from "@/components/SectionOffers";
//import { SectionQuestions } from "@/components/SectionQuestions";
import { SectionVideoDog } from "@/components/SectionVideoDog";

export default function Home() {
	return (
		<section className="w-full flex flex-col items-center justify-center">
			<Awards />
			<SectionVideoDog />
			<SectionGoogleCloudVideo />
			<SectionDog />
			<SectionBenefits />
			<SectionOffers />
			<SectionCalculator />
			<SectionFrequentlyQuestions />
			<Footer />
		</section>
	);
}
