import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
const Algo = () => {
  const [field, setfield] = useState("");
  const [Key, setKey] = useState("");
  const [encryptiontext, setencryption] = useState("");
  const [decryptiontext, setdecription] = useState("");
  const encryption = async () => {
    const response = await axios.post(
      "http://127.0.0.1:8000/rc5encryption/",
      { field, Key }
    );
    if (response.status === 202) {
      setencryption(response.data.response);
    } else {
      alert("internal error");
    }
  };
  const decryption = async () => {
    const response = await axios.post(
      "http://127.0.0.1:8000/rc5decryption/",
      { encryptiontext, Key }
    );
    if (response.status === 202) {
      setdecription(response.data.response);
    }
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
              onChange={(e) => setfield(e.target.value)}
              value={field}
            ></textarea>

            <label
              htmlFor="message"
              className="block mb-2  text-[#1f2937] font-bold  text-lg"
            >
              Enter The Shift
            </label>
            <input
              id="message"
              className="block p-2.5 w-full text-sm text bg-[#1f2937] rounded-lg border border-[#1f2937] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1f2937]  dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter The Key..."
              onChange={(e) => setKey(e.target.value)}
              value={Key}
            />
            <div className="Button flex gap-6 my-3">
              <button className="glow-on-hover" type="button" onClick={encryption}>
                Encryption
              </button>
              <button className="glow-on-hover" type="button" onClick={decryption}>
                Decryption
              </button>
            </div>
            <section className="result flex gap-[20vh] justify-center mt-12">
              <div className="encryption-box">
                <h1 className="  text-[#1f2937] font-bold  text-lg">
                  Encryption Message
                </h1>
                <div className="result-box w-[70vh] h-[20vh] bg-[#1f2937] text-white my-2 rounded-md p-3">
                  {encryptiontext}
                </div>
              </div>
              <div className="decryption-box">
                <h1 className="  text-[#1f2937] font-bold  text-lg">
                  Decryption Message
                </h1>
                <div className="result-box w-[70vh] h-[20vh] bg-[#1f2937] text-white my-2 rounded-md p-3">
                  {decryptiontext}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

const Rc5 = () => {
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
  )
}

export default Rc5
