import React from "react";
import "./mintButton.css";
import { abi, contractAddress } from "../constants.js";
import Web3 from "web3";
import Web3Modal from "web3modal";

export function MintButton() {
  const MintNow = async () => {
    const WalletConnectProvider = window.WalletConnectProvider.default;
    let providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          alchemyId: process.env.REACT_APP_ALCHEMY_ID,
          chainId: 137,
          rpc: {
            1: process.env.REACT_APP_ALCHEMY_URL,
          },
        },
      },
    };
    console.log("function called");
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    const account = web3.eth.getAccounts();
    const contractInstance = new web3.eth.Contract(abi, contractAddress);
    const mintPrice = await contractInstance.methods.mintPrice().call();
    account.then((result) => {
      console.log(result[0]);

      const balance = web3.eth.getChainId();

      balance.then((r) => {
        if (r === 137) {
          console.log(mintPrice);
          let txTransfer = {
            from: result[0],
            to: contractAddress,
            //  gas: web3.utils.toHex(web3.utils.toWei( '.028' , 'gwei' )),
            maxPriorityFeePerGas: 60000000000,
            maxFeePerGas: 600000000000,
            value: 1 * mintPrice,
            // gas: 21000,1
            data: contractInstance.methods.mint(1).encodeABI(),
          };
          web3.eth
            .sendTransaction(txTransfer)
            .on("transactionHash", function (hash) {
              if (
                window.confirm(
                  "NFT mint Sucessful. Click, Ok to view the transaction"
                )
              ) {
                window.open(`https://polygonscan.com/tx/${hash}`, "_blank");
              }

              // alert(`NFT Mint Successful https://polygonscan.com/tx/${hash}`);
            })
            .on("error", function (error) {
              alert(error.message);
            });
        } else {
          alert("Please connect to polygon chain");
        }
      });
    });
  };
  return (
    <>
      <button className="mint-button" onClick={MintNow}>
        Mint Now
      </button>
    </>
  );
}
