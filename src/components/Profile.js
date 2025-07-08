

function Profile({account , balance }){
        return (<div className="m-20 p-20 rounded-lg shadow-lg shadow-gray-600">
            <div>Account : {account}</div>
            <div>Balance : {balance}</div>
        </div>);
}

export default Profile;