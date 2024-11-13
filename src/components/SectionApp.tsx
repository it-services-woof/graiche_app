import { Header } from "./Header";

export function SectionApp() {
	return (
		<section className="relative flex w-full h-[1585px] md:h-[1638px] overflow-hidden pt-[60px] md:pt-[90px]">
			<div className="z-10 w-full px-[40px]">
				<Header />
			</div>
			<div className="absolute inset-0 overflow-hidden w-full h-full">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-contain"
				>
					<source
						src="https://d3cxeuu31z1oec.cloudfront.net/videos-webm/Section-1.webm"
						type="video/webm"
					/>
				</video>
			</div>
		</section>
	);
}
