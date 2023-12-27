import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../lib/constants";
import Loading from "../Loading";
import Error from "../Error";

const OwnerPage = () => {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const {
    data: owner,
    isLoading: ownerLoading,
    error: ownerError,
  } = useContractRead(contract, "owner");

  if (ownerLoading) {
    return <Loading />;
  }

  if (ownerError) {
    return <Error />;
  }
  return (
    <div className="w-full flex items-center justify-center">
      <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        isDisabled={address !== owner}
        action={async (contract) => {
          await contract.call("pickWinner", [], {
            gasLimit: 1000000, // override default gas limit
          });
        }}
      >
        Çekilişi Bitir
      </Web3Button>
    </div>
  );
};

export default OwnerPage;
