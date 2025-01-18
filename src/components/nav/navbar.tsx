import React from "react";
import TopBar from "../topbar";
import ConnectButton from "../web3/connect-button";
import Menu from "../menu/menu";

const NavBar: React.FC = () => {
    return (
        <TopBar>
            <ConnectButton />
            <Menu />
        </TopBar>
    );
};

export default NavBar;