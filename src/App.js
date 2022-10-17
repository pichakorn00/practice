import './App.css';
import {
  SearchOutlined, AudioFilled, BellOutlined, PlusSquareOutlined, MenuOutlined,
}
  from '@ant-design/icons';
import Sidebar from './Sidebar.js';
import Topbar from './Topbar.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [toggle, setToggle] = useState("sidebar");
  const [main, setMain] = useState("main");
  const [cat, setCat] = useState("");
  const [data, setData] = useState("");

  useEffect = (() => {
    if (toggle === "sidebar")
      setMain("main");
    else if (toggle === "sidebar active")
      setMain("main active");
  });

  const shuffleCat = () => {
    axios.get('https://catfact.ninja/fact')
      .then(res => {
        setCat(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    axios.get(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
      .then(res => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  const object = [];
  for (var i = 0; i < data.length; i++) {
    var obj={};
    obj["nation"] = data[i].Nation;
    object.push(obj);
  }
  return (


    <>
      <Topbar toggle={toggle} setToggle={setToggle} />
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <div class={main}>
        <h1>{toggle}</h1>
        <h1>{cat.fact}</h1>
        {
          object.map(({nation}, index) => (<h1>{nation}</h1>))
        }
        <button onClick={shuffleCat}></button>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
      </div>
    </>
  );
}

export default App;
