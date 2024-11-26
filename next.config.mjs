import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d3cxeuu31z1oec.cloudfront.net",
			},
		],
	},
};

const configWithVideos = withVideos();

export default { ...nextConfig, ...configWithVideos };
