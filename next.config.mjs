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

export default nextConfig;
