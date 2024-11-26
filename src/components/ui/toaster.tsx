"use client";

import { useToast } from "@/hooks/use-toast";
import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{/* biome-ignore lint/complexity/useArrowFunction: <explanation> */}
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<Toast
						key={id}
						{...props}
						className="rounded-[16px] border border-[#474747] bg-[rgba(24,24,27)] border-none"
					>
						<div className="flex flex-col items-center justify-center gap-2">
							{title && (
								<h1 className="text-[18px] font-bold text-white text-shadow-white-glow text-center px-4 md:px-0 leading-[35px] md:leading-normal">
									{title}
								</h1>
							)}
							{description && (
								<span className="text-center text-white text-sm">
									{description}
								</span>
							)}
						</div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
