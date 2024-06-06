import SliderServices from "@/app/components/slider-services";
import TransitionPage from "@/app/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-32 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Tecnologías que he<span className="font-bold text-violet"> Usado</span></h1>
                    <p className="mb-8 text-xl text-gray-300">Desarrollador fontend junior siempre dispuesto</p>
                    <button className="px-3 py-2 rounded-lg bg-violet hover:bg-secondary/65">Contacta conmigo</button>
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