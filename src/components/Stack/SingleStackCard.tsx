import { RxCross1 } from "react-icons/rx";
import type { ITechnologyProps } from "../../types/types";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export interface ISingleStackCardProps {
    technology: ITechnologyProps,
    selectedTech: ITechnologyProps[],
    setSelectedTech: Dispatch<SetStateAction<ITechnologyProps[]>>
}

const SingleStackCard = ({ technology, selectedTech, setSelectedTech }: ISingleStackCardProps) => {
    const handleSingleRemove = (tech: ITechnologyProps) => {
        const newTechStack = selectedTech.filter((t) => tech.id !== t.id)
        setSelectedTech(newTechStack)
        toast(`${tech.name} Removed from Your Stack`)
    }
    return (
        <div className="flex items-center justify-between border border-slate-300 py-2 px-3 rounded-md">
            <div className="flex items-center justify-center gap-2">
                <img src={technology.icon} className="w-10 h-10" alt={`${technology.name} icon`} />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">{technology.name}</h2>
                    <p className="text-slate-400 text-xs">{technology.category}</p>
                </div>
            </div>
            <div>
                <RxCross1 onClick={() => handleSingleRemove(technology)} className="text-xl font-bold cursor-pointer" />
            </div>

        </div>
    );
};

export default SingleStackCard;