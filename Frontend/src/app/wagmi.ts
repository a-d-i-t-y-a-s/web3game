import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia],
  // turn off injected provider discovery
  multiInjectedProviderDiscovery: false,
  connectors: [metaMask()],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}