import React, { useState } from "react";

interface SettingsProps {
    username: string;
    userPicture: string;
    onUpdateSettings: (username: string, userPicture: string) => void;
}

export const Settings: React.FC<SettingsProps> = ({
    username: initialUsername,
    userPicture: initialUserPicture,
    onUpdateSettings,
}) => {
    const [username, setUsername] = useState(initialUsername);
    const [userPicture, setUserPicture] = useState(initialUserPicture);

    const handleUpdateSettings = () => {
        onUpdateSettings(username, userPicture);
    };

    return (
        <div className="settings">
            <div className="settings-item">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="settings-item">
                <label htmlFor="userPicture">User Picture:</label>
                <input
                    type="text"
                    id="userPicture"
                    value={userPicture}
                    onChange={(e) => setUserPicture(e.target.value)}
                />
            </div>
            <button onClick={handleUpdateSettings}>Update</button>
        </div>
    );
};