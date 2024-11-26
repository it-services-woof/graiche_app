import { BackgroundVideo } from "../background-video";
import { Header } from "../Header";
import { AppStore } from "./components/AppStores";

export function SectionHero() {
	return (
		<section className="relative flex flex-col w-full items-center justify-start min-h-[918px] md:min-h-[1176px]">
			<Header />
			<BackgroundVideo
				className="hidden md:block object-cover"
				src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/hero-desktop.webm"
			/>
			<BackgroundVideo
				className="md:hidden mt-[80px] object-contain"
				src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/hero-mobile.webm"
			/>
			<AppStore />
		</section>
	);
}
