import { useConnection, useWallet } from "@solana/wallet-adapter-react"


export function Airdrop(){
    
    const wallet = useWallet();
    const { connection } = useConnection();

    
    const sendAirdropToUser = async () => {
        const value = document.querySelector('input').value
        await connection.requestAirdrop(wallet.publicKey, value)
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    // alert(wallet.publicKey.toString())
    return <>
        <input type="text" name="" id="" />
        <button onClick={sendAirdropToUser}> Send Airdrop</button>
    </>
}
