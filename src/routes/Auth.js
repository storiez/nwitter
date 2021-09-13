import { useState } from "react";
import { fbaseAuth , fbaseCreateUserWithEmailAndPassword , fbaseSignInWithEmailAndPassword } from "../firebase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (event) => {
        const {
            target: { name, value } ,
        } = event;

        switch (name) {
        case "email":
            setEmail(value);
            break;
        case "password":
            setPassword(value);
            break;
        default:
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            let data;

            if (newAccount) {
                // create new account
                data = await fbaseCreateUserWithEmailAndPassword(email, password);
            } else {
                // log in
                data = await fbaseSignInWithEmailAndPassword(email, password);
            }

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "log In"} />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;