import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
return (
    <div className="bg-gray-800 flex items-center justify-between py-4 px-14">
        <div className="flex items-center gap-16">
            <img className="invert brightness-0" src="./images/logo-bookmark.svg" alt="" />
            <div className="flex gap-16 text-gray-200 text-sm">
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
