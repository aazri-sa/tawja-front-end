import React, {useEffect, useState} from "react";
import axios from "axios";

import {CalendarIcon} from "@heroicons/react/24/outline";
import 'moment/locale/fr';
import moment from "moment";

const Events = () => {

    const [events, setEvents] = useState(null);

    useEffect(() => {
        document.title = "Tawja | Nos événements";
    },[]);

    useEffect(() => {
        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: process.env.REACT_APP_API_BASE_URL + "/api/events/",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
        };
        console.log("config", config);
        axios
            .request(config)
            .then((response) => {
                const data = response.data;
                setEvents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <section className="container mx-auto bg-white text-gray-800">
                <div className="container p-7 mx-auto space-y-6 sm:space-y-12">
                    <div className="space-y-4 mx-6">
                        <h3 className="text-2xl font-bold leadi sm:text-5xl">Nos dernières événements</h3>
                        <p className="max-w-full text-gray-600">
                            Dans la grande histoire de notre famille, les derniers événements marquants ont renforcé nos liens et enrichi notre héritage. De joyeux rassemblements familiaux à la naissance de nouveaux membres, en passant par des mariages mémorables et des anniversaires importants, ces moments spéciaux nous rappellent l'importance de préserver notre histoire familiale. Nous sommes impatients de continuer à écrire ensemble notre histoire et de partager ces précieux souvenirs avec les générations futures.
                        </p>
                    </div>
                    {/*<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">*/}
                        {!!events && events.map((event) => {
                        return (

                            // <a rel="noopener noreferrer" key={event?.id} href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 shadow hover:shadow-lg">
                            //     <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={process.env.REACT_APP_API_BASE_URL + event.image} loading={"lazy"} alt={event?.title}/>
                            //     <div className="p-6 space-y-2">
                            //         <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{event?.title}</h3>
                            //         <p><span className={"grid grid-flow-col auto-cols-max gap-1"}><CalendarIcon className={"h-6 stroke-2 text-gray-800"} /> {moment(event?.date).format("DD MMMM, YYYY")}</span></p>
                            //         <p>{event?.description}</p>
                            //     </div>
                            // </a>
                            <section className="bg-gray-100 text-gray-800 mx-5" key={event?.id}>
                                <div className="container flex flex-col mx-auto lg:flex-row">
                                    <div className="w-full sm:w-100 lg:w-1/3" style={{backgroundImage: `url(${process.env.REACT_APP_API_BASE_URL + event.image})`, backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={process.env.REACT_APP_API_BASE_URL + event.image} loading={"lazy"} alt={event?.title}/>
                                    </div>
                                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                                        {/*<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={process.env.REACT_APP_API_BASE_URL + event.image} loading={"lazy"} alt={event?.title}/>*/}
                                        <h2 className="text-3xl font-semibold leadi">{event?.title}</h2>
                                        <p><span className={"grid grid-flow-col auto-cols-max gap-1"}><CalendarIcon className={"h-6 stroke-2 text-gray-800"} /> {moment(event?.date).format("DD MMMM, YYYY")}</span></p>
                                        <p className="mt-4 mb-8 text-sm">{event?.description}</p>
                                    </div>
                                </div>
                            </section>
                        )})}
                    {/*</div>*/}
                    {/*<div className="flex justify-center">*/}
                    {/*    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600" spellcheck="false">Load more posts...</button>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    )
}

export default Events