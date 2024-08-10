'use client'

import { useState } from "react";

export default function Home() {
    const [data, setData] = useState()
    const [Qrcode, setQrcode] = useState("")
    const QRgenerate =()=>{
       if(data.length){
        const newQrCode= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
        setData("")
        setQrcode(newQrCode)
       }
       else{
        alert("Please enter some text or link.")
        setQrcode("")
       }
    }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-col space-y-6">
        <h1 className="font-bold text-4xl ">
          <span className="text-blue-400">Space VII</span> Qr codr generator
        </h1>
        <input
          type="text"
          className="border w-full py-1 pl-3 rounded-md border-blue-300 outline-1 outline-blue-500"
          placeholder="Enter text or link"
          onChange={(e)=>setData(e.target.value)}
        />
        {
            Qrcode && (
                <div className="flex justify-center">
                    <img src={Qrcode} alt="QR code" className=" transition ease-in-out duration-500"/>
                </div>
            )
        }
        <div className="flex justify-center">
          <button onClick={QRgenerate} className="bg-blue-300 px-12 rounded-sm hover:bg-blue-500 hover:text-white transition ease-in-out duration-500 shadow-lg">
            Generate QR code
          </button>
        </div>
      </div>
    </div>
  );
}
