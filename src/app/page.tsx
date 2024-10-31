import { SectionApp } from "@/components/SectionApp";
import { SectionVideoDog } from "@/components/SectionVideoDog";

export default function Home() {
	return (
		<section className="w-full flex flex-col items-center justify-center">
			<SectionVideoDog />
			<SectionApp />
		</section>
	);
}
