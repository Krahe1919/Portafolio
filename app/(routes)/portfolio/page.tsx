"use client"

import { ContainerPage } from "@/app/components/container";
import { PortafolioBox } from "@/app/components/portafolio-box";
import TransitionPage from "@/app/components/transition-page";
import { dataPortfolio } from "@/data";

export default function PortafolioPage  () {
    return(
        <ContainerPage>
            <TransitionPage/>
                <div className="flex flex-col justify-center h-full md:text-4xl md:mb-5">
                    <h1 className="text-2xl leading-tight text-center"> Mis últimos
                        <span className="text-violet font-bold ">Trabajos realizados</span>
                    </h1>

                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortafolioBox key={data.id} data={data}/>
                        ))}
                    </div>
                </div>
        </ContainerPage>
    );
}