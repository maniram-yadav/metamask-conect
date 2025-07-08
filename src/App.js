import { useEffect, useState } from 'react';
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import { ethers } from 'ethers';

function App() {

  const [account, setAccount] = useState(null)
  // const [provider, setProvider] = useState(null)
  const [metamaskinstalled, setIsMetaMaskInstalled] = useState(null)
  const [balance, setBalance] = useState(null)
  let provider = null;

  async function loadBalance(account) {

    if (!provider) {
      provider = await loadProvider();
    }
    console.log(provider);
    if (account != null && provider != null) {
      let balanceInWei = await provider.getBalance(account);
      const eth_Balance = ethers.BigNumber.from(balanceInWei._hex);
      let b = ethers.utils.formatEther(eth_Balance);
      console.log(b);
      setBalance(b);
    }
  }
  const loadProvider = async () => {
    const pr = new ethers.providers.Web3Provider(window.ethereum)
    // setProvider(pr);
    return pr;
  }

  const loadData = async () => {

    window.ethereum.on('accountsChanged', async (accounts) => {
      if (accounts === null || accounts.length === 0) {
        console.log("user logout");
        setAccount(null);
        setBalance(null);
      } else {
        const acc = ethers.utils.getAddress(accounts[0])
        setAccount(acc);
        loadBalance(acc);
      }
    });

  }

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      setIsMetaMaskInstalled(true);
      loadProvider();
      loadData();
    } else {
      setIsMetaMaskInstalled(false);
    }

  }, [])


  return (
    <div className='w-full h-full'>
      <NavBar account={account} setAccount={setAccount}
        metamaskInstalled={metamaskinstalled} loadBalance={loadBalance}>

      </NavBar>
      <div className='font-bold text-center pt-5'>
        This is Metamask test App to check the Metamask Connection Functionality</div>
      <Profile account={account} balance={balance}></Profile>
    </div>
  );
}

export default App;
