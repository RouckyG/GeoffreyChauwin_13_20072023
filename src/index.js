import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/login" element={<Login />}/>
                        <Route exact path="/profile" element={<Profile />}/>
                        <Route exact path="/*" element={<Error />}/>
                    </Routes>
                <Footer />
            </Router>
        </Provider>
    </React.StrictMode>
);

