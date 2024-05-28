// Header 컴포넌트
import React, { useState } from "react";
import { ReactComponent as MainLogo } from '../img/MainLogo.svg';
import '../styles/Header.css';
import LoginModal from "./LoginModal";
import SettingsModal from "./SettingsModal";

const Header = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [settingModalOpen, setSettingModalOpen] = useState(false);
    
    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };

    const openSettingModal = () => {
        setSettingModalOpen(true);
    };

    const closeSettingModal = () => {
        setSettingModalOpen(false);
    };

    return (
        <div className="HeaderWrapper">
            <MainLogo width="49" height="50.7"/>
            <div className="HeaderMenu">
                <div className="HeaderItem">
                    <button onClick={openSettingModal} className="HeaderSettingsButton">설정</button>
                    <SettingsModal isOpen={settingModalOpen} onClose={closeSettingModal} />
                </div>
                <div className="HeaderItem">
                    <button className="extra" >버튼</button>
                </div>
                <div className="HeaderItem">
                    <button onClick={openLoginModal} className="HeaderLoginButton">시작하기</button>
                    <LoginModal isOpen={loginModalOpen} onClose={closeLoginModal} />
                </div>
            </div>
        </div>
    );
}

export default Header;
