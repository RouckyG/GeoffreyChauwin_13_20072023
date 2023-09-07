import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux"
import { fetchUser, changeUserName } from "../utils/thunkAuth"
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { firstName, lastName, token, loading, error, isLogged } = useSelector((state) => state.user);
    const dataProfile = {};

    useEffect(() => {
		if (isLogged) {
            if(token){
                dispatch(fetchUser({token}))
            }
		}
        else{
            navigate("/")
        }
	}, []);

    const [isEditing, setIsEditing] = useState(false)

    const handleNameChange = (e) => {
        e.preventDefault()
        dispatch(changeUserName({firstName: e.target.firstName.value, lastName : e.target.lastName.value, token}))
        setIsEditing(false)
    }

    return <div className="profilePage">
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back <br/>
                {!isEditing && firstName + " " + lastName}</h1>
                {isEditing ? (
                    <form onSubmit={(e) => handleNameChange(e)}>
					<div>
						<input
                            name="firstName"
							className="input-name"
							placeholder={firstName}
							required
						/>
						<input
                            name="lastName"
							className="input-name"
							placeholder={lastName}
							required
						/>
					</div>
					<div>
						<button type="submit" className="save-button">
							Save
						</button>
						<button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</div>
				</form>
                    ) : (
                    <button className="edit-button" onClick={() => setIsEditing(true)}>
                        Edit Name
                    </button>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    </div>

}

export default Profile