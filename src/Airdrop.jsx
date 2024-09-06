import { useConnection, useWallet } from "@solana/wallet-adapter-react"


export function Airdrop(){
    
    const wallet = useWallet();
    const { connection } = useConnection();

    
    async function sendAirdropToUser() {
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    // alert(wallet.publicKey.toString())
    return <>
        <input type="text" name="" id="publicKey" />
        <button onClick={sendAirdropToUser}> Send Airdrop</button>
    </>
}
