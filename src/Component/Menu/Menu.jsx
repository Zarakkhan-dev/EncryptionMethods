import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
  <>
   <main className="max-w-full h-full flex relative overflow-y-hidden pb-[10vh]">
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <Link href="/ceasercipher" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >Ceaser Cipher</Link>
        <Link href="/playfair" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >Play Fair Cipher</Link>
        <Link href="/des" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >Data Encryption Standard - DES</Link>
        <Link href="/des3" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >Triple DES</Link>
        <Link href="/aes" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >AES Algorithm</Link>
        <Link href="/idea" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >IDEA Algorithm</Link>
        <Link href="/blowfish" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >BlowFish Algorithm</Link>
        <Link href="/rc4" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >RC4 Algorithm</Link>
        <Link href="/rc5" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >RC5 Algorithm</Link>
        <Link href="/rc6" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >RC6 Algorithm</Link>
        <Link href="/diffie_hellman" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >Diffie Hellman Algorithm</Link>
        <Link href="/rsa" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >RSA Algorithm</Link>
        <Link href="/md5hashing" className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400 text-[#26355D] font-bold flex justify-center items-center text-3xl" >MD5 - Hashing Algorithm</Link>
      </div>
    </main>
  </>
  )
}

export default Menu
