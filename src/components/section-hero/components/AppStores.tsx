import Image from "next/image";

import AppStoreImage from "@/assets/app-store.webp";
import GooglePlayImage from "@/assets/google-play.webp";

export function AppStore() {
	return (
		<div className="w-full flex items-center justify-center flex-col gap-8 mt-[60px] md:mt-[90px]">
			<div className="flex flex-col gap-6 md:gap-8">
				<div className="flx flex-col items-center justify-center">
					<h1 className="text-[32px] md:text-[56px] font-bold text-white max-w-[350px] md:max-w-[982px] text-center text-shadow-white-glow leading-[35px] md:leading-[67px]">
						ID Pet Woof
					</h1>
					<h1 className="text-[24px] md:text-[44px] font-bold text-white max-w-[350px] md:max-w-[982px] text-center text-shadow-white-glow leading-[35px] md:leading-[67px]">
						para Graiche
					</h1>
				</div>
				<span className="w-[232px] md:w-full text-[20px] md:text-2xl font-normal text-white max-w-[350px] md:max-w-[982px] text-center text-shadow-white-glow leading-[24px] md:leading-[26px]">
					Tudo o que seu pet precisa, em um só lugar
				</span>
			</div>
			<div className="flex items-center gap-3 md:gap-6 md:flex-row flex-col">
				<Image
					src={AppStoreImage}
					alt="app-store"
					className="cursor-pointer md:w-full w-[160px]"
				/>
				<Image
					src={GooglePlayImage}
					alt="google-play"
					className="cursor-pointer md:w-full w-[160px]"
				/>
			</div>
		</div>
	);
}
