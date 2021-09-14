import { useState } from "react";
import AppRouter from "./Router";
import { fbaseAuth } from "../firebase";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [isLoggedIn , setIsLoggedIn] = useState(fbaseAuth.currentUser);



    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy; 2021 Nwitter</footer>
        </>
    );
}

export default App;
