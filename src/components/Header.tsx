import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Container } from "./Container";

export function Header() {
	return (
		<header className="flex items-center justify-center w-full h-14">
			<Container className="flex items-center justify-between">
				<Image
					src={Logo}
					alt="logo"
					priority={true}
					className="h-[32.9px] md:h-full"
				/>
				<div className="flex items-center gap-[12px] md:gap-8">
					<span className="text-lg leading-[22px] font-semibold text-white cursor-pointer hover:text-[#FD0479]">
						Perguntas
					</span>
					<span className="text-lg font-semibold text-white cursor-pointer hover:text-[#FD0479]">
						Começar
					</span>
				</div>
			</Container>
		</header>
	);
}
