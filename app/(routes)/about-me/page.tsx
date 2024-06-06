import { ContainerPage } from "@/app/components/container";
import { CounterServices } from "@/app/components/counter-services";
import { CoverParticles } from "@/app/components/cover-particles";
import { TimeLine } from "@/app/components/time-line";
import TransitionPage from "@/app/components/transition-page";
import MotionTransition from "@/app/components/trasnsition-component";


export default function PageAboutMe ()  {
    return(
        <ContainerPage>
            <TransitionPage />
            <MotionTransition position="bottom" className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                Mi{" "}<span className="font-bold text-violet">
                    trayectoria profesional como Tecnologo</span>
            </MotionTransition>
            <CounterServices/>

            <TimeLine/>
        </ContainerPage>
    );
}
