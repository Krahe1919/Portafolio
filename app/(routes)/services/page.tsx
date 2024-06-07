import SliderServices from "@/app/components/slider-services";
import TransitionPage from "@/app/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-32 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Tecnologías que eh  <span className="font-bold text-violet"> Usado</span></h1>
                    <p className="mb-8 text-xl text-gray-300">En mi corto recorrido en desarrollo web y de la mano de un equipo no solo he usado tecnologias como react si no tambien un poco de Laravel y JAVA actualmente me encuentro reforzando lenguajes del backend para poder generar aplicactivos webs mas completos </p>
                    
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;