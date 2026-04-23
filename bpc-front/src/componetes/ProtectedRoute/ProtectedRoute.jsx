import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export default function ProtectedRoute({ children }) {
    const { user, authLoading } = useContext(AppContext);

    if (authLoading) return null;

    if (!user || user.role !== "admin") {
        return <Navigate to="/login" />;
    }

    return children;
}