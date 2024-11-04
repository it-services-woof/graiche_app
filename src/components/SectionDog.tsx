export function SectionDog() {
	return (
		<section className="relative flex flex-col items-center justify-center w-full min-h-[580px] md:min-h-[1117px]">
			<div
				className="absolute inset-0 -z-10 block md:hidden"
				style={{
					background: `
						linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),
						url('https://d3cxeuu31z1oec.cloudfront.net/images/dog.webp') lightgray -500.066px -209.676px / 296.255% 164.728% no-repeat
					`,
				}}
			></div>

			<div
				className="absolute inset-0 -z-10 hidden md:block"
				style={{
					background: `
						linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),
						url('https://d3cxeuu31z1oec.cloudfront.net/images/dog.webp') lightgray -347.086px -278.683px / 130.933% 151.915% no-repeat
					`,
				}}
			></div>

			<h1 className="text-[32px] md:text-[56px] font-bold text-white text-shadow-white-glow max-w-[350px] md:max-w-[704px] text-center px-4 md:px-0 leading-[35px] md:leading-normal">
				Identificação rápida do pet para segurança
			</h1>
		</section>
	);
}
