import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { polygon, polygonAmoy } from "wagmi/chains";

export const projectId = process.env.wkProjectID;

if (!projectId) throw new Error("Project ID is not defined");

export const metadata = {
  name: "Big Inc",
  description: "An artist onchain.",
  url: "https://www.bigcognito.com",
  icons: ["https://www.bigincognito.com/assets/img/big_inc_icon.png"],
};

// Create wagmiConfig
const chains = [polygon, polygonAmoy] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
