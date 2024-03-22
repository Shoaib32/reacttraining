export type userType = {id: number, name: string, role: string};
export type homeprops = {user: userType, login: (user: userType) => void, logout: () => void};

const HomePage = (props: homeprops) : JSX.Element => {
    const login = () => {
        props.login({id: 1, name: 'Shoaib', role: 'Developer'});
    }

    const logout = () => {
        props.logout();
    }

    return (
    <div><h3>Welcome to the Payments application.</h3>
    <div>
        {props.user.name} {props.user.role}
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
    </div>);
}

export default HomePage;