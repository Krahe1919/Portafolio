import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

export default function PortfolioBox(props: PortfolioBoxProps) {
    const { data } = props;
    const { id, title, image, urlDemo, urlGithub } = data;

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl flex flex-col items-center justify-center"
        >
            <h3 className="mb-4 text-xl font-bold">{title}</h3>
            {/* Ajuste aquí: Eliminamos width y height de la etiqueta Image */}
            <Image
                src={image}
                width={500} // Valor sugerido para width, ajusta según sea necesario
                height={300} 
                alt="Image"
                layout="responsive" // Esto hace que la imagen mantenga su aspect ratio mientras se redimensiona
                className="w-full h-auto rounded-2xl" // Clases para adaptar la imagen
            />

            <div className="flex flex-wrap gap-5 mt-5 w-full max-w-md"> {/* Ajuste aquí: Agregamos flex-wrap para que los botones se ajusten horizontalmente */}
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 inline-flex items-center justify-center" // Añadimos algunas clases para centrar el contenido
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-violet hover:bg-violet/80 inline-flex items-center justify-center" // Añadimos algunas clases para centrar el contenido
                >
                    Live demo
                </Link>
            </div>
        </div>
    );
}
