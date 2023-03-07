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
    account.then((result) => {
      console.log(result[0]);
      const balance = web3.eth.getChainId();

      balance.then((r) => {
        if (r === 137) {
          const contractInstance = new web3.eth.Contract(abi, contractAddress);
          // const mintPrice = contractInstance.methods.mintPrice().call();
          // console.log(mintPrice);
          let txTransfer = {
            from: result[0],
            to: contractAddress,
            maxPriorityFeePerGas: 250000000000,
            maxFeePerGas: 250000000000,
            value: 1 * 1 * 10e17,
            // gas: 21000,
            data: contractInstance.methods.mint(1).encodeABI(),
          };
          console.log("txTransfer" + txTransfer);
          let approve = web3.eth.sendTransaction(txTransfer);
          approve
            .then((result) => {
              console.log(result);
              alert(
                "Your transaction is successfull https://polygonscan.com/tx/" +
                  result.transactionHash
              );
            })
            .catch((e) => {
              console.error(e);
              alert(e.message);
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
