import { useDispatch, useSelector } from "react-redux"
import { LOGOUT } from "../redux/actions"
import { Link } from "react-router-dom";

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const logout = () => {
        dispatch({
            type: LOGOUT
        });
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            {
                user ? (
                    <form onSubmit={logout}>
                        <button>Logout</button>
                    </form>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )
            }
        </nav>
    )
}

export default Navbar;
