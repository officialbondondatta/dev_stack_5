import type { Dispatch, SetStateAction } from "react";
import type { ITechnologyProps } from "../../types/types";
import SingleStackCard from "./SingleStackCard";

export interface IStackCardProps {
    selectedTech: ITechnologyProps[],
    setSelectedTech: Dispatch<SetStateAction<ITechnologyProps[]>>
}

const StackCard = ({ selectedTech, setSelectedTech }: IStackCardProps) => {
    return (
        <div className="card bg-base-100 shadow-sm rounded-xl">
            <div className="card-body">
                <div>
                    <h2 className="card-title">
                        Your Stack
                    </h2>
                    <p className="text-slate-300">{`${selectedTech.length === 0 ? "No technologies selected yet." : `${selectedTech.length} Technology Selected`}`}</p>
                </div>
                <div>
                    {selectedTech.length === 0 ? (
                        <div className="lg:p-10 p-5 border border-dashed rounded-xl border-slate-300 mt-5">
                            <h2 className="text-center text-slate-300 lg:text-lg text-sm">Your stack is empty.</h2>
                        </div>
                    )

                        :
                        (
                            selectedTech.map((tech) => (
                                <SingleStackCard technology={tech}></SingleStackCard>
                            ))
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default StackCard;