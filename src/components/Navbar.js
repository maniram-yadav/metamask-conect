import { ethers } from 'ethers';

function NavBar({ account, setAccount , metamaskInstalled, loadBalance}) {

      const connectHandler = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = ethers.utils.getAddress(accounts[0])
            setAccount(account);
            loadBalance(account);
        }
        
    return (<nav className="p-10">
        <div className="flex flex-col sm:flex-row sm:nowrap bg-black p-10 w-full
                h-10 text-white justify-center items-center m-10">
            
            { metamaskInstalled ? (<div>
            {account ? (
                 <div>
                    {account}
                </div>
            ) : (
                 <button type="button" className="font-bold txt-lg cursor-pointer hover:text-gray-200
               border-0 ml-5"  onClick={connectHandler}>Connect</button>
                
            )}
               
            </div>):(
                <div>Metamask not detected</div>
            )}

        </div>
    </nav>);
}

export default NavBar;
