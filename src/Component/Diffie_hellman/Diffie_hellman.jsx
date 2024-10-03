import React, { useState } from "react";
import Link from "next/link";
import CryptoJS from 'crypto-js';

const Algo = () => {
    const [alicePrivateKey, setAlicePrivateKey] = useState('');
    const [bobPrivateKey, setBobPrivateKey] = useState('');
    const [aliceSharedSecret, setAliceSharedSecret] = useState('');
    const [bobSharedSecret, setBobSharedSecret] = useState('');
    const [message, setMessage] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');

    // Generate a random private key (a large prime number)
    const generatePrivateKey = () => {
        const prime = 23; // Example prime number for demonstration
        return Math.floor(Math.random() * (prime - 2)) + 2; // Random number between 2 and prime-1
    };

    // Calculate public key (g^privateKey % prime)
    const calculatePublicKey = (privateKey, prime, g) => {
        return Math.pow(g, privateKey) % prime;
    };

    // Calculate shared secret (publicKey^privateKey % prime)
    const calculateSharedSecret = (privateKey, publicKey, prime) => {
        return Math.pow(publicKey, privateKey) % prime;
    };

    // Generate keys for Alice and Bob
    const generateKeys = () => {
        const prime = 23; // Example prime number for demonstration
        const g = 5; // Example generator for demonstration
        const alicePrivateKey = generatePrivateKey();
        const bobPrivateKey = generatePrivateKey();
        const alicePublicKey = calculatePublicKey(alicePrivateKey, prime, g);
        const bobPublicKey = calculatePublicKey(bobPrivateKey, prime, g);
        setAlicePrivateKey(alicePrivateKey);
        setBobPrivateKey(bobPrivateKey);
        return { alicePrivateKey, bobPrivateKey, alicePublicKey, bobPublicKey, prime };
    };

    // Reversible encryption function
    const encryptMessage = (message) => {
        return message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    };

    // Reversible decryption function
    const decryptMessage = (encryptedMessage) => {
        return encryptedMessage.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    };

    // Generate shared secret for Alice and Bob
    const generateSharedSecret = () => {
        const { alicePrivateKey, bobPrivateKey, alicePublicKey, bobPublicKey, prime } = generateKeys();
        const aliceSharedSecret = calculateSharedSecret(alicePrivateKey, bobPublicKey, prime);
        const bobSharedSecret = calculateSharedSecret(bobPrivateKey, alicePublicKey, prime);
        setAliceSharedSecret(aliceSharedSecret);
        setBobSharedSecret(bobSharedSecret);
    };

    const handleEncrypt = () => {
        const encrypted = encryptMessage(message);
        setEncryptedMessage(encrypted);
    };

    const handleDecrypt = () => {
        const decrypted = decryptMessage(encryptedMessage);
        setDecryptedMessage(decrypted);
    };

  
    return (
      <>
        <main className="max-w-full h-full flex relative  pb-[10vh]">
          <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 ">
            <div className="w-96 h-full rounded-lg flex-shrink-0 flex-grow bg-gray-400 p-4">
            <div className='py-1'>
                <div className='p-2  font'>
                  
                    <div class="relative mb-4">
                        <label class="leading-7  text-[#1f2937] font-bold  text-lg">Generate Key</label>
                        <div className='flex items-center justify-center space-x-6'>
                            <input type="text" value={alicePrivateKey} class="block p-2.5 w-full text-sm text bg-[#1f2937] rounded-lg border border-[#1f2937] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1f2937]  dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Key A' readOnly />
                            <input type="text" value={bobPrivateKey} class="block p-2.5 w-full text-sm text bg-[#1f2937] rounded-lg border border-[#1f2937] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1f2937]  dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Key B' readOnly />
                            <button onClick={generateSharedSecret} className="glow-on-hover">Generate</button>
                        </div>
                    </div>
                    <div class="relative mb-4">
                        <label class="leading-7  text-[#1f2937] font-bold  text-lg">Plain Text</label>
                        <textarea  rows="4" value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="Write your plain text here..."  class="block p-2.5 w-full text-sm text bg-[#1f2937] rounded-lg border border-[#1f2937] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1f2937]  dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        <div className='flex  space-x-4 mt-2'>
                            <button onClick={handleEncrypt} className="glow-on-hover px-4 py-2 bg-blue-500 text-white rounded-md">Encrypt</button>
                            <button onClick={handleDecrypt} className="glow-on-hover px-4 py-2 bg-emerald-500 text-white rounded-md">Decrypt</button>
                        </div>
                    </div>
                    <section className="result flex gap-[20vh] justify-center mt-12">
              <div className="encryption-box">
                <h1 className="  text-[#1f2937] font-bold  text-lg">
                  Encryption Message
                </h1>
                <div className="result-box w-[70vh] h-[20vh] bg-[#1f2937] text-white my-2 rounded-md p-3">
                  {encryptedMessage}
                </div>
              </div>
              <div className="decryption-box">
                <h1 className="  text-[#1f2937] font-bold  text-lg">
                  Decryption Message
                </h1>
                <div className="result-box w-[70vh] h-[20vh] bg-[#1f2937] text-white my-2 rounded-md p-3">
                  {decryptedMessage}
                </div>
              </div>
            </section>
                </div>
            </div>
            </div>
          </div>
        </main>
      </>
    );
  };
  
const Diffie_hellman = () => {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <Link href="/">
              <i className="fa-solid fa-house-chimney text-xl" />
            </Link>
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <i className="fa-solid fa-right-from-bracket  text-xl" />
          </div>
        </aside>
        <div className="w-full h-full flex flex-col justify-between">
          <header className="h-16 w-full flex items-center relative justify-between px-5 space-x-10 bg-gray-800">
            <h1 className=" font-bold text-white"> Developed By Zarak Khan</h1>
            <div className="flex flex-shrink-0 items-center space-x-4 text-white">
              <div className="flex flex-col items-end ">
                <div className="text-md font-medium ">Unknow Unknow</div>
                <div className="text-sm font-regular">Student</div>
              </div>
              <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400" />
            </div>
          </header>
          <Algo />
        </div>
      </div>
    </>
  );
};

export default Diffie_hellman;

