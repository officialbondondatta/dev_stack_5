import BannerImage from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left justify-between overflow-hidden">
            <div className="space-y-5">
                <h1 className="lg:text-5xl text-3xl font-bold text-black">
                    Build Your Ideal <br /> <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent"> Development Stack</span>
                </h1>
                <p className="max-w-xl lg:px-0 px-5">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="mt-10 flex gap-5 lg:justify-start justify-center items-center">
                    <button className="btn w-fit px-3 py-2 rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
                    <button className="btn bg-white w-fit px-9 py-2 rounded-md text-black">Learn More</button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={BannerImage} alt="banner image" className="max-w-125 object-contain" />
            </div>
        </div>
    );
};

export default Banner;