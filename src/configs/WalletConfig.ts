import { getDefaultConfig, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { ledgerWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets';
import { http } from 'wagmi';
import { kairos as network } from 'viem/chains';
import { env } from '@ai-rsc/env.mjs';

const { wallets } = getDefaultWallets();

const walletConfig = getDefaultConfig({
  appName: env.APP_NAME || '',
  projectId: env.WALLET_CONNECT_PROJECT_ID || '',
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [trustWallet, ledgerWallet],
    },
  ],
  chains: [network],
  transports: {
    [network.id]: http(''),
  },
  ssr: true,
});

export default walletConfig;
export { network };
