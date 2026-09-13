import BannerImage from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left justify-between overflow-hidden mt-10">
            <div className="space-y-5 flex flex-col items-center lg:items-start py-2">
                <h1 className="lg:text-5xl text-3xl font-bold text-black">
                    Build Your Ideal <br /> <span className="brand-gradient bg-clip-text text-transparent"> Development Stack</span>
                </h1>
                <p className="max-w-xl lg:px-0 px-5">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="mt-10 flex gap-5 lg:justify-start justify-center items-center">
                    <button className="btn w-fit px-4 py-6 text-white font-normal rounded-md brand-gradient">Explore Technologies</button>
                    <button className="btn bg-transparent outline-white outline border-none w-fit px-10 py-6 rounded-md text-slate-600 font-normal">Learn More</button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={BannerImage} alt="banner image" className="max-w-125 object-contain" />
            </div>
        </div>
    );
};

export default Banner;