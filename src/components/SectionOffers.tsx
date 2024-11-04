import Image from "next/image";

export function SectionOffers() {
	return (
		<section className="relative flex items-start justify-center w-full h-[580px] md:h-[1117px] max-h-[580px] md:max-h-[1117px] pt-[60px] md:pt-[140px]">
			<div className="absolute inset-0 -z-10 hidden md:block">
				<Image
					src="https://d3cxeuu31z1oec.cloudfront.net/images/offers-desktop.webp"
					alt="offers"
					fill
					className="object-cover"
					style={{
						objectPosition: "center",
					}}
				/>
			</div>
			<div className="absolute inset-0 -z-10 block md:hidden">
				<Image
					src="https://d3cxeuu31z1oec.cloudfront.net/images/offers-mobile.webp"
					alt="offers"
					fill
					className="object-cover"
					style={{
						objectPosition: "center",
					}}
				/>
			</div>
		</section>
	);
}
