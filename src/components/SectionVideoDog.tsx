export function SectionVideoDog() {
	return (
		<section className="relative flex items-center justify-center w-full h-[720px] md:h-[692px] overflow-hidden">
			<div className="hidden md:block absolute inset-0 overflow-hidden">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 scale-125"
				>
					<source
						src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/dog-video.webm"
						type="video/webm"
					/>
				</video>
			</div>
			<div className="md:hidden absolute inset-0 overflow-hidden">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute top-0 left-0 w-full h-full object-cover transform scale-125"
				>
					<source
						src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/dog-video.webm"
						type="video/webm"
					/>
				</video>
			</div>
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
