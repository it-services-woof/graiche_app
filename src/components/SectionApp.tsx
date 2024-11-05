import Image from "next/image";

import { Container } from "./Container";
import { Header } from "./Header";

import AppStore from "@/assets/app-store.webp";
import GooglePlay from "@/assets/google-play.webp";

import Awards1 from "@/assets/awards-1.webp";
import Awards2 from "@/assets/awards-2.webp";
import Awards3 from "@/assets/awards-3.webp";
import Awards4 from "@/assets/awards-4.webp";

import EllipseApp from "@/assets/ellipse-app.svg";
import Pet from "@/assets/pet.svg";
import Share from "@/assets/share-icon.svg";
import Doctor from "@/assets/doctor.svg";
import Discounts from "@/assets/discounts.svg";
import Medication from "@/assets/medication.svg";
import ContactEmergency from "@/assets/contact-emergency.svg";

export function SectionApp() {
	return (
		<Container className="relative flex flex-col items-center justify-start w-full h-[1600px] gap-[80px] md:gap-[90px] pt-[60px] md:pt-[90px] pb-[80px] md:pb-[140px]">
			<div className="z-10 w-full px-[40px]">
				<Header />
			</div>
			<div className="hidden absolute inset-0 -z-10 overflow-hidden">
				<Image
					src={EllipseApp}
					alt="ellipse-app"
					fill
					className="object-contain"
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-14 w-full">
				<div className="w-full flex items-center justify-center flex-col gap-8 z-10">
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
				<div className="w-full flex items-center justify-center h-[480px] md:h-[681px]">
					<div className="relative flex items-center justify-between h-full w-full">
						<Image
							src="https://d3cxeuu31z1oec.cloudfront.net/images/app.webp"
							alt="Background"
							width={724}
							height={682}
							className="absolute inset-0 w-full h-full object-contain -z-10"
						/>

						<div className="flex-1 flex items-end justify-end h-full">
							{/* ----------- Desktop ----------- */}
							<div className="hidden w-full h-full flex-1 md:flex flex-col gap-[100px] py-[80px]">
								<div className="ml-[60px] w-[235px] h-[97px] relative flex items-center justify-center">
									<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
									<div className="flex items-center justify-center absolute top-0 right-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
										<Image src={Share} alt="share" />
									</div>
									<span className="relative z-10 text-white max-w-[150px] text-xs font-semibold leading-normal tracking-[0.2px] text-center">
										Informações compartilháveis do pet para maiores cuidados
									</span>
								</div>
								<div className="w-[235px] h-[97px] relative flex items-center justify-center">
									<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
									<div className="flex items-center justify-center absolute top-0 right-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
										<Image src={Doctor} alt="share" />
									</div>
									<span className="relative z-10 text-white max-w-[147px] text-xs font-semibold leading-normal tracking-[0.25px] text-center">
										Integração com serviços pet friendly
									</span>
								</div>
								<div className="ml-[60px] w-[235px] h-[97px] relative flex items-center justify-center">
									<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
									<div className="flex items-center justify-center absolute top-0 right-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
										<Image src={Discounts} alt="share" />
									</div>
									<span className="relative z-10 text-white max-w-[130px] text-xs font-semibold leading-normal tracking-[0.2px] text-center">
										Ofertas e campanhas exclusivas para você e seu pet
									</span>
								</div>
							</div>
							{/* -------------------------------*/}
							{/* ----------- MOBILE ----------- */}
							<div className="md:hidden w-[188px] h-[78px] relative flex items-center justify-center">
								<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
								<div className="flex items-center justify-center absolute top-0 right-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
									<Image src={Share} alt="share" />
								</div>
								<span className="relative z-10 text-white max-w-[150px] text-xs font-semibold leading-normal tracking-[0.2px] text-center">
									Informações compartilháveis do pet para maiores cuidados
								</span>
							</div>
							{/* -------------------------------*/}
						</div>
						<div className="flex-1 flex items-start justify-start h-full">
							{/* ----------- Desktop ----------- */}
							<div className="hidden w-full h-full flex-1 md:flex flex-col items-end justify-start gap-[100px] py-[80px]">
								<div className="mr-[60px] w-[235px] h-[97px] relative flex items-center justify-center">
									<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
									<div className="flex items-center justify-center absolute top-0 left-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[-40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
										<Image src={Pet} alt="pet" />
									</div>
									<span className="relative z-10 text-white max-w-[150px] text-xs font-semibold leading-normal tracking-[0.2px] text-center">
										Identificação rápida do pet para segurança
									</span>
								</div>
								<div className="w-[235px] h-[97px] relative flex items-center justify-center">
									<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
									<div className="flex items-center justify-center absolute top-0 left-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[-40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
										<Image src={Medication} alt="pet" />
									</div>
									<span className="relative z-10 text-white max-w-[150px] text-xs font-semibold leading-normal tracking-[0.2px] text-center">
										Cuidados preventivos e lembretes de medicação
									</span>
								</div>
								<div className="mr-[60px] w-[235px] h-[97px] relative flex items-center justify-center">
									<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
									<div className="flex items-center justify-center absolute top-0 left-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[-40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
										<Image src={ContactEmergency} alt="pet" />
									</div>
									<span className="relative z-10 text-white max-w-[150px] text-xs font-semibold leading-normal tracking-[0.2px] text-center">
										Contato de emergência sempre disponível
									</span>
								</div>
							</div>
							{/* -------------------------------*/}
							{/* ----------- MOBILE ----------- */}
							<div className="md:hidden w-[188px] h-[78px] relative flex items-center justify-center">
								<div className="absolute inset-0 bg-[rgba(253,4,121,0.2)] rounded-[19px] border-[0.8px] border-[#B6004D] shadow-[0_0_40px_0_#FD0479] backdrop-blur-[6px]" />
								<div className="flex items-center justify-center absolute top-0 left-0 w-[35px] h-[35px] bg-[rgba(253,4,121,0.6)] shadow-[0_0_40px_0_#FD0479] rounded-full z-20 translate-x-[-40%] translate-y-[-40%] border-[0.8px] border-[#B6004D]">
									<Image src={Pet} alt="pet" />
								</div>
								<span className="relative z-10 text-white max-w-[150px] text-xs font-semibold leading-normal tracking-[0.2px] text-center">
									Identificação rápida do pet para segurança
								</span>
							</div>
							{/* -------------------------------*/}
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-y-14 md:grid-cols-4 md:gap-y-0 md:gap-x-8">
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2023
					</span>
					<Image src={Awards1} alt="awards-1" />
					<span className="text-xs md:text-base font-bold text-white max-w-[166px] text-center">
						em destaque no Google Next
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2019
					</span>
					<Image src={Awards2} alt="awards-2" />
					<span className="text-xs md:text-base font-bold text-white max-w-[160px] text-center">
						Vencedor do 360Lab xCite
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2024
					</span>
					<Image src={Awards3} alt="awards-3" />
					<span className="text-xs md:text-base font-bold text-white max-w-[212px] text-center">
						Vencedor do GITEX GLOBAL & Expand North Star SP Pitch Competition
					</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-4">
					<span className="text-sm font-medium text-white text-shadow-white-glow">
						2024
					</span>
					<Image src={Awards4} alt="awards-4" />
					<span className="text-xs md:text-base font-bold text-white max-w-[166px] text-center">
						Vencedor do Miami Immersion Program
					</span>
				</div>
			</div>
		</Container>
	);
}
