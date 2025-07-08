

function Profile({account , balance }){
        return (<div className="m-20 p-20 rounded-lg shadow-lg shadow-gray-600 text-white
                top-10 bg-black p-20 rounding-lg">
            {account ? (<div>Account : {account}</div>):('')}
            {balance ? (<div>Balance : {balance} ETH</div>):('')}
        </div>);
}


export default Profile;