import Image from "next/image";
import Logo from "@/assets/logo.svg";

export function Header() {
	return (
		<header className="flex items-center justify-between w-full max-w-[1408px] px-[40px] h-14 mt-[60px]">
			<Image
				src={Logo}
				alt="logo"
				priority={true}
				className="w-[118px] md:w-full md:max-w-[177px]"
			/>
			<div className="flex items-center gap-[12px] md:gap-8">
				<span className="text-lg leading-[22px] font-semibold text-white cursor-pointer hover:text-[#FD0479]">
					Perguntas
				</span>
				<span className="text-lg leading-[22px] font-semibold text-white cursor-pointer hover:text-[#FD0479]">
					Começar
				</span>
			</div>
		</header>
	);
}
