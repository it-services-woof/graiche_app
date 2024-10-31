import Image from "next/image";
import AppStore from "@/assets/app-store.svg";
import GooglePlay from "@/assets/google-play.svg";
import Ellipse from "@/assets/ellipse.svg";
import App from "@/assets/app.png";
import { Container } from "./Container";

export function SectionApp() {
	return (
		<section className="relative flex flex-col items-start justify-center w-full overflow-hidden pt-[110px] md:pt-[140px]">
			<div className="absolute inset-0 -z-10">
				<Image
					src={Ellipse}
					alt="ellipse"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					className="md:scale-100 scale-[1.5] translate-y-[-20%] md:translate-y-0"
				/>
			</div>
			<div className="w-full flex items-center justify-center flex-col gap-8 z-10">
				<div className="flex flex-col gap-3 md:gap-8">
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
						src={AppStore}
						alt="app-store"
						className="cursor-pointer md:w-full w-[200px]"
					/>
					<Image
						src={GooglePlay}
						alt="google-play"
						className="cursor-pointer md:w-full w-[200px]"
					/>
				</div>
			</div>
			<div className="w-full flex items-center justify-center mt-0 md:mt-[60px]">
				<Container className="relative flex items-center justify-between h-[681px] px-[30px] md:px-[148px]">
					<div className="absolute inset-0 -z-10">
						<Image
							src={App}
							alt="app"
							layout="fill"
							objectFit="contain"
							objectPosition="center"
						/>
					</div>
					<div className="flex items-end h-[70%]">
						<div className="w-[160px] md:w-[235px] bg-[#FD0479] rounded-3xl flex items-center justify-center shadow-custom-pink px-[16px] py-[15px] md:px-6 md:py-5">
							<span className="text-white max-w-[187px] text-xs md:text-[18px] font-semibold leading-normal tracking-[0.25px] text-center">
								Identificação rápida do pet para segurança
							</span>
						</div>
					</div>
					<div className="flex items-start h-[70%]">
						<div className="w-[160px] md:w-[235px] bg-[#FD0479] rounded-3xl flex items-center justify-center shadow-custom-pink px-[16px] py-[10px] md:px-6 md:py-5">
							<span className="text-white max-w-[187px] text-xs md:text-[18px] font-semibold leading-normal tracking-[0.25px] text-center">
								Informações compartilháveis do pet para maiores cuidados
							</span>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
}
