import React, { useState } from "react";
import { login } from "../redux/user"
import { userDispatch } from "react-redux";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch(login({}))
    }

    return <div className="loginPage">
        <main class="main bg-dark">
            <section class="sign-in-content">
                <i class="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                <div class="input-wrapper">
                    <label for="username">
                        Username
                    </label>
                    <input type="text" id="username" onChange={(e) => {setEmail(e)}} />
                </div>
                <div class="input-wrapper">
                    <label for="password">
                        Password
                    </label>
                    <input type="password" id="password" onChange={(e) => {setPassword(e)}} />
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">
                        Remember me
                    </label>
                </div>
                {/* <a href="./user.html" class="sign-in-button">Sign In</a>
                <button class="sign-in-button">Sign In</button> */}
                </form>
            </section>
        </main>
    </div>

}

export default Login