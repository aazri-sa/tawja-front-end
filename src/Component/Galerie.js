import React, {useEffect, useState} from 'react';
import axios from "axios";


const Galery = () => {

    const [galeries, setGaleries] = useState(null);

    useEffect(() => {
        document.title = "Tawja | Notre galerie";
    },[]);

    useEffect(() => {
        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: process.env.REACT_APP_API_BASE_URL + "/api/galleries/",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
        };
        console.log("config", config);
        axios
            .request(config)
            .then((response) => {
                const data = response.data;
                setGaleries(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <>
            <section className="p-6 bg-white">
                <div className="container flex flex-col justify-center p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold leadi sm:text-5xl">Notre galerie</h3>
                        <p className="max-w-2xl text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        {!!galeries && galeries.map((galery) => {
                            return (
                                < div key={galery?.id} className={"max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 shadow hover:shadow-lg"}>
                                    <div className={"text-center pt-2"} >
                                    <img className="object-cover w-full bg-gray-500 aspect-square" src={process.env.REACT_APP_API_BASE_URL + galery.image} loading={"lazy"}/>
                                    <div className={"text-1xl p-6 space-y-2"}><p>{galery?.title}</p></div>
                                    </div>
                                </div>

                        )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Galery;
