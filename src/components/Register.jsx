import { useNavigate } from "react-router-dom";
import { authUrl } from "../settings";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Register = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        token: '',
    });
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user) navigate('/');
    }, [user, navigate]);

    const register = (ev) => {
        ev.preventDefault();
        fetch(authUrl + '/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(data => navigate('/login'));
    }

    return (
        <div>
            <form onSubmit={(ev) => register(ev)}>
                <input type="text" name="email" placeholder="email" value={userData.email} onChange={(ev) => setUserData({...userData, email: ev.target.value})} />
                <input type="text" name="password" placeholder="password" value={userData.password} onChange={(ev) => setUserData({...userData, password: ev.target.value})} />
                <input type="text" name="token" placeholder="token" value={userData.token} onChange={(ev) => setUserData({...userData, token: ev.target.value})} />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;
