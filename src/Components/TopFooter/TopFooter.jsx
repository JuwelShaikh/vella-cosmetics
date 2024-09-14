import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"


const TopFooter = () => {
    return (
        <div className="flex items-center justify-between bg-red-100 w-full height-[56px] py-4 pl-[60px]">
            <div className="flex items-center gap-1">
                <MdOutlineMailOutline className="text-red-500" />
                <p>office@vellastorecare.com</p>
            </div>
            <div className="font-normal text-xl">
                Shop <span className="text-red-500">$50 </span> for <span className="text-red-500">free shopping</span>
            </div>
            <div className="flex items-center gap-2 text-red-500 pr-[60px]">

                <FaYoutube className="text-red-500" />
                |
                <FaInstagram className="text-red-500" />
                |
                <FaTwitter className="text-red-500" />
                |
                <FaFacebook className="text-red-500" />
            </div>
        </div>
    )
}

export default TopFooter