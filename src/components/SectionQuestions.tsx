import Image from "next/image";
import { Container } from "./Container";
import CatIcon from "@/assets/cat-icon.svg";
import SubmitIcon from "@/assets/submit-icon.svg";
import Ellipse from "@/assets/ellipse-2.svg";

export function SectionQuestions() {
	return (
		<section className="relative flex flex-col items-center justify-start w-full min-h-[968px] py-[110px] gap-[80px]">
			<div className="absolute inset-0 -z-10 block md:hidden">
				<Image
					src={Ellipse}
					alt="ellipse"
					fill
					className="object-contain scale-100 translate-y-[-30%]"
					style={{ objectPosition: "center" }}
				/>
			</div>
			<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[350px] md:max-w-[838px] text-center px-4 md:px-0 leading-[35px] md:leading-normal">
				Dúvidas sobre cuidados pet? Pergunte à vontade!
			</h1>

			<Container className="flex flex-col md:flex-row items-center justify-between gap-[50px] md:gap-0">
				<div className="flex flex-col items-center justify-between w-full gap-8 md:gap-0 md:h-[650px] max-w-[350px]">
					<div className="flex flex-col items-center justify-center gap-3">
						<strong className="text-lg font-bold text-[#FD0479] text-center md:text-left">
							Como prevenir pulgas e carrapatos em cães e gatos?
						</strong>
						<span className="text-base font-normal text-white leading-[24px] tracking-[0.25px] text-center md:text-left">
							Para prevenir esses parasitas, mantenha o ambiente sempre limpo e
							aplique regularmente o antipulgas e carrapatos no seu pet.
						</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-3">
						<strong className="text-lg font-bold text-[#FD0479] text-center md:text-left">
							Meu cachorro não para de latir. O que posso fazer para resolver?
						</strong>
						<span className="text-base font-normal text-white leading-[24px] tracking-[0.25px] text-center md:text-left">
							Para ajudar seu cachorro a não latir excessivamente, você deve:
							ignorar os latidos quando não forem necessários, recompensar seu
							cachorro quando ele estiver calmo e ensina-lo a latir sob comando.
						</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-3">
						<strong className="text-lg font-bold text-[#FD0479] text-center md:text-left">
							Quais são os benefícios da castração para cães e gatos?
						</strong>
						<span className="text-base font-normal text-white leading-[24px] tracking-[0.25px] text-center md:text-left">
							A castração possui vários benefícios, incluindo: prevenir
							gestações indesejadas, reduzir o risco de câncer e potencialmente
							melhorar o comportamento do animal.
						</span>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between w-full gap-8 md:gap-0 md:h-[650px] max-w-[350px] md:max-w-full">
					<div className="flex flex-col items-center justify-between w-full max-w-[370px] p-8 border border-[#A1A1AA] rounded-[18px] h-[472px]">
						<div className="flex gap-3 items-start w-full h-[127px]">
							<div className="flex items-start justify-start w-8 min-w-8 h-full">
								<Image src={CatIcon} alt="cat-icon" />
							</div>
							<div className="flex flex-col gap-2 h-full">
								<strong className="text-base font-bold text-[#FD0479]">
									Assistente virtual pet
								</strong>
								<span className="tracking-[0.25px] text-sm font-medium text-white">
									Dúvidas? Sinta-se à vontade para perguntar! Conte-nos como
									podemos ajudar a tornar a vida da sua família pet mais fácil
									🙂
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<input
								placeholder="Pergunte-me qualquer coisa"
								className="w-[244px] h-[44px] pl-3 bg-[#2D2D2D66] rounded-3xl box-border placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:tracking-[0.25px] text-white"
							/>
							<button
								className="w-11 h-11 rounded-full flex items-center justify-center bg-[#2D2D2D66]"
								type="button"
								aria-label="Enviar pergunta"
							>
								<Image src={SubmitIcon} alt="submit-icon" />
							</button>
						</div>
					</div>
					<span className="w-[288px] md:w-full text-lg md:text-xl text-white text-center px-4 md:px-0">
						Coisas que você pode perguntar ao nosso assistente virtual
					</span>
				</div>

				<div className="flex flex-col items-center justify-between w-full gap-8 md:gap-0 md:h-[650px] max-w-[350px]">
					<div className="flex flex-col items-center justify-center gap-3">
						<strong className="text-lg font-bold text-[#FD0479] text-center md:text-right">
							Tenho pets em casa. Posso ter qualquer tipo de planta ou há
							restrições?
						</strong>
						<span className="text-base font-normal text-white leading-[24px] tracking-[0.25px] text-center md:text-right">
							Algumas plantas podem ser tóxicas e causar uma série de problemas
							de saúde quando ingeridas, como vômito, diarreia, dores
							abdominais, convulsões e outros sintomas. É importante conhecer as
							plantas tóxicas e mantê-las longe dos pets.
						</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-3">
						<strong className="text-lg font-bold text-[#FD0479] text-center md:text-right">
							Quais são os sinais de diabetes em cães e gatos?
						</strong>
						<span className="text-base font-normal text-white leading-[24px] tracking-[0.25px] text-center md:text-right">
							Os sinais de diabetes incluem: sede excessiva, urinação frequente,
							perda de peso, fadiga e problemas de visão.
						</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-3">
						<strong className="text-lg font-bold text-[#FD0479] text-center md:text-right">
							O que preciso saber antes de adotar um pet?
						</strong>
						<span className="text-base font-normal text-white leading-[24px] tracking-[0.25px] text-center md:text-right">
							Adotar um pet exige planejamento e dedicação. Avalie seu estilo de
							vida, os custos e o tempo para oferecer carinho e atenção.
							Considere também o porte do animal e esteja preparado para essa
							responsabilidade, garantindo uma adoção feliz e segura!
						</span>
					</div>
				</div>
			</Container>
		</section>
	);
}
