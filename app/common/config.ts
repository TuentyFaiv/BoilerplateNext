const config = {
  api: process.env.NEXT_PUBLIC_API || "http://localhost:3000/api",
  api_local: process.env.NEXT_PUBLIC_API_LOCAL || "http://localhost:3000/api",
  ipregistry_key: process.env.NEXT_PUBLIC_IPREGISTRY_KEY,
  ipregistry_url: process.env.NEXT_PUBLIC_IPREGISTRY_URL
};

export default config;
