import { useState , useEffect } from "react";
import AppRouter from "./Router";
import { fbaseAuth } from "../firebase";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    useEffect(() => {
        fbaseAuth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(user);
            } else {
                setIsLoggedIn(false);
            }
        });
        setInit(true);
    }, []);

    return (
        <>
            {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing.."}
            <footer>&copy; 2021 Nwitter</footer>
        </>
    );
}

export default App;
