import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import DrawPage from "./components/DrawPage";
import Sidebar from "./components/Sidebar";
import { CONTRACT_ADDRESS } from "./lib/constants";
import Loading from "./components/Loading";
import Error from "./components/Error";
import OwnerPage from "./components/OwnerPage";

function App() {
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
    <main className="flex items-start flex-col w-full h-screen text-white">
      <Sidebar />
      {address === owner ? <OwnerPage /> : <DrawPage />}
    </main>
  );
}

export default App;
