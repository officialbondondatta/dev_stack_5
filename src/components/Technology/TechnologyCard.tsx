import { FaStar } from "react-icons/fa";
import type { ITechnologyProps } from "../../types/types";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import { MdDone } from "react-icons/md";

export interface ITechnologyCardProps {
    singleTechnology: ITechnologyProps,
    selectedTech: ITechnologyProps[],
    setSelectedTech: Dispatch<SetStateAction<ITechnologyProps[]>>
}

const TechnologyCard = ({ singleTechnology, selectedTech, setSelectedTech }: ITechnologyCardProps) => {
    const handleAddToStack = (tech: ITechnologyProps) => {
        setSelectedTech([...selectedTech, tech])
        toast("Added to stack")
    }
    const isAdded = selectedTech.some((tech) => tech.id === singleTechnology.id)
    return (
        <div className={`card bg-base-100 shadow-sm ${isAdded ? "border-pink-600 border" : ""} hover:scale-105`}>
            <div className=" relative card-body">
                <div className=" absolute top-4 right-5 flex items-center justify-end">
                    <span className="badge bg-purple-200 text-xs font-semibold py-2 lg:py-4 rounded-full text-purple-800">{singleTechnology.badge}</span>
                </div>
                <div className="space-y-5 flex flex-col">
                    <div className="flex items-center lg:block gap-3 lg:space-y-3">
                        <img src={singleTechnology.icon} alt={`${singleTechnology.name} icon`} className="lg:max-w-12 w-10 h-10 lg:rounded-none lg:bg-white bg-purple-100 lg:p-0 p-2 rounded-md" />
                        <h2 className="lg:text-2xl text-sm font-semibold">{singleTechnology.name}</h2>
                    </div>
                    <p className="lg:w-[80%] w-full">{singleTechnology.description}</p>

                </div>
                <div className="divider"></div>
                <div className="flex items-center justify-between">
                    <span className="border bg-slate-100 border-slate-200 px-2 py-1 rounded-md font-normal">{singleTechnology.category}</span>
                    <h2 className="text-slate-500">{singleTechnology.difficulty}</h2>
                    <div className="flex items-center justify-center gap-1 font-semibold">
                        <FaStar className="text-yellow-400" />
                        <h2 className="text-yellow-400 lg:text-slate-800">
                            {singleTechnology.rating}
                        </h2>
                    </div>
                </div>
                <button onClick={() => handleAddToStack(singleTechnology)} disabled={isAdded} className="btn bg-slate-900 disabled:cursor-not-allowed! hover:bg-slate-700 disabled:bg-pink-100  disabled:text-pink-600 disabled:font-semibold text-white font-normal rounded-md lg:mt-5 mt-2">
                    {isAdded ? (<> <MdDone className="text-xl" /> Added to Stack </>) : ("Add to Stack")}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;