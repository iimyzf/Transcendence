import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Profile,
    Landing,
    Chat,
    ViewProfile,
    Home,
    GameMode,
} from "./Pages/index";
import AddChannel from "./components/AddChannel";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/home" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
                <Route
                    path="/add-channel"
                    element={
                        <AddChannel
                            togglePopup={function (): void {
                                throw new Error("Function not implemented.");
                            }}
                            addChannel={function (_channelProps: {
                                name: string;
                                img: File | null;
                            }): void {
                                throw new Error("Function not implemented.");
                            }}
                        />
                    }
                />
                <Route path="/view-profile" element={<ViewProfile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
