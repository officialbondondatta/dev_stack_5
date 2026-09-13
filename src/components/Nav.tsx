import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <div className=" bg-white sticky z-50 top-0">
            <div className="container mx-auto flex items-center justify-between py-5 px-5 lg:px-0 ">
                <div className="block lg:hidden">
                    <RxHamburgerMenu className="text-3xl" />
                </div>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="hidden lg:block ">
                    <ul className="flex gap-5 text-[#475569] ">
                        <li className="text-[#DB2777] cursor-pointer text-xl font-semibold">Home</li>
                        <li className="hover:text-[#DB2777] cursor-pointer text-xl font-semibold">Technologies</li>
                        <li className="hover:text-[#DB2777] cursor-pointer text-xl font-semibold">Projects</li>
                        <li className="hover:text-[#DB2777] cursor-pointer text-xl font-semibold">About</li>
                        <li className="hover:text-[#DB2777] cursor-pointer text-xl font-semibold">Contact</li>
                    </ul>
                </div>
                <div className="flex gap-5 lg:text-xl text-sm">
                    <button className="btn-primary">Sign In</button>
                    <button className="btn-primary bg-[#D91B7E] text-white rounded-full lg:py-2 py-1 px-2 lg:px-5">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;