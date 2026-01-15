import React from "react";

import LogoSRC from '../assets/images/logotawja.svg'
import Image from "./Images";
import {Link} from "react-router-dom";
import EmailEcon from "../assets/svgIcons/EmailIcon";
import FacebookIcon from "../assets/svgIcons/FacebookIcon";
import EmailIcon from "../assets/svgIcons/EmailIcon";
import Instagram from "../assets/svgIcons/Instagram";

import URLS from "../constants/urls";

const Footer = () => {
    return(
        <footer className="py-6 bg-white text-black border-t-2">
            <div className="container max-w-7xl  px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 md:justify-start">
                            <div className="flex items-center justify-center w-52 h-20 rounded-full ">
                                <Image source={LogoSRC} altText={"logo"} className={"h-32 w-auto"} />
                            </div>
                            {/*<span className="self-center text-2xl font-semibold">Tawja</span>*/}
                        </Link>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium text-tawja-900">Pages</p>
                        <ul>
                            <li>
                                <Link rel="noopener noreferrer" to={URLS.about} className="hover:text-violet-400">A propos</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to={URLS.tree} className="hover:text-violet-400">Familytree</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to={URLS.gallery} className="hover:text-violet-400">Galerie</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to={URLS.events} className="hover:text-violet-400">Evenements</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to={URLS.contact} className="hover:text-violet-400">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium text-tawja-900">Contactez-Nous</p>
                        <ul>
                            <li>

                                <a rel="noopener noreferrer" href="mailto:conatct@tawja.net" className="hover:text-violet-400 flex justify-items-center leading-tight">
                                    <EmailEcon />
                                    contact@tawja.net
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2023 All rights reserved. | <a href={"https://monarkit.net"} title={"MonarkIT | Agence web et communication à Marrakech Maroc : création de site internet et consulting"}>Website By MonarkIt</a></span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="mailto:contact@tawja.net" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-tawja-900 text-white">
                            <EmailIcon />
                        </a>

                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-tawja-900 text-white">
                            <FacebookIcon />
                        </a>
                        <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-tawja-900 text-white">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;