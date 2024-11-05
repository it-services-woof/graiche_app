export function SectionVideoHero() {
	return (
		<section className="relative flex w-full h-[932px] md:h-[1117px] overflow-hidden">
			<div className="hidden md:block absolute inset-0 overflow-hidden">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 scale-110"
				>
					<source
						src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/hero-video-desktop.webm"
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
					className="absolute top-0 left-0 w-full h-full object-cover transform scale-100"
				>
					<source
						src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/hero-video-mobile.webm"
						type="video/webm"
					/>
				</video>
			</div>
		</section>
	);
}
