import styles from "@/components/background-video/video.module.css";
import clsx from "clsx";

type BackgroundVideoProps = {
	src: string;
	className?: string;
};

export function BackgroundVideo({ src, className }: BackgroundVideoProps) {
	return (
		<video autoPlay muted loop className={clsx(styles.video, className)}>
			<source src={src} type="video/webm" />
		</video>
	);
}
