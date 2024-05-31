import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import appStore from "./store/appStore"

const App = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        // make an api call and set username
        const data = { name: "Rohit Sharma" };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Virat Kohli" }}>
                <div>
                    <Header />
                    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                        <Outlet />
                    </UserContext.Provider>
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

export default App;
