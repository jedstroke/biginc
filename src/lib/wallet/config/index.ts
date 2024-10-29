import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { polygon, polygonAmoy } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.wkProjectID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [polygon, polygonAmoy];

export const contractAddress = "0x2dD3fc31fEf77354c1a61C5e432FA101d883a0f5";

export const metadata = {
  name: "Big Inc",
  description: "An artist onchain.",
  url: "https://www.bigcognito.com",
  icons: ["https://www.bigincognito.com/assets/img/big_inc_icon.png"],
};

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
