"use client";

import Image from "next/image";

import { Container } from "./Container";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import EllipseApp from "@/assets/ellipse-app.svg";
import GoogleCloud from "@/assets/google-cloud.webp";
import GoogleCloudBlog from "@/assets/google-cloud-blog.webp";
import QrCode from "@/assets/qr-code.webp";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const QuestionSchema = z.object({
	name: z.string().min(1, { message: "Nome é obrigatório" }),
	email: z.string().email({ message: "E-mail inválido" }),
	telefone: z.string().min(1, { message: "Telefone é obrigatório" }),
	assunto: z.string().min(1, { message: "Assunto é obrigatório" }),
	mensagem: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

export type QuestionType = z.infer<typeof QuestionSchema>;

export function SectionFrequentlyQuestions() {
	const form = useForm<QuestionType>({
		resolver: zodResolver(QuestionSchema),
	});

	const onSubmit = async (data: QuestionType) => {
		const payload = {
			nome: data.name,
			email: data.email,
			telefone: data.telefone,
			assunto: data.assunto,
			mensagem: data.mensagem,
		};

		try {
			const response = await fetch(
				"https://woof.app.n8n.cloud/webhook/e2680a7e-fdd9-43e3-bd85-d25d8bb03e61",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				},
			);

			console.log(response);
		} catch (error) {
			console.error("Erro", error);
		}
	};

	return (
		<section className="relative flex flex-col items-center justify-start w-full py-[110px]">
			<div className="hidden md:absolute inset-0 -z-10 overflow-hidden">
				<Image
					src={EllipseApp}
					alt="ellipse-app"
					fill
					className="object-conver scale-[1.3] "
				/>
			</div>
			<Container className="flex flex-col gap-[56px]">
				<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow w-full text-center md:text-left">
					Perguntas Frequentes
				</h1>
				<div className="flex md:flex-row flex-col justify-between items-center">
					<div className="flex flex-1 flex-col items-center justify-center gap-6 h-full">
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									Como funciona o sistema da ID Pet (Sistema inteligente de
									identificação do animal)?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									A ID Pet reúne todas as informações essenciais do seu pet,
									como histórico médico, registros de medicamentos, vacinação,
									dados de contato e orientações de cuidados. Isso garante a
									segurança, bem-estar e acesso rápido às informações do seu
									pet. A ID Pet utiliza um QR Code integrado a um pingente que
									seu pet usa, conectando-se à identidade digital do seu animal.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									Como o sistema da ID Pet ajuda a cuidar melhor do meu pet?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									Ele oferece acesso fácil ao histórico médico, registros de
									vacinação e orientações de cuidados do seu pet. Além disso,
									oferece lembretes para consultas e medicação, garantindo que
									as necessidades de saúde do seu pet sejam sempre atendidas.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									O registro de pets no sistema da ID Pet é obrigatório?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									Sim. Se você tem um animal e mora em um condomínio, deve
									registrar seu pet no sistema da ID Pet. O sistema foi
									projetado para todos os tipos de pets, incluindo cães, gatos e
									outros animais, com o objetivo de garantir a segurança e o
									bem-estar do seu pet.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									O que viver em uma comunidade com o sistema da ID Pet
									significa para você e sua família?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									Comunidades mais seguras resultam em melhores cuidados, menos
									doenças virais e infecciosas, menos incidentes (como mordidas
									de cachorro, animais perdidos) e níveis mais altos de
									felicidade e bem-estar. Por exemplo, apenas 10% das pulgas são
									visíveis em um pet; os outros 90% estão escondidos como ovos,
									larvas e pupas no ambiente. No verão, as pulgas podem se
									multiplicar rapidamente, transformando algumas em milhares em
									21 dias. As pupas de pulgas podem sobreviver em casas por até
									um ano e são difíceis de erradicar. A abordagem comunitária da
									ID Pet melhora a segurança e o cuidado dos pets e das pessoas.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									Quanto custa o sistema da ID Pet?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									O custo da ID Pet varia de acordo com o plano escolhido.
									Planos básicos começam com uma pequena taxa mensal e há uma
									opção premium para famílias que oferece recursos e benefícios
									adicionais. Todos os planos incluem um período de teste
									gratuito de 7 dias, além de um kit de boas-vindas com um
									pingente para o seu pet.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
					<div className="flex flex-1 flex-col items-center justify-center gap-6 h-full">
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-3" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									Como funciona o sistema da ID Pet (Sistema inteligente de
									identificação do animal)?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									A ID Pet reúne todas as informações essenciais do seu pet,
									como histórico médico, registros de medicamentos, vacinação,
									dados de contato e orientações de cuidados. Isso garante a
									segurança, bem-estar e acesso rápido às informações do seu
									pet. A ID Pet utiliza um QR Code integrado a um pingente que
									seu pet usa, conectando-se à identidade digital do seu animal.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									Ouvi dizer que ter uma assinatura no sistema da ID Pet me
									ajuda a economizar dinheiro em produtos e serviços. É verdade?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									Com certeza. A ID Pet ajuda você a economizar através de
									descontos exclusivos e ofertas de prestadores de serviços e
									lojistas parceiros. Essas economias podem ser significativas
									ao longo do tempo. A assinatura da ID Pet geralmente resulta
									em um saldo positivo, permitindo que você economize mais do
									que o valor pago, para que possa investir ainda mais no melhor
									cuidado para o seu pet.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									Posso adicionar membros da minha família, veterinário de
									confiança ou prestador de serviços para pets como cuidadores
									adicionais no meu Plano família?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									Claro! Você pode adicionar familiares, veterinários de
									confiança ou prestadores de serviços para pets como cuidadores
									adicionais. Isso garante que eles tenham acesso às informações
									do seu pet e possam fornecer o melhor cuidado possível.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="w-[320px] md:w-[641px]"
						>
							<AccordionItem value="question-1" className="border-none">
								<AccordionTrigger className="text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-start text-left hover:no-underline">
									O que eu posso fazer se minha comunidade ainda não tiver o
									sistema da ID Pet?
								</AccordionTrigger>
								<AccordionContent className="text-white text-base font-medium tracking-[0.25px] text-left">
									Se seu condomínio ainda não utiliza a ID Pet, você pode
									sugerir a implementação do sistema entrando em contato com o
									administrador da sua propriedade ou falando diretamente
									conosco.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</Container>
			<Container className="flex flex-col items-center py-[80px]">
				<div className="flex flex-col md:flex-row items-center justify-between gap-[60px] md:w-[908px]">
					<div className="flex flex-col items-center gap-8">
						<a
							className="max-w-[343px] text-white text-center font-normal text-[20px] tracking-[0.1px]"
							href="https://cloud.google.com/customers/woof?hl=pt-br"
						>
							"Woof revoluciona atendimento no mundo pet com IA conversacional"
						</a>
						<Image src={GoogleCloud} alt="google-cloud" />
					</div>
					<div className="flex flex-col items-center gap-8">
						<a
							className="max-w-[385px] text-white text-center font-normal text-[20px] tracking-[0.1px]"
							href="https://cloud.google.com/blog/topics/startups/woofai-creates-chatbot-for-pet-care-powered-by-google-cloud"
						>
							"De latidos e robôs: Woof revoluciona o cuidado de animais de
							estimação com IA conversacional desenvolvido pelo Google Cloud"
						</a>
						<Image src={GoogleCloudBlog} alt="google-cloud" />
					</div>
				</div>
			</Container>

			<div className="w-[350ox] md:w-[850px] md:h-[762px] rounded-[16px] border border-[#474747] bg-[rgba(24,24,27,0.4)] p-[32px] flex flex-col items-center justify-start gap-[40px]">
				<div className="flex flex-col items-center gap-[16px]">
					<h1 className="w-[286px] md:w-[594px] text-[20px] md:text-[32px] font-bold text-white text-center text-shadow-white-glow md:leading-[35px] tracking-[0.15px]">
						Economize e dê o melhor cuidado para seu animal de estimação
					</h1>
					<span className="max-w-[286px] md:max-w-[526px] text-[16px] text-white leading-[24px] text-center tracking-[0.25px]">
						Quer saber mais sobre a ID Pet mais inteligente do mundo ou trazê-la
						para a sua comunidade pet? Entre em contato!
					</span>
				</div>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-[16px] items-center"
				>
					{/* Campo Nome */}
					<input
						placeholder="Nome"
						{...form.register("name")}
						className="w-[286px] md:w-[722px] h-[51px] bg-[#2D2D2D66] rounded-[8px] placeholder:text-white text-[16px] font-normal text-white text-center leading-none focus:outline-none"
					/>
					{form.formState.errors.name && (
						<span className="text-red-500 text-sm mt-1">
							{form.formState.errors.name.message}
						</span>
					)}

					{/* Campo E-mail */}
					<input
						placeholder="E-mail"
						{...form.register("email")}
						className="w-[286px] md:w-[722px] h-[51px] bg-[#2D2D2D66] rounded-[8px] placeholder:text-white text-[16px] font-normal text-white text-center leading-none focus:outline-none"
					/>
					{form.formState.errors.email && (
						<span className="text-red-500 text-sm mt-1">
							{form.formState.errors.email.message}
						</span>
					)}

					{/* Campo Telefone */}
					<input
						placeholder="Telefone"
						{...form.register("telefone")}
						className="w-[286px] md:w-[722px] h-[51px] bg-[#2D2D2D66] rounded-[8px] placeholder:text-white text-[16px] font-normal text-white text-center leading-none focus:outline-none"
					/>
					{form.formState.errors.telefone && (
						<span className="text-red-500 text-sm mt-1">
							{form.formState.errors.telefone.message}
						</span>
					)}

					{/* Campo Assunto */}
					<input
						placeholder="Assunto"
						{...form.register("assunto")}
						className="w-[286px] md:w-[722px] h-[51px] bg-[#2D2D2D66] rounded-[8px] placeholder:text-white text-[16px] font-normal text-white text-center leading-none focus:outline-none"
					/>
					{form.formState.errors.assunto && (
						<span className="text-red-500 text-sm mt-1">
							{form.formState.errors.assunto.message}
						</span>
					)}

					{/* Campo Mensagem */}
					<textarea
						placeholder="Por favor, forneça informações detalhadas sobre sua dúvida e como podemos ajudar"
						{...form.register("mensagem")}
						className="pt-8 w-[286px] md:w-[722px] h-[119px] bg-[#2D2D2D66] rounded-[8px] placeholder:text-white text-[16px] font-normal text-white text-center leading-none focus:outline-none resize-none"
					/>
					{form.formState.errors.mensagem && (
						<span className="text-red-500 text-sm mt-1">
							{form.formState.errors.mensagem.message}
						</span>
					)}

					{/* Botão de Enviar */}
					<button
						type="submit"
						className="w-[286px] md:w-[754px] h-[61px] rounded-[100px] shadow-[0_0_29px_0_#FD0479] bg-[#FD0479] mt-6 text-[18px] text-white"
					>
						Entrar em contato
					</button>
				</form>
			</div>
			<div className="hidden md:flex items-center mt-[80px] w-[940px] h-[164px] rounded-[16px] bg-[rgba(24, 24, 27, 0.40)] border border-[#3D3D3D] p-[40px] gap-8">
				<Image src={QrCode} alt="qr-code" />
				<div className="flex flex-col gap-[12px]">
					<span className="text-[18px] text-white">
						Use a câmera do seu telefone para ler o QR code e baixar o
						aplicativo da ID Pet Woof
					</span>
					<strong className="text-[18px] text-white">
						Disponível para dispositivos iOS e Android.
					</strong>
				</div>
			</div>
		</section>
	);
}
