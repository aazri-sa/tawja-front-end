
import React from 'react';
import {BrowserRouter, Route, Link, Switch, Routes} from 'react-router-dom';

import Layout from "./Component/layout";
import Root from "./routes";
import AuthProvider from "./services/Context/userContext";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Layout>
                    <Root/>
                </Layout>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
