import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: {
            host: "lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io",
            port: "",
            protocol: "http",
        }
    }
    
};

export default withNextVideo(nextConfig);