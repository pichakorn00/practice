import './Sidebar.css';
import {
    HomeOutlined, DownOutlined, CompassOutlined, ThunderboltOutlined, PlaySquareOutlined, RightSquareOutlined,
    HistoryOutlined, PlayCircleOutlined, ClockCircleOutlined, LikeOutlined
}
    from '@ant-design/icons';
import { useState } from 'react';

function Sidebar({toggle, setToggle}) {

    const [point, setPoint] = useState("Home");
    const [home, setHome] = useState("");
    const [explore, setExplore] = useState("");
    const [shorts, setShorts] = useState("");
    const [subscriptions, setSubscriptions] = useState("");

    const changeRoot = (e) => {
        console.log(e.currentTarget.id);
    }

    return (
        <>
            <div class={toggle}>
                <div class="nav list1">
                    <a class={home} id="Home" onClick={changeRoot}><span class="logoItem"><HomeOutlined /></span><span class="item">Home</span></a>
                    <a class={explore} id="Explore" onClick={changeRoot}><span class="logoItem"><CompassOutlined /></span><span class="item">Explore</span></a>
                    <a class={shorts} id="Shorts" onClick={changeRoot}><span class="logoItem"><ThunderboltOutlined /></span><span class="item">Shorts</span></a>
                    <a class={subscriptions} id="Subscriptions" onClick={changeRoot}><span class="logoItem"><PlaySquareOutlined /></span><span class="item">Subscriptions</span></a>
                </div>
                <div class="nav list2">
                    <a class="" href=""><span class="logoItem"><RightSquareOutlined /></span><span class="item">Library</span></a>
                    <a class="" href=""><span class="logoItem"><HistoryOutlined /></span><span class="item">History</span></a>
                    <a class="" href=""><span class="logoItem"><PlayCircleOutlined /></span><span class="item">Your videos</span></a>
                    <a class="" href=""><span class="logoItem"><ClockCircleOutlined /></span><span class="item">Watch Later</span></a>
                    <a class="" href=""><span class="logoItem"><LikeOutlined /></span><span class="item">Liked videos</span></a>
                    <a class="" href=""><span class="logoItem"><DownOutlined /></span><span class="item">Show more</span></a>
                </div>
                <div class="nav list3">
                    <div class="navTitle">
                        <span class="title">SUBSCRIPTIONS</span>
                    </div>
                    <a class="" href=""><img class="imgLogo" src="https://cdn.discordapp.com/attachments/1025408167577927750/1030422298253074482/IMG_20221014_170828.jpg" alt=""></img><span class="item">Library</span></a>
                    <a class="" href=""><img class="imgLogo" src="https://cdn.discordapp.com/attachments/1025408167577927750/1030422298253074482/IMG_20221014_170828.jpg" alt=""></img><span class="item">History</span></a>
                    <a class="" href=""><img class="imgLogo" src="https://cdn.discordapp.com/attachments/1025408167577927750/1030422298253074482/IMG_20221014_170828.jpg" alt=""></img><span class="item">Your videos</span></a>
                    <a class="" href=""><img class="imgLogo" src="https://cdn.discordapp.com/attachments/1025408167577927750/1030422298253074482/IMG_20221014_170828.jpg" alt=""></img><span class="item">Watch Later</span></a>
                    <a class="" href=""><img class="imgLogo" src="https://cdn.discordapp.com/attachments/1025408167577927750/1030422298253074482/IMG_20221014_170828.jpg" alt=""></img><span class="item">Liked videos</span></a>
                    <a class="" href=""><img class="imgLogo" src="https://cdn.discordapp.com/attachments/1025408167577927750/1030422298253074482/IMG_20221014_170828.jpg" alt=""></img><span class="item">Show more</span></a>
                    <a class="" href=""><DownOutlined class="logoItem" /><span class="item more">Show 111 more</span></a>
                </div>
                <div class="nav list4">
                    <div class="navTitle">
                        <span class="title">EXPLORE</span>
                    </div>
                    <a class="" href=""><HomeOutlined class="logoItem" /><span class="item">Gaming</span></a>
                    <a class="" href=""><HomeOutlined class="logoItem" /><span class="item">Sport</span></a>
                </div>
                <div class="nav list5">
                    <div class="navTitle">
                        <span class="title">MORE FROM YOUTUTE</span>
                    </div>
                    <a class="" href=""><RightSquareOutlined class="logoItem" /><span class="item">Library</span></a>
                    <a class="" href=""><HistoryOutlined class="logoItem" /><span class="item">History</span></a>
                    <a class="" href=""><PlayCircleOutlined class="logoItem" /><span class="item">Your videos</span></a>
                    <a class="" href=""><ClockCircleOutlined class="logoItem" /><span class="item">Watch Later</span></a>
                    <a class="" href=""><LikeOutlined class="logoItem" /><span class="item">Liked videos</span></a>
                    <a class="" href=""><DownOutlined class="logoItem" /><span class="item">Show more</span></a>
                </div>
                {/* <h1>{point}</h1> */}
            </div>
        </>
    );
}

export default Sidebar;