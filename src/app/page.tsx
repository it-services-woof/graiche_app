import { Container } from "@/components/Container";
import { Teste1 } from "@/components/Teste1";
import { Teste2 } from "@/components/Teste2";

export default function Home() {
	return (
		<section className="w-full flex items-center justify-center">
			<Container className="w-full flex flex-col bg-yellow-300">
				<Teste1 />
				<Teste2 />
			</Container>
		</section>
	);
}
