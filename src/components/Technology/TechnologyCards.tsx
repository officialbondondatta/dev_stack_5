import { use } from "react";
import type { ITechnologyProps } from "../../types/types";
import TechnologyCard from "./TechnologyCard";

export interface ITechnologyCardsProps {
    technologyPromise: Promise<ITechnologyProps[]>
}
const TechnologyCards = ({ technologyPromise }: ITechnologyCardsProps) => {
    const technologyData = use(technologyPromise)
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-5 lg:col-span-3 p-5 lg:p-0">
            {
                technologyData.map((technology) => (
                    <TechnologyCard key={technology.id} singleTechnology={technology}></TechnologyCard>
                ))
            }
        </div>
    );
};

export default TechnologyCards;