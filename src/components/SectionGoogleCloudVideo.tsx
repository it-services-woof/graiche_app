import { BackgroundVideo } from "./background-video";

export function SectionGoogleCloudVideo() {
	return (
		<section className="relative flex w-full h-[932px] md:h-[1117px] overflow-hidden">
			<BackgroundVideo
				className="hidden md:block object-cover"
				src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/google-cloud-video-desktop.webm"
			/>
			<BackgroundVideo
				className="md:hidden object-cover"
				src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/google-cloud-video-mobile.webm"
			/>
		</section>
	);
}
