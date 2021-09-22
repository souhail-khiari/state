import React from "react";
import Profile from "./Profile/Profile";

function App() {
    const handleName = (FullName) => {
        alert(`this is ${FullName}`);
    };
    return (
        <div>
            <Profile
                FullName="Souhail khiari"
                Bio="Fullsatck JS student in GoMyCode"
                Profession="Student"
                handleName={handleName}
            />
        </div>
    );
}
export default App;
