import { createAsyncThunk } from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk(
	"user/userLogin",
    
	async ({ email, password }, { rejectWithValue }) => {
        try {
            const req = await fetch(`http://localhost:3001/api/v1/user/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                    mode: "cors",
                },
            })

            const res = await req.json()
            // Enregistrement du token sur le store

            return res

        } catch(err){
            return rejectWithValue(err.message);
        }
	}
);


export const fetchUser = createAsyncThunk(
	"user/profile",
	async ({ token }, { rejectWithValue }) => {
        try {
            const req = await fetch(`http://localhost:3001/api/v1/user/profile`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    mode: "cors",
                },
            })

            const res = await req.json()

            return res

        } catch(err){
            return rejectWithValue(err.message);
        }
	}
);



export const changeUserName = createAsyncThunk(
	"user/userName",
	async ({ firstName, lastName, token }, { rejectWithValue }) => {
        try {
            const req = await fetch(`http://localhost:3001/api/v1/user/profile`, {
                method: "PUT",
                body: JSON.stringify({ firstName, lastName }),
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    mode: "cors",
                },
            })

            const res = await req.json()

            return res

        } catch(err){
            return rejectWithValue(err.message);
        }
	}
);

