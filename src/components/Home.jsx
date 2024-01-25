import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate('/login');
    }, [user, navigate]);
    
    return (
        <div>
            {user && <h1>Il tuo token è: {user.user.token}</h1>}
        </div>
    )
}

export default Home;
