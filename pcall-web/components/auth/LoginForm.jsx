"use client"
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

async function apiSignin(username, pass) {
    const credentials = { username, password: pass };
    try {
        const response = await fetch("http://localhost:9090/api/auth/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            const textErr = await response.text();
            throw new Error(textErr);
        }
        const { accessToken } = await response.json();
        return accessToken;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return false;
    }
}

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await apiSignin(username, password);
        if (token) {
            login({ username, token });
            console.log(username, token)
            console.log('La autenticación fue exitosa');
        } else {
            console.log('La autenticación falló');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="mx-auto flex min-h-screen w-full items-center bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500 justify-center text-custom-blue">
            <section className="flex w-[30rem] flex-col space-y-10">
                <div className="text-center text-5xl font-bold">Log In</div>
                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="transform rounded-sm bg-custom-blue py-2 text-zinc-200 font-bold duration-300 hover:bg-zinc-200 hover:text-custom-blue border-2 border-gray-400 hover:border-gray-300">LOG IN</button>

                <a href="#" className="transform text-center font-semibold text-custom-blue duration-300 hover:text-orange-600">FORGOT PASSWORD?</a>

                <p className="text-center text-lg">
                    No account?
                    <a href="#" className="font-medium text-orange-600 underline-offset-4 hover:underline"> Create One</a>
                </p>
            </section>
        </form>
    );
}