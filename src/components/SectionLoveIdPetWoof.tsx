"use client";

import Image from "next/image";
import Ellipse from "@/assets/ellipse.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Pagination } from "swiper/modules";

export function SectionLoveIdPetWoof() {
	const pagination = {
		clickable: true,
		renderBullet: (index: number, className: string) =>
			'<span class="' + className + '">' + (index + 1) + "</span>",
	};

	return (
		<section className="relative flex flex-col items-center justify-start w-full h-[584px] md:h-[905px] gap-[80px] py-[110px]">
			<div className="hidden absolute inset-0 -z-10 overflow-hidden">
				<Image
					src={Ellipse}
					alt="ellipse"
					fill
					className="object-contain translate-y-[20%] -rotate-45 -translate-x-[15%]"
					style={{ objectPosition: "center" }}
				/>
			</div>
			<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[350px] md:max-w-[704px] text-center px-4 md:px-0 leading-[35px] md:leading-normal">
				Por que as famílias pet amam o ID Pet Graiche
			</h1>
			<div className="hidden md:grid grid-cols-2 gap-8">
				<div className="flex items-center w-[606px] gap-8 h-[218px] px-[40px] py-8 rounded-2xl border border-[#3D3D3D] bg-[rgba(0,0,0,0.30)] backdrop-blur-[15px]">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/love-id-pet-woof-1.webp"
						alt="love-id-pet-woof-1"
						width={110}
						height={111}
					/>
					<div className="flex flex-col gap-4">
						<span className="text-base font-normal leading-[24px] tracking-[0.25px] text-white text-left">
							"Utilizando a ID Pet, consegui evitar que Billy, meu Border
							Collie, sofresse com dor devido à displasia coxofemoral, além de
							não precisar de uma cirurgia."
						</span>
						<span className="text-lg font-normal leading-[20px] text-white text-left">
							Amanda - Rio de Janeiro, Familiar do Billy
						</span>
					</div>
				</div>
				<div className="flex items-center w-[606px] gap-8 h-[218px] px-[40px] py-8 rounded-2xl border border-[#3D3D3D] bg-[rgba(0,0,0,0.30)] backdrop-blur-[15px]">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/love-id-pet-woof-2.webp"
						alt="love-id-pet-woof-2"
						width={110}
						height={111}
					/>
					<div className="flex flex-col gap-4">
						<span className="text-base font-normal leading-[24px] tracking-[0.25px] text-white text-left">
							"Consegui proporcionar uma melhor qualidade de vida para meu
							Bulldog Francês depois de aprender sobre a síndrome braquicefálica
							e a importância de cuidados adequados para seu bem-estar."
						</span>
						<span className="text-lg font-normal leading-[20px] text-white text-left">
							Jessica - Brasília,
							<br /> Familiar do Bob
						</span>
					</div>
				</div>
				<div className="flex items-center w-[606px] gap-8 h-[218px] px-[40px] py-8 rounded-2xl border border-[#3D3D3D] bg-[rgba(0,0,0,0.30)] backdrop-blur-[15px]">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/love-id-pet-woof-3.webp"
						alt="love-id-pet-woof-3"
						width={110}
						height={111}
					/>
					<div className="flex flex-col gap-4">
						<span className="text-base font-normal leading-[24px] tracking-[0.25px] text-white text-left">
							"Perdi meu gato após ele desenvolver um câncer que poderia ter
							sido evitado se eu soubesse que ele tinha mais chances de ter a
							doença. Teria tido mais tempo com ele."
						</span>
						<span className="text-lg font-normal leading-[20px] text-white text-left">
							Carlos - São Paulo,
							<br /> Familiar da Mel
						</span>
					</div>
				</div>
				<div className="flex items-center w-[606px] gap-8 h-[218px] px-[40px] py-8 rounded-2xl border border-[#3D3D3D] bg-[rgba(0,0,0,0.30)] backdrop-blur-[15px]">
					<Image
						src="https://d3cxeuu31z1oec.cloudfront.net/images/love-id-pet-woof-4.webp"
						alt="love-id-pet-woof-4"
						width={110}
						height={111}
					/>
					<div className="flex flex-col gap-4">
						<span className="text-base font-normal leading-[24px] tracking-[0.25px] text-white text-left">
							"Estou usando a ID Pet há algumas semanas e superou minhas
							expectativas. É fácil de usar, eficiente, e a equipe de suporte
							está sempre disponível para ajudar."
						</span>
						<span className="text-lg font-normal leading-[20px] text-white text-left">
							Mary - Minas Gerais,
							<br /> Familiar da Cacau
						</span>
					</div>
				</div>
			</div>
			<div className="md:hidden w-full flex flex-col gap-8 items-center justify-center">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					loop={false}
					pagination={{
						clickable: true,
						el: ".custom-swiper-pagination",
					}}
					modules={[Pagination]}
					className="w-full"
				>
					<SwiperSlide>
						<div className="flex flex-col items-center justify-center w-[350px] mx-auto h-[393px] gap-8 px-[40px] py-8 rounded-2xl border border-[#3D3D3D] bg-[rgba(0,0,0,0.30)] backdrop-blur-[15px]">
							<Image
								src="https://d3cxeuu31z1oec.cloudfront.net/images/love-id-pet-woof-1.webp"
								alt="love-id-pet-woof-1"
								width={110}
								height={111}
							/>
							<div className="flex flex-col gap-4">
								<span className="text-base font-normal leading-[24px] tracking-[0.25px] text-white text-center">
									"Utilizando a ID Pet, consegui evitar que Billy, meu Border
									Collie, sofresse com dor devido à displasia coxofemoral, além
									de não precisar de uma cirurgia."
								</span>
								<span className="text-lg font-normal leading-[20px] text-white text-center">
									Amanda - Rio de Janeiro,{" "}
									<strong className="text-[#FD0479]">Familiar do Billy</strong>
								</span>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex flex-col items-center justify-center w-[350px] mx-auto h-[393px] gap-8 px-[40px] py-8 rounded-2xl border border-[#3D3D3D] bg-[rgba(0,0,0,0.30)] backdrop-blur-[15px]">
							<Image
								src="https://d3cxeuu31z1oec.cloudfront.net/images/love-id-pet-woof-2.webp"
								alt="love-id-pet-woof-2"
								width={110}
								height={111}
							/>
							<div className="flex flex-col gap-4">
								<span className="text-base font-normal leading-[24px] tracking-[0.25px] text-white text-center">
									"Consegui proporcionar uma melhor qualidade de vida para meu
									Bulldog Francês depois de aprender sobre a síndrome
									braquicefálica e a importância de cuidados adequados para seu
									bem-estar."
								</span>
								<span className="text-lg font-normal leading-[20px] text-white text-center">
									Jessica - Brasília,
									<br /> Familiar do Bob
								</span>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="custom-swiper-pagination mt-4 bg-red-500"></div>
			</div>
		</section>
	);
}
