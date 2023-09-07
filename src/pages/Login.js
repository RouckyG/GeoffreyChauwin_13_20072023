import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../utils/thunkAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
	const { loading, success, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const { register, handleSubmit, reset } = useForm();
	const navigate = useNavigate();
    
	useEffect(() => {
        if (success) {
			navigate("/profile");
		}
	}, [success]);

    
	const submitForm = (data) => {
		dispatch(userLogin(data));
		reset();
	};

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = {
            email : e.target.username.value,
            password : e.target.password.value
        }

        submitForm(data)
    }
    

    return <div className="loginPage">
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => {handleSubmitForm(e)}}>
                    <div className="input-wrapper">
                        <label htmlFor="email">
                            Username
                        </label>
                        <input type="email" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" />
                    </div>
                    {/* <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">
                            Remember me
                        </label>
                    </div> */}
                    <button type="submit" className="sign-in-button" disabled={loading}>
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    </div>

}

export default Login