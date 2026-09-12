import { Suspense, useState } from "react";
import type { ITechnologyProps } from "../../types/types";
import TechnologyCards from "./TechnologyCards";
import StackCard from "../Stack/StackCard";

const technologyFetch = async (): Promise<ITechnologyProps[]> => {
    const res = await fetch('/data.json')
    const data = res.json()
    return data
}

const Technologies = () => {
    const [technologyPromise] = useState(() => technologyFetch())
    const [selectedTech, setSelectedTech] = useState<ITechnologyProps[]>([])
    return (
        <section className="container mx-auto overflow-hidden">
            <div className="space-y-2 lg:mb-10 mb-5 lg:p-0 text-center lg:text-left p-5">
                <h1 className="font-semibold lg:text-4xl text-2xl">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h1>
                <p className="lg:text-xl text-lg">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-2 p-2 lg:p-0">
                <div className="lg:col-span-3">
                    <Suspense fallback={<p>Loading...</p>}>
                        <TechnologyCards selectedTech={selectedTech} setSelectedTech={setSelectedTech} technologyPromise={technologyPromise}></TechnologyCards>
                    </Suspense>
                </div>
                <div className="p-5 lg:p-0">
                    <Suspense fallback={<p>Loading...</p>}>
                        <StackCard selectedTech={selectedTech} setSelectedTech={setSelectedTech}></StackCard>
                    </Suspense>
                </div>
            </div>

        </section>
    );
};

export default Technologies;