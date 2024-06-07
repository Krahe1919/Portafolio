import Link from "next/link"

interface PortafolioBoxProps{
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

export const PortafolioBox = (props: PortafolioBoxProps ) => {
    const  { data } = props
    const {id, title, image, urlGithub, urlDemo} = data
    
    return(
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">
                {title}
            </h3>
            <div className="flex gap-5 mt-5">
                <Link href={urlGithub} target="_blank"
                className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                    Github
                </Link>
                <Link href={urlDemo} target="_blank"
                className="p-2 transition duration-150 rounded-lg bg-violet hover:bg-violet/80">
                    Github
                </Link>
            </div>
        </div>
    );
}