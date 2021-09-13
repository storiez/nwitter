import { useState } from "react";
import AppRouter from "./Router";

function App() {
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy; 2021 Nwitter</footer>
        </>
    );
}

export default App;
