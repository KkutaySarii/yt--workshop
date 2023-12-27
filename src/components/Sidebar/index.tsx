import { ConnectWallet } from "@thirdweb-dev/react";

const Sidebar = () => {
  return (
    <div
      className="p-2 backdrop-blur-md opacity-70 bg-[#0c0d13] flex items-center
  w-full"
    >
      <div className="container mx-auto flex items-end w-full justify-end">
        <ConnectWallet
          theme={"dark"}
          modalSize={"wide"}
          switchToActiveChain={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;
