import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log("Generated keypair");

console.log("public key ", keypair.publicKey.toBase58());
console.log("private key", keypair.secretKey);

const keypair2 = getKeypairFromEnvironment("SECRET_KEY");

console.log("env key is ", keypair2.publicKey.toBase58());