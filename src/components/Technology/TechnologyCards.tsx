import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechnologyProps } from "../../types/types";
import TechnologyCard from "./TechnologyCard";

export interface ITechnologyCardsProps {
    technologyPromise: Promise<ITechnologyProps[]>,
    selectedTech: ITechnologyProps[],
    setSelectedTech: Dispatch<SetStateAction<ITechnologyProps[]>>
}
const TechnologyCards = ({ technologyPromise, selectedTech, setSelectedTech }: ITechnologyCardsProps) => {
    const technologyData = use(technologyPromise)
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-5 lg:col-span-3 p-5 lg:p-0">
            {
                technologyData.map((technology) => (
                    <TechnologyCard selectedTech={selectedTech} setSelectedTech={setSelectedTech} key={technology.id} singleTechnology={technology}></TechnologyCard>
                ))
            }
        </div>
    );
};

export default TechnologyCards;