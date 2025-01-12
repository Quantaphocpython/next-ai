'use client';

import { useEffect } from 'react';
import { parseEther } from 'viem';
import { useSendTransaction } from 'wagmi';

type Props = {
  amount: number;
  toAddress: string;
};

const TokenTransferComponent = ({ amount, toAddress }: Props) => {
  const { sendTransaction } = useSendTransaction();

  useEffect(() => {
    const result = sendTransaction({
      value: parseEther(amount + ''),
      to: toAddress as `0x${string}`,
    });

    console.log(result);
  }, []);
  return <div>TokenTransferComponent</div>;
};

export default TokenTransferComponent;
