import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../redux/actions";
import { authUrl } from "../settings";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (user) navigate('/');
    }, [user, navigate]);

    const login = (ev) => {
        ev.preventDefault();
        fetch(authUrl + '/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(res => {
                if (!res.ok) throw new Error('errore');
                return res.json();
            })
            .then(data => dispatch({
                type: LOGIN,
                payload: data,
            }))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <form onSubmit={(ev) => login(ev)}>
                <input type="text" name="email" placeholder="email" value={userData.email} onChange={(ev) => setUserData({...userData, email: ev.target.value})}/>
                <input type="text" name="password" placeholder="password" value={userData.password} onChange={(ev) => setUserData({...userData, password: ev.target.value})}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
