import Image from "next/image";

import Awards1 from "@/assets/awards-1.png";
import Awards2 from "@/assets/awards-2.png";
import Awards3 from "@/assets/awards-3.png";
import Awards4 from "@/assets/awards-4.png";

export function SectionAwards() {
	return (
		<section className="flex items-center justify-center w-full">
			<div className="grid w-full max-w-[350px] md:max-w-[1064px] grid-cols-2 gap-y-14 md:grid-cols-4 md:gap-y-0 md:gap-x-8">
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2023
					</span>
					<Image src={Awards1} alt="awards-1" />
					<span className="text-sm font-bold text-white max-w-[166px] text-center">
						em destaque no Google Next
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2019
					</span>
					<Image src={Awards2} alt="awards-2" />
					<span className="text-sm font-bold text-white max-w-[160px] text-center">
						Vencedor do 360Lab xCite
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2024
					</span>
					<Image src={Awards3} alt="awards-3" />
					<span className="text-sm font-bold text-white max-w-[212px] text-center">
						Vencedor do GITEX GLOBAL & Expand North Star SP Pitch Competition
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2024
					</span>
					<Image src={Awards4} alt="awards-4" />
					<span className="text-sm font-bold text-white max-w-[166px] text-center">
						Vencedor do Miami Immersion Program
					</span>
				</div>
			</div>
		</section>
	);
}
