import { useContext } from "react";
import { UserContext } from "../App";


const Home = () => {
    const info = useContext(UserContext)
    return (
        <div>

        <h1>hello-{info.user}</h1>
        <h2>roll:{info.roll}</h2>
        </div>
    );
};

export default Home;    