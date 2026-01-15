import React, {useEffect} from "react";

import CodeNoteFound from "../assets/images/404-2.png";
import Groupe from "../assets/images/Group.png";
import Image from "./Images";

const NotFound = () => {
    useEffect(() => {
        document.title = "Tawja | 404";
    },[]);
    return (
        <div>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className="">
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Il semble que vous ayez trouvé la porte vers le grand néant.
                                </h1>
                                <p className="my-2 text-gray-800">Désolé pour cela ! Veuillez visiter notre page d'accueil pour atteindre votre destination.</p>
                                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                                    onClick={() => window.location.href = "/"}
                                >Retourner à la page d'accueil</button>
                            </div>
                        </div>
                        <div>
                            <Image className={"w-full"} source={CodeNoteFound} altText={"404"} />
                        </div>
                    </div>
                </div>
                <div>
                    <Image className={"w-full"} source={Groupe} altText={"404"} />
                </div>
            </div>
        </div>
    )
}

export default NotFound;