import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }, []);

    return (
        <AppContext.Provider value={{ data, loading }}>
            {children}
        </AppContext.Provider>
    );
}