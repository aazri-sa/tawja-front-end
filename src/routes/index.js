import {Route, Routes} from "react-router-dom";
import React from "react";
import Tree from "../Component/Tree";
import RequireAuth from "../services/auth";
import Home from "../Component/Home";
import About from "../Component/about";
import Galery from "../Component/Galerie";
import Contact from "../Component/Contact";
import Login from "../Component/login";
import Events from "../Component/events";
import PageNotFound from "../Component/NotFound";

import URLS from "../constants/urls";

const Root = () => {

    return (
        <Routes>
            <Route path={URLS.home} element={<Home />} />
            <Route path={URLS.about} element={<About />} />
            <Route path={URLS.tree} element={<RequireAuth><Tree /></RequireAuth>} />
            <Route path={URLS.gallery} element={<RequireAuth><Galery /></RequireAuth>} />
            <Route path={URLS.events} element={<RequireAuth><Events /></RequireAuth>} />
            <Route path={URLS.contact} element={<Contact />} />
            <Route path={URLS.login} element={<Login />} />
            <Route path={URLS.notFound} element={<PageNotFound />} />

        </Routes>
    )
}

export default Root;