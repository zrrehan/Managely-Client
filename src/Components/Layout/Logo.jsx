import { Link } from "react-router";
import logo from "../../assets/logo.png"
function Logo() {
    return(
        <Link to = "/">
            <div className="flex items-end gap-1 w-fit m-auto my-2">
                <div className="w-15">
                    <img src={logo} alt="" />
                </div>
                <p className="text-5xl font-semibold text-gray-800">anagely</p>
            </div>
        </Link>

    )
}

export default Logo;