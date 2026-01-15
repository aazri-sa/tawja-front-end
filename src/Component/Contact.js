import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../services/Context/userContext";
import { Urls } from "../constants/urls";
const Contact = () => {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");
    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Tawja | Contactez-nous";
    },[]);

    const handleSubmit = async e => {
        e.preventDefault();
        const qs = require('qs');
        let data = qs.stringify({
            'name': name,
            "subject": "subject",
            'email': email,
            'message': message
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://swvl9v7w-8000.uks1.devtunnels.ms/api/contact/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                //axios.defaults.headers.common['Authorization'] ={}
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <section className="p-6 white:text-black mt-20 mb-20 w-full">

	            <form noValidate=""
                    className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900"
                    onSubmit={handleSubmit}
                >
                    <h2 className="w-full text-3xl font-bold leadi">Contact us</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">Nom: </label>
                        <input id="name" type="text"
                               placeholder="Votre nom"
                               required="required"
                               className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 border-2"
                               name={"name"}
                               value={name}
                               onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-1 ml-1">Sujet: </label>
                        <input id="subject" type="text"
                               placeholder="Votre sujet"
                               required="required"
                               className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 border-2"
                               name={"subject"}
                               value={subject}
                               onChange={e => setSubject(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">Email: </label>
                        <input id="email" type="email"
                               placeholder="Votre e-mail"
                               required="required"
                               className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 border-2"
                                name={"email"}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1 ml-1">Message: </label>
                        <textarea id="message"
                                  placeholder="Message..."
                                  required="required"
                                  className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800 border-2"
                                    name={"message"}
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    {
                        !!error &&
                        (<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            {error ? error : ""}
                        </div>)

                    }
                    {
                        !! success && (<div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            {success ? success : ""}
                        </div>)
                    }
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-gray-700 text-white focus:ri hover:ri dark:text-gray-900 bg-tawja-900">Send</button>
                    </div>
                </form>
            </section>
        </>
    )
}




export default Contact;


