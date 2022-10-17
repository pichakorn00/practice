import './Topbar.css';
import {
    SearchOutlined, AudioFilled, BellOutlined, PlusSquareOutlined, MenuOutlined,
}
    from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';

function Topbar({ toggle, setToggle }) {

    // const [test, setTest] = useState(1);

    const toggleSidebar = () => {
        if (toggle === "sidebar")
            setToggle("sidebar active");
        else if (toggle === "sidebar active")
            setToggle("sidebar");
    }

    useEffect(() => {
        console.log(toggle);
    });

    // const testtest = () => {
    //     setTest(test+1);
    // }

    return (
        <>
            <div class="topBar">
                <div class="leftSide">
                    <button class="menuList" onClick={toggleSidebar}><MenuOutlined /></button>
                    <a href=""><img class="imgLogo" src="https://cdn.discordapp.com/attachments/505413347395764224/1009460656967270400/asdasd.png" alt=""></img><span class="textLogo">Youtute</span></a>
                </div>
                <div class="searchWarp">
                    <div class="searchBar">
                        <input type="search" class="input" placeholder="Search" required></input>
                        <button class="button"><SearchOutlined /></button>
                    </div>
                    <button class="button1"><SearchOutlined /></button>
                </div>
                <div class="rightSide">
                    <button class="buttonAudio"><AudioFilled /></button>
                    <button class="buttonAudio bt2"><AudioFilled /></button>
                    <div class="otherMenu">
                        <button class="imgButton button1"><PlusSquareOutlined /></button>
                        <button class="imgButton button2"><BellOutlined /></button>
                        <button class="imgButton button3"></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topbar;