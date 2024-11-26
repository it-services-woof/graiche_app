import { BackgroundVideo } from "./background-video";

export function SectionVideoDog() {
	return (
		<section className="relative flex items-center justify-center w-full h-[720px] md:h-[692px] overflow-hidden">
			<BackgroundVideo
				className="hidden md:block object-cover"
				src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/video-dog.webm"
			/>
			<BackgroundVideo
				className="md:hidden object-cover"
				src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/video-dog.webm"
			/>
			<div className="flex items-center flex-col gap-6 z-10">
				<h1 className="text-[32px] md:text-[56px] font-bold text-white max-w-[350px] md:max-w-[982px] text-center text-shadow-white-glow leading-[35px] md:leading-[67px]">
					Sistema de gestão inteligente de animais de estimação
				</h1>
				<span className="text-[20px] md:text-2xl font-normal text-white max-w-[350px] md:max-w-[982px] text-center text-shadow-white-glow leading-[24px] md:leading-[26px]">
					Pets mais seguros e saudáveis. Lares mais felizes
				</span>
			</div>
		</section>
	);
}
