import { ethers } from 'ethers';

function NavBar({ account, setAccount , metamaskInstalled, loadBalance}) {

      const connectHandler = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = ethers.utils.getAddress(accounts[0])
            setAccount(account);
            loadBalance(account);
        }
        
    return (<nav className="">
        <div className="flex flex-col sm:flex-row flex-cols-1 sm:nowrap bg-black p-10 min-w-full
                h-10 text-white justify-center items-center">
            
            { metamaskInstalled ? (<div>
            {account ? (
                 <div className='text-gray-300'>
                    Account Connected
                </div>
            ) : (
                 <button type="button" className="font-bold text-lg cursor-pointer text-green-100 hover:text-gray-200
               border-0 ml-5"  onClick={connectHandler}>Connect</button>
                
            )}
               
            </div>):(
                <div>Metamask not detected</div>
            )}

        </div>
    </nav>);
}

export default NavBar;
