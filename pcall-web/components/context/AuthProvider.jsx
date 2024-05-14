"use client"
import React, { useState, createContext } from 'react';

// Creamos el contexto de autenticación
export const AuthContext = createContext();

// Componente AuthProvider
const AuthProvider = ({ children }) => {
    // Estado para almacenar la información de la sesión
    const [user, setUser] = useState(null);

    // Función para iniciar sesión
    const login = (userData) => {
        // Aquí puedes realizar la lógica de autenticación y guardar la información del usuario en el estado
        setUser(userData);
    };

    // Función para cerrar sesión
    const logout = () => {
        // Aquí puedes realizar la lógica para cerrar la sesión y eliminar la información del usuario del estado
        setUser(null);
    };

    // Valor del contexto
    const authContextValue = {
        user,
        login,
        logout,
    };

    // Renderizamos el proveedor de contexto con los hijos
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;