"use client"

import { ContainerPage } from "@/app/components/container";
import PortfolioBox from "@/app/components/portafolio-box";
import TransitionPage from "@/app/components/transition-page";
import MotionTransition from "@/app/components/trasnsition-component";
import { dataPortfolio } from "@/data";

export default function PortafolioPage  () {
    return(
        <ContainerPage>
            <TransitionPage/>
                <MotionTransition position="bottom" className="flex flex-col items-center justify-center h-full md:text-4xl md:mb-5">
                    <h1 className="text-2xl leading-tight text-center"> Mis últimos
                        <span className="text-violet font-bold ">Trabajos realizados</span>
                    </h1>

                    <div className="flex items-center z-10 max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data}/>
                        ))}
                    </div>
                </MotionTransition>
        </ContainerPage>
    );
}