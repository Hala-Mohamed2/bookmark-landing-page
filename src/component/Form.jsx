import { useState } from "react"

export default function Form() {

    const [email , setEmail] = useState("");
    const [error , setError] = useState("");

    const emailregix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSupmite = (e) =>{
        e.preventDefault();
        if(!emailregix.test(email)){
            setError("Whoops, makesure it's an email")
        }else{
            setEmail("");
            setError("");
        }
    } 



return (
    <div className="bg-blue-700 text-white text-center h-[300px] flex items-center justify-center flex-col">
        <div>
            <h6 className="text-[12px] tracking-[6px] uppercase">35,000+ already joined</h6>
            <h1 className="py-4 text-3xl">Stay up-to-date with what <br /> we’re doing</h1>

            <form className="mt-6 flex gap-6 relative" onSubmit={handleSupmite}>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-white w-[250px] rounded-sm focus:outline-none text-gray-500 py-2 px-4 text-sm" type="text" placeholder="Enter Your email address.." />
                {error && <p className="absolute left-0 top-[45px] w-full bg-red-500 text-white text-xs py-1 px-2 rounded-sm">{error}</p>}
                <button className="bg-red-400  text-white py-2 px-4 rounded-sm cursor-pointer">Contact Us</button>
            </form>
        </div>
    </div>
)
}
