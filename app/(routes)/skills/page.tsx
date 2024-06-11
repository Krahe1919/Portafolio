import { ContainerPage } from "@/app/components/container";
import TransitionPage from "@/app/components/transition-page";

export default function Skills  ()  {
    return(
      <ContainerPage>
        <TransitionPage/>
        <div className="bg-red-400">
            <h1>
                Habilidades blandas
            </h1>
        </div>

      </ContainerPage>  
    );
}
