
import React, { useState, useEffect } from 'react';
import './App.css';

const HanziWriter = require('hanzi-writer');

function App() {
  const writerConfig = {
        width: 100,
        height: 100,
        padding: 3,
        showOutline: false,
        showCharacter: false,
        strokeColor: '#000000',//字的颜色
        strokeAnimationSpeed: 5, // 5x normal speed
        delayBetweenStrokes: 50, // milliseconds
        padding: 5
    }

    const drawCharacter = (i,writerConfig,name ) =>{
      const writer = HanziWriter.default.create('name'+i, name[i], writerConfig);
      writer.animateCharacter().then(() => {
          if (name[i + 1]) {
              drawCharacter(i + 1, writerConfig,name)
          }
      }).catch(()=>{
        console.log('json请求失败了!')
      });
    } 

    const butOnClick = () => {
      let nameValue= document.getElementById("input-name").value;
      if(/[\u4e00-\u9fa5]/.test(nameValue)){
        drawCharacter(0,writerConfig,nameValue)
      }else{
      alert('请输入正确的汉字！')
      }
    }

  return (
    <div className="App">
      <div>
      <input id="input-name" type="text" name="name"></input>
      <button onClick={butOnClick}>开始</button>
      </div>
      <div>
        <div id="name0"></div>
        <div id="name1"></div>
        <div id="name2"></div>
        <div id="name3"></div>
        <div id="name4"></div> 
      </div>
    </div>
  );
}

export default App;
