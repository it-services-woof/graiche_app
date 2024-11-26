import Image from "next/image";
import { Container } from "./Container";
import Logo from "@/assets/logo.svg";
import LogoParceiro from "@/assets/logo-parceiro.svg";
import AppStore from "@/assets/app-store-2.svg";
import GooglePlay from "@/assets/google-play-2.svg";

export function Footer() {
	return (
		<Container className="relative flex flex-col items-start justify-center pt-[140px] pb-[60px] px-[40px] md:px-0">
			<div className="flex md:flex-row flex-col w-full items-start justify-center">
				<div className="flex flex-col items-start justify-between gap-[40px]">
					<div className="flex flex-col gap-[18px]">
						<Image
							src={Logo}
							alt="logo"
							priority={true}
							className="w-[161px]"
						/>
						<h1 className="text-[20px] md:text-[32px] font-bold text-white text-shadow-white-glow md:leading-[35px] tracking-[0.15px]">
							A ID Pet mais inteligente
						</h1>
						<div className="flex gap-2">
							<Image
								className="w-[28.2px]"
								src={LogoParceiro}
								alt="logo-parceiro"
							/>
							<span className="w-[87px] text-xs text-white">
								Em parceria com a Graiche
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-[18px]">
						<span className="text-white text-xl font-semibold">Baixar app</span>
						<Image src={AppStore} alt="app-store" className="cursor-pointer" />
						<Image
							src={GooglePlay}
							alt="google-play"
							className="cursor-pointer"
						/>
					</div>
				</div>
				<div className="flex w-full">
					<div className="flex gap-[85px] md:gap-[120px] md:flex-row flex-col md:mt-[0px] mt-[60px]">
						<div className="flex flex-col gap-[40px]">
							<div className="flex flex-col gap-6">
								<strong className="text-base font-bold text-white">
									Comunidade
								</strong>
								<div className="flex flex-col gap-[18px]">
									<span className="text-base text-white">
										Solicitar novo Pin
									</span>
									<span className="text-base text-white">
										Denunciar maus-tratos aos animais
									</span>
								</div>
							</div>
							<div className="flex flex-col gap-6">
								<strong className="text-base font-bold text-white">
									Parceiros
								</strong>
								<div className="flex flex-col gap-[18px]">
									<span className="text-base text-white">
										Anúncios e campanhas gratuitas
									</span>
									<span className="text-base text-white">
										Entrar em contato conosco
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<strong className="text-base font-bold text-white">Sobre</strong>
							<div className="flex flex-col gap-[18px]">
								<span className="text-base text-white">Woof</span>
								<span className="text-base text-white">Graiche</span>
								<span className="text-base text-white">Central de ajuda</span>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<strong className="text-base font-bold text-white">Legal</strong>
							<div className="flex flex-col gap-[18px]">
								<span className="text-base text-white">
									Política Pet Friendly
								</span>
								<span className="text-base text-white">
									Procedimentos de Emergência
								</span>
								<span className="text-base text-white">Termos e Condições</span>
								<span className="text-base text-white">
									Política de Privacidade
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-center mt-[48px] mb-[48px]">
				<hr className="w-full border-[#666666]" />
			</div>
			<span className="text-[#AAA] text-base">
				© 2024 Woof ID Pet. Todos os direitos reservados.
			</span>
		</Container>
	);
}
