import React, { useState } from "react";

interface SettingsProps {
    onUpdateUserInfo: (username: string, userPicture: string) => void;
    onUpdateFinished: () => void;
}

const DEFAULT_PIC = "data:image/jpeg;base64,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";

export const Settings: React.FC<SettingsProps> = ({
    onUpdateUserInfo,
    onUpdateFinished
}) => {
    const [username, setUsername] = useState("BlockChat User");
    const [userPicture, setUserPicture] = useState(DEFAULT_PIC);

    const handleUpdateSettings = () => {
        onUpdateUserInfo(username, userPicture);
        onUpdateFinished();
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
                    className="user-picture-input"
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