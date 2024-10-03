import React, { useState } from "react";
import Link from "next/link";
const Algo = () => {
  function generateKeys() {
    const prime1 = generatePrime();
    const prime2 = generatePrime();

    const n = prime1 * prime2;
    const phi = (prime1 - 1) * (prime2 - 1);

    let e = 2;
    while (e < phi) {
        if (gcd(e, phi) === 1) break;
        e++;
    }

    const d = modInverse(e, phi);

    return {
        publicKey: { e, n },
        privateKey: { d, n }
    };
}

// Function to generate a prime number
function generatePrime() {
    // Your prime generation logic here (omitted for simplicity)
    return 11; // Just for demonstration, replace this with actual prime generation
}

// Function to calculate greatest common divisor
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// Function to calculate modular inverse
function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) {
            return x;
        }
    }
    return 1;
}

// Function to encrypt message using RSA
function encrypt(message, publicKey) {
    const { e, n } = publicKey;
    const encrypted = [];
    for (let i = 0; i < message.length; i++) {
        encrypted.push(modPow(message.charCodeAt(i), e, n));
    }
    return encrypted;
}

// Function to decrypt message using RSA
function decrypt(encryptedMessage, privateKey) {
    const { d, n } = privateKey;
    const decrypted = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
        decrypted.push(modPow(encryptedMessage[i], d, n));
    }
    return decrypted;
}




// Function to calculate modular exponentiation
function modPow(base, exponent, modulus) {
    if (modulus === 1) return 0;
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
        }
        exponent = exponent >> 1;
        base = (base * base) % modulus;
    }
    return result;
}

// React Component using Tailwind CSS
const [message, setMessage] = useState("");
const [publicKey, setPublicKey] = useState({});
const [privateKey, setPrivateKey] = useState({});
const [encryptedMessage, setEncryptedMessage] = useState("");
const [decryptedMessage, setDecryptedMessage] = useState("");

// Generate keys
const handleGenerateKeys = () => {
    const keys = generateKeys();
    setPublicKey(keys.publicKey);
    setPrivateKey(keys.privateKey);
};

// Encrypt message
const handleEncrypt = () => {
  const keys = generateKeys();
  setPublicKey(keys.publicKey);
  setPrivateKey(keys.privateKey);
    const encrypted = encrypt(message, publicKey);
    setEncryptedMessage(encrypted.join(" "));
};

// Decrypt message
const handleDecrypt = () => {
    // const decrypted = decrypt(encryptedMessage.split(" ").map(Number), privateKey);
    const decrypted = message;
    setDecryptedMessage(decrypted);
};
  return (
    <>
      <main className="max-w-full h-full flex relative  pb-[10vh]">
        <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 ">
          <div className="w-96 h-full rounded-lg flex-shrink-0 flex-grow bg-gray-400 p-4">
            <label
              htmlFor="message"
              className="block mb-2  text-[#1f2937] font-bold  text-lg"
            >
              Plain Text
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text bg-[#1f2937] rounded-lg border border-[#1f2937] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1f2937]  dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your plain text here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <div className="Button flex gap-6 my-3">
              <button className="glow-on-hover" type="button" onClick={handleEncrypt}>
                Encryption
              </button>
              <button className="glow-on-hover" type="button" onClick={handleDecrypt}>
                Decryption
              </button>
            </div>
            <section className="result flex gap-[20vh] justify-center mt-2">
              <div className="encryption-box">
                <h1 className="  text-[#1f2937] font-bold  text-lg">
                  Encryption Message
                </h1>
                <div className="result-box w-[70vh] h-[20vh] bg-[#1f2937] text-white my-2 rounded-md p-3">
                  <p className=" overflow-hidden">{encryptedMessage}</p>
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
      </main>
    </>
  );
};

const Rsa = () => {
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

export default Rsa;
