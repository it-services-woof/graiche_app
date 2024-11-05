"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function SectionCalculator() {
	const [inputValue, setInputValue] = useState("");
	const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly">(
		"annual",
	);
	const [result, setResult] = useState<number>(0);

	const cases = [
		{
			url: "https://d3cxeuu31z1oec.cloudfront.net/images/kimpton.webp",
			w: 283,
			h: 89,
		},
		{
			url: "https://d3cxeuu31z1oec.cloudfront.net/images/lazy-dog.webp",
			w: 234,
			h: 109,
		},
		{
			url: "https://d3cxeuu31z1oec.cloudfront.net/images/lyft.webp",
			w: 139,
			h: 98,
		},
		{
			url: "https://d3cxeuu31z1oec.cloudfront.net/images/mac.webp",
			w: 136,
			h: 110,
		},
		{
			url: "https://d3cxeuu31z1oec.cloudfront.net/images/petco.webp",
			w: 187,
			h: 65,
		},
		{
			url: "https://d3cxeuu31z1oec.cloudfront.net/images/petz.webp",
			w: 204,
			h: 110,
		},
		{
			url: "https://d3cxeuu31z1oec.cloudfront.net/images/starbucks.webp",
			w: 257,
			h: 129,
		},
	];

	useEffect(() => {
		const gastoMensal = Number.parseFloat(inputValue) || 0;
		let valorIdentidade = 0;

		if (selectedPlan === "annual") {
			valorIdentidade = 249.9;
		} else {
			valorIdentidade = 24.9 * 12;
		}

		if (gastoMensal === 0) {
			setResult(0);
		} else {
			const totalEconomiaAnual = gastoMensal * 0.1 * 12;
			const calculo = totalEconomiaAnual - valorIdentidade;
			const finalResult = Math.max(Math.round(calculo), 0);
			setResult(finalResult);
		}
	}, [inputValue, selectedPlan]);

	return (
		<section className="relative flex flex-col md:flex-row items-center justify-center w-full h-[1450px] md:h-[1017px] px-[40px] md:px-[160px] pt-[110px] md:pt-[140px]">
			<div className="flex-1 flex items-start justify-start flex-col h-full gap-16">
				<div className="flex flex-col gap-6">
					<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[350px] md:max-w-[472px] text-left leading-tight">
						Economize com a ID Pet Woof!
					</h1>
					<h2 className="text-[32px] font-bold text-white max-w-[350px] md:max-w-[575px] text-left leading-tight">
						Descubra ofertas e descontos exclusivos dos nossos parceiros
					</h2>
					<span className="text-base font-normal leading-6 md:max-w-[575px] max-w-[350px] text-white">
						Aproveite ofertas e descontos exclusivos em tudo que sua família
						precisa e economize enquanto cuida do seu animal de estimação
						<br className="hidden md:block" />
						<br className="hidden md:block" />
						<span className="block md:hidden"></span>
						Faça parte da comunidade ID Pet, baixe o aplicativo e comece a
						economizar agora mesmo!
					</span>
				</div>
				<Button
					className="w-[265px] h-[54px] rounded-[100px] text-lg font-semibold bg-[#FD0479] hover:bg-[#FD0479] hover:brightness-90"
					style={{
						boxShadow: "0px 0px 29.5px 0px #FD0479",
					}}
				>
					Quero a ID Pet
				</Button>
				<div className="relative max-w-[350px] md:max-w-[794px] w-full overflow-hidden">
					<div className="flex gap-[50px] md:gap-[100px] animate-scroll">
						{cases.map((item, index) => (
							<Image
								key={item.url}
								src={item.url}
								alt={`case-${index}`}
								width={item.w}
								height={item.h}
								className="object-contain w-auto h-auto"
							/>
						))}
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-start gap-[48px] pt-[52px] h-full">
				<h2 className="hidden md:block text-[32px] font-bold text-white max-w-[350px] md:max-w-[560px] text-left leading-tight">
					Calcule sua economia com a ID Pet
				</h2>
				<div className="flex items-center justify-start  flex-col gap-6 w-[360px] h-[518px] md:w-[560px] md:h-[494px] p-8 rounded-[16px] border border-[#FF299E] bg-black shadow-[0_0_74.2px_0_#FD0479]">
					<div className="flex items-center flex-col gap-3">
						<span className="text-[20px] font-semibold tracking-[0.1px] text-white">
							Minhas economias anuais*
						</span>
						<strong className="text-[68px] font-bold text-[#FD0479] text-shadow">
							R$ {result}
						</strong>
					</div>
					<div className="flex items-center flex-col gap-3">
						<span className="w-[296px] text-center md:w-full text-[20px] font-semibold tracking-[0.1px] text-white">
							Meus gastos totais do mês com meus pets
						</span>
						<input
							placeholder="R$ 0"
							className="w-[296px] md:w-[496px] h-[72px] pl-3 bg-[#2D2D2D66] rounded-[8px] box-border placeholder:text-[44px] placeholder:font-bold placeholder:text-white text-[44px] font-bold text-white text-center flex items-center justify-center leading-none focus:outline-none"
							value={inputValue}
							onChange={(e) => {
								const valor = e.target.value
									.replace(/[^0-9.,]/g, "")
									.replace(",", ".");
								setInputValue(valor);
							}}
						/>
					</div>
					<div className="flex items-center flex-col gap-3">
						<span className="text-[20px] font-semibold tracking-[0.1px] text-white">
							Plano família
						</span>
						<div className="w-full flex items-center gap-2">
							<div
								className={`w-[144px] md:w-[244px] h-[72px] ${selectedPlan === "annual" ? "bg-[#FD0479]" : "bg-[#2D2D2D]"} rounded-[8px] text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-center text-center cursor-pointer leading-tight`}
								onClick={() => {
									setSelectedPlan("annual");
								}}
							>
								R$249 anuais
								<br />
								(R$20,75/mês)
							</div>
							<div
								className={`w-[144px] md:w-[244px] h-[72px] ${selectedPlan === "monthly" ? "bg-[#FD0479]" : "bg-[#2D2D2D]"} rounded-[8px] text-white text-lg font-semibold tracking-[0.25px] flex items-center justify-center text-center cursor-pointer leading-tight`}
								onClick={() => {
									setSelectedPlan("monthly");
								}}
							>
								R$24,90
								<br />
								mensais
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
