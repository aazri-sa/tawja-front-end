import {Fragment, useEffect, useState, useContext} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    HomeIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { AuthContext } from "../services/Context/userContext";
import logosrc from '../assets/images/logotawja.svg'
import Image from "./Images";
import URLS from "../constants/urls";
import LogoIcon from "../assets/svgIcons/LogoIcon";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isAuth, setIsAuth] = useState(false);
    const { handleLogout } = useContext(AuthContext);
    const navigation = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }

    }, [localStorage.getItem('access_token')]);

    const location = useLocation();
    console.log("location", location)

    return (
        <header className="bg-white header-menu">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to={URLS.home} className={"-m-1.5 p-1.5 " } >
                        <span className="sr-only">Your Company</span>
                        <Image source={logosrc} altText={"logo"} className={"h-16 w-auto"} />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    <Link to={URLS.home}
                          className={"text-sm font-semibold leading-6 text-gray-900" + (location?.pathname  == URLS.home && " border-b-2 border-b-black transition item-active") }>
                       <span className={"grid grid-flow-col auto-cols-max gap-1"}><HomeIcon className={"icon h-5 text-4xl stroke-2"} /> Accueil </span>
                    </Link>
                    <Link to={URLS.about} className={"text-sm font-semibold leading-6 text-gray-900" + (location?.pathname  == URLS.about && " border-b-2 border-b-black transition-all item-active")}>
                        A propos
                    </Link>
                    <Link to={URLS.tree} className={"text-sm font-semibold leading-6 text-gray-900" + (location?.pathname  == URLS.tree && " border-b-2 border-b-black transition-all item-active")}>
                        Family Tree
                    </Link>
                    <Link to={URLS.gallery} className={"text-sm font-semibold leading-6 text-gray-900" + (location?.pathname  == URLS.gallery && " border-b-2 border-b-black transition-all item-active")}>
                        Gallerie
                    </Link>
                    <Link to={URLS.events} className={"text-sm font-semibold leading-6 text-gray-900" + (location?.pathname  == URLS.events && " border-b-2 border-b-black transition-all item-active")}>
                        Évènement
                    </Link>
                    <Link to={URLS.contact} className={"text-sm font-semibold leading-6 text-gray-900" + (location?.pathname  == URLS.contact && " border-b-2 border-b-black transition-all item-active")}>
                        Contact
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {
                        isAuth ?
                            <a onClick={(e) => {
                                e.preventDefault();
                                handleLogout();
                                navigation(URLS.login)
                            } } className="text-sm font-semibold leading-6 text-gray-900">
                            Log out <span aria-hidden="true">&rarr;</span>
                            </a>
                            :
                            <Link to={URLS.login} className="text-sm font-semibold leading-6 text-gray-900">
                               <i className={"fa-solid fa-house"}></i> Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                    }
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to={URLS.home} className="-m-1.5 p-1.5">
                            <span className="sr-only">Tawja</span>
                            <Image source={logosrc} altText={"logo"} className={"h-8 w-auto"} />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to={URLS.home}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <span className={"grid grid-flow-col auto-cols-max gap-1"}><HomeIcon className={"icon h-6 text-2xl stroke-2"} /> Accueil </span>
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to={URLS.about}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    A propos
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to={URLS.tree}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Family Tree
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to={URLS.gallery}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Gallerie
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to={URLS.events}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Évènement
                                </Link>
                                <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    to={URLS.contact}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                            </div>
                            <div className="py-6">
                                {
                                    isAuth ?
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLogout();
                                                navigation(URLS.login)
                                                setMobileMenuOpen(false)
                                            } }
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Log out
                                        </a> :
                                        <Link
                                            onClick={() => setMobileMenuOpen(false)}
                                            to={URLS.login} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Log in
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
