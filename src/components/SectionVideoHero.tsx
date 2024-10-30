import { Header } from "./Header";

export function SectionVideoHero() {
	return (
		<section className="relative flex w-full h-[932px] md:h-[1117px] overflow-hidden">
			<div className="hidden md:block absolute inset-0 overflow-hidden">
				<iframe
					src="https://player.vimeo.com/video/1013634411?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
					title="ID-SITE-EN"
					className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 scale-125"
				/>
			</div>
			<div className="md:hidden absolute inset-0 overflow-hidden">
				<iframe
					src="https://player.vimeo.com/video/1022153063?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
					title="id-woof-mobile-en (720p)"
					className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 scale-110"
				/>
			</div>
			<div className="relative z-10 w-full pt-[60px] px-[20px] md:pt-[90px] md:px-[160px]">
				<Header />
			</div>
		</section>
	);
}
