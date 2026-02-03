import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
return (
    <div className="bg-gray-800 flex flex-col gap-9 md:gap-0 md:flex-row items-center justify-between py-4 px-14">
        <div className="flex flex-col md:flex-row items-center gap-9 md:gap-16">
            <img className="invert brightness-0" src="./images/logo-bookmark.svg" alt="" />
            <div className="flex flex-col md:flex-row gap-9 md:gap-16 text-gray-200 text-sm">
                <a href="">FEATURES</a>
                <a href="">PRICING</a>
                <a href="">CONTACT</a>
            </div>
        </div>
        <div className="flex gap-4 text-3xl text-white cursor-pointer">
            <IoLogoFacebook />
            <FaTwitter />
        </div>
    </div>
)
}
