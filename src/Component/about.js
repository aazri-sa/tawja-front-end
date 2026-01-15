import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Image from "./Images";
import ImageAbout from '../assets/images/tree.jpg'
import Apropos from "../assets/images/family-tree.png";
import ContactSectionImg from "../assets/images/tawja.png";
const About = () => {
    useEffect(() => {
        document.title = "Tawja | A propos de nous";
    },[]);
    return (
        <div>
            <section className="p-4 lg:p-8 bg-white text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <Image className={"h-80 bg-white aspect-video"} source={ImageAbout} altText={"A propos de nous"} />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                            <h3 className="text-3xl font-bold">A propos de nous</h3>
                            <p className="my-6 text-gray-600">
                                Tawja est le reflet de ma passion pour l'histoire et l'héritage de ma propre famille. À travers ce voyage de découverte et de connexion, je m'efforce de dévoiler les histoires captivantes qui se cachent derrière les noms et les visages de mes ancêtres.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <Image className={"h-80 bg-white aspect-video"} source={Apropos} altText={"Notre but"} />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                            <h3 className="text-3xl font-bold">Racines et Héritage : Un Voyage à Travers Tawja</h3>
                            <p className="my-6 text-gray-600">
                                Mon désir profond est de préserver les souvenirs, les traditions et les liens familiaux qui ont été transmis de génération en génération. En construisant cet arbre généalogique personnel, j'espère rendre hommage à mes racines tout en créant un héritage pour les générations futures.
                            </p>
                            <p className="my-6 text-gray-600">
                                Que vous soyez un membre de ma famille ou un visiteur curieux, je vous invite à explorer ce projet avec moi. Découvrez les destins, les aventures et les anecdotes qui ont façonné ma famille au fil du temps. C'est un voyage de mémoire, de découverte et d'appréciation pour les histoires qui nous lient les uns aux autres.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <Image className={"h-80 bg-white aspect-video"} source={ContactSectionImg} altText={"Rejoignez-nous"} />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                            <h3 className="text-3xl font-bold">Exploration Généalogique : Partage de Histoires Familiales et Découvertes Continues</h3>
                            <p className="my-6 text-gray-600">
                                Ce projet est en constante évolution, et je suis ravi de partager chaque nouvelle découverte avec vous. Que vous soyez inspiré à entreprendre votre propre recherche généalogique ou que vous souhaitiez simplement en apprendre davantage sur l'histoire de notre famille, je vous remercie de rejoindre cette aventure.
                            </p>
                            <p>
                                Merci de faire partie de cette exploration personnelle de l'histoire familiale, et bienvenue dans l'univers de Tawja.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     )
}

export default About;
