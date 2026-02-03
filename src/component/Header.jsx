import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center justify-between w-full">
          <img src="./images/logo-bookmark.svg" alt="" />
          <img
            className="felx cursor-pointer md:hidden"
            src="./images/icon-hamburger.svg"
            alt="" onClick={()=> setShow(!show)}
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] text-gray-700">
          <a href="">FEATURES</a>
          <a href="">PRICING</a>
          <a href="">CONTACT</a>
          <a className="text-white bg-red-500 py-1 px-6 rounded-sm" href="">
            LOGIN
          </a>
        </div>
        {show && (
          <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#00001EBF] p-9">
            <div>
              <div className="flex items-center justify-between">
                <img className="invert brightness-0" src="./images/logo-bookmark.svg" alt="" />
                <img className="cursor-pointer" src="./images/icon-close.svg" alt="" onClick={()=> setShow(false)} />
              </div>
              <div className="text-white flex flex-col text-center mt-9 ">
                <a className="text-[18px] tracking-wider border-t border-gray-400 pb-6 font-medium pt-7" href="">FEATURES</a>
                <a className="text-[18px] tracking-wider border-t border-gray-400 pb-6 font-medium pt-7" href="">PRICING</a>
                <a className="text-[18px] tracking-wider border-t border-gray-400 pb-6 font-medium pt-7" href="">CONTACT</a>
                <a className="text-[18px] border-2 border-white rounded-sm tracking-wider border-t pb-6 font-medium pt-7" href="">LOGIN</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
