import Image from "next/image";

export function SectionBenefits() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full gap-0 md:max-h-[2234px] max-h-[2320px] md:h-[2234px] h-[2320px]">
			<div className="relative flex-1 max-h-[580px] md:max-h-[1117px] h-[580px] md:h-[1117px] overflow-hidden pt-[60px] md:pt-[140px] flex items-start justify-center">
				<div className="absolute inset-0 -z-10">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/benefits-1.webp"
						alt="benefits-1"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain translate-y-[32%]"
						style={{
							objectPosition: "center",
							filter: "brightness(0.9)",
						}}
					/>
				</div>
				<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[344px] md:max-w-[664px] text-center leading-tight">
					Lembretes de medicamentos, vacinas e mais
				</h1>
			</div>
			<div className="relative flex-1 max-h-[580px] md:max-h-[1117px] h-[580px] md:h-[1117px] overflow-hidden pt-[60px] md:pt-[140px] flex items-center md:items-start justify-center">
				<div className="absolute inset-0 -z-10">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/benefits-2.webp"
						alt="benefits-2"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						style={{ objectPosition: "center", filter: "brightness(0.8)" }}
					/>
				</div>
				<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[384px] md:max-w-[664px] text-center leading-tight">
					Contato de emergência sempre disponível
				</h1>
			</div>
			<div className="relative flex-1 max-h-[580px] md:max-h-[1117px] h-[580px] md:h-[1117px] overflow-hidden pt-[60px] md:pt-[140px] flex items-center md:items-start justify-center">
				<div className="absolute inset-0 -z-10">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/benefits-3.webp"
						alt="benefits-3"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover"
						style={{ objectPosition: "center", filter: "brightness(0.8)" }}
					/>
				</div>
				<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[344px] md:max-w-[664px] text-center leading-tight">
					Compartilhamento do cuidado do seu animal de estimação
				</h1>
			</div>
			<div className="relative flex-1 max-h-[580px] md:max-h-[1117px] h-[580px] md:h-[1117px] overflow-hidden pt-[60px] md:pt-[140px] flex items-start justify-center">
				<div className="absolute inset-0 -z-20">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/benefits-4.webp"
						alt="benefits-4"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain scale-[0.7] translate-y-[25%] md:translate-y-[16%]"
						style={{ objectPosition: "center" }}
					/>
				</div>
				<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[300px] md:max-w-[664px] text-center leading-tight">
					Integração com serviços pet friendly
				</h1>
			</div>
		</section>
	);
}
