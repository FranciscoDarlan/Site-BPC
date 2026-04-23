import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        fetch("/api/principal/info").then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao carregar dados:", err);
                setLoading(false);
            });

        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            const savedUser = localStorage.getItem("user");
            if (savedUser) setUser(JSON.parse(savedUser));
        }
        setAuthLoading(false);
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AppContext.Provider value={{ data, loading, user, setUser, logout, authLoading }}>
            {children}
        </AppContext.Provider>
    );
}