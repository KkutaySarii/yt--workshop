import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../lib/constants";
import Loading from "../Loading";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Error from "../Error";

const DrawPage = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const {
    data: players,
    isLoading: getPlayersLoading,
    error: getPlayersError,
  } = useContractRead(contract, "getPlayers");

  console.log(players);

  const address = useAddress();

  const [isAttend, setIsAttend] = useState<boolean>(false);

  useEffect(() => {
    if (players && (players as string[]).length > 0) {
      const attended = !!players?.find((p: string) => p === address);
      setIsAttend(attended);
    }
  }, [address, players]);

  if (getPlayersLoading) {
    return <Loading />;
  }

  if (getPlayersError) {
    return <Error />;
  }

  return (
    <div className="container mx-auto flex flex-col gap-y-8 items-start w-full mt-12">
      <h1 className="text-center w-full text-2xl font-bold">YTÜ ÇEKİLİŞ</h1>
      <div className="flex items-center justify-center w-full">
        <img src="/src/assets/ytübc.png" alt="logo" width={200} height={200} />
      </div>
      <div className="flex items-center justify-center w-full">
        <Web3Button
          contractAddress={CONTRACT_ADDRESS}
          isDisabled={isAttend}
          action={async (contract) => {
            await contract.call("enterLottery", [], {
              gasLimit: 1000000, // override default gas limit
              value: ethers.utils.parseEther("0.01"),
            });
          }}
        >
          {isAttend ? "Katıldınız" : " 0.01 ETH"}
        </Web3Button>
      </div>
      {players && players?.length > 0 && (
        <h3 className="text-center w-full text-xl font-semibold">Katılanlar</h3>
      )}
      <div className="flex flex-col overflow-auto max-h-[300px] items-center justify-center gap-y-2 w-full">
        {players?.map((p: string) => (
          <div key={p} className="">
            * {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawPage;
