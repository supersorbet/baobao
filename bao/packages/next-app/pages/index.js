import Head from 'next/head';
import { useConnect } from 'wagmi';

import { Connect, Disconnect, SwitchNetwork } from '../components/wallet';
import { Greeter } from '../components/contract/Greeter';

import { useNetwork } from 'wagmi';
import { NETWORK_ID } from '../config';

export default function Home() {
  const { activeChain } = useNetwork();
  const { activeConnector } = useConnect();

  return (
    <div className={''}>
      <Head>
        <title>Create-Web3 App</title>
        <meta name="description" content="Generated by npx create-web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Check if the wallet is connected to the network */}
        {!activeConnector ? (
          <Connect />
        ) : (
          <>
            <Disconnect />
            {/* Check if connected to correct network */}
            {activeChain && NETWORK_ID !== activeChain.id ? (
              <SwitchNetwork />
            ) : (
              <Greeter />
            )}
          </>
        )}
      </main>
    </div>
  );
}
