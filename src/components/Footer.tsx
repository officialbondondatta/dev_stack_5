import { FaRegCopyright } from 'react-icons/fa';
import Logo from '../assets/logo-text.png'


const Footer = () => {
    return (
        <footer className="bg-white  py-5 lg:mt-20 mt-7">
            <div className="container mx-auto mt-10">
                <div className="grid lg:grid-cols-5 grid-cols-1  lg:mb-20">
                    <div className="lg:col-span-2 lg:items-start items-center justify-center flex flex-col">
                        <div className="flex flex-col space-y-5 lg:items-start  items-center justify-center">
                            <img src={Logo} alt="logo" className="max-w-40" />
                            <p className="lg:w-[80%] mb-5 lg:text-left text-center text-slate-500">Curated tools, technologies, and resources for developers building
                                modern software.</p>
                        </div>
                        <div>
                            <ul className="flex lg:list-none list-disc gap-5 font-normal lg:font-semibold text-slate-700">
                                <li className="list-none"><a href="#" className="lg:px-0 px-2">GitHub</a></li>
                                <li><a href="#" className="lg:px-0 px-2">Twitter</a></li>
                                <li><a href="#" className="lg:px-0 px-2">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <h1 className="text-slate-700 font-bold mb-5">PRDUCT</h1>
                        <ul className="flex flex-col gap-2 text-slate-500">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <h1 className="text-slate-700 font-bold mb-5">COMPANY</h1>
                        <ul className="flex flex-col gap-2 text-slate-500">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <h1 className="text-slate-700 font-bold mb-5">LEGAL</h1>
                        <ul className="flex flex-col gap-2 text-slate-600">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="divider lg:w-full w-[90%] mx-auto"></div>
                <div className="flex justify-between items-center lg:px-0 px-5 mb-5 lg:mb-10">
                    <div className="flex items-center gap-2 text-slate-300">
                        <FaRegCopyright />
                        <h2 className="text-xs lg:text-xl">
                            2026 DevStack. All rights reserved</h2>
                    </div>
                    <div>
                        <ul className="flex gap-2 text-slate-300 text-xs lg:text-lg">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;