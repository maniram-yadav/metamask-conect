

function Profile({ account, balance }) {
    return (<div>
            <div className="relative max-w-200 h-100  max-h-80 left-20 rounded-lg
             shadow-lg shadow-gray-600 text-white shadow-lg shadow-gray-400 text-white
                top-10 bg-gray-700 p-20 rounding-[40px]">
                <div className="absolute top-20 left-20 text-white z-20">
                    {
        (!account || !balance) ? (<div className="font-bold text-2xl">Account not connected</div>) : (
                    <div>
                    {account ? (<div>Account : {account}</div>) : ('')}
                    {balance ? (<div>Balance : {balance} ETH</div>) : ('')}
                    </div>
                )}
                </div>
                <div className="mr-5 flex flex-row justify-center bottom-0 items-end decoration-none gap-4 cursor-pointer
                ">
                        <div className=" hover:text-gray-300"><a href="https://www.linkedin.com/in/maniram-yadav/">LinkedIn</a></div>
                        <div  className=" hover:text-gray-300"><a href="https://github.com/maniram-yadav">Github</a></div>
                        <div  className=" hover:text-gray-300"><a href="https://x.com/maniram_">Twitter</a></div>
                </div>
            </div>
        
    </div>
    );
}


export default Profile;