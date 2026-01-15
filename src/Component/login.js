
import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';

import LogoSRC from '../assets/images/logotawja.svg'

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../services/Context/userContext";
import Urls  from "../constants/urls";
import Image from "./Images";
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = React.useState("");
    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Tawja | Login";
    },[]);
    const handelSubmitLogin = (e) => {
        e.preventDefault();
        setError("");
        if(!password || !username){
            setError("Please fill all fields")
            return
        }
        handleLogin(username, password)
            .then((e) => {
                navigate(Urls.home, {
                    replace: true,
                    state: { displayModal: true },
                });
            })
            .catch((err) => {
                setError("Invalid cardinalities: " + err.message);
            });
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image className={"mx-auto h-10 w-auto"} source={LogoSRC} altText={"login page"}/>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                 <div className="text-center text-red-500">{error ? error : ""}</div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6"
                          method={"POST"}
                          onSubmit={handelSubmitLogin}
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => {setUsername(e.target.value)}}
                                    value={username}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    value={password}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-tawja-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}




export default Login;


