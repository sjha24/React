// import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
// import FuncComponent from './FunComponent';
import Folder from './Folder';
import File from './File';
class App extends Component {
  render(){
    return (
      <div className="App" >
        <div className='folderContainer'>
          <Folder name = "Node"/>
          <Folder name = "Public">
            <File name = 'index.html'/>
          </Folder>
          <Folder name = "src">
            <Folder name = 'React App'>
              <File name = 'App.js'/>
              <File name = 'App.css'/>
              <File name = 'App.html'/>
              <File name = 'saurav.png'/>
            </Folder>
          </Folder>
          <Folder name = "Module">
            <Folder name ='Music'>
              <Folder name = 'Hindi Song'>
                <File name ='Mai nikla.mp3'/>
                <File name ='Mai nikla.mp3'/>
                <File name ='Mai nikla.mp3'/>
                <File name ='Mai nikla.mp3'/>
                <File name ='Mai nikla.mp3'/>
                <File name ='Mai nikla.mp3'/>
              </Folder>
              <Folder name = 'English Song'>
                <Folder name = 'Video Song'>
                  <File name ='aaj unse milna.mvp'/>
                  <File name ='Mai nikla.mvp'/>
                  <File name ='aaja maa.mvp'/>
                  <File name ='Mai nikla.mvp'/>
                  <File name ='i am in love.mvp'/>
                  <File name ='Mai nikla.mvp'/>
                </Folder>
                <Folder name ='mp3.mp4 song'>
                <File name ='aaj unse milna.mp4'/>
                <File name ='Mai nikla.mp3'/>
                <File name ='aaja maa.mp4'/>
                <File name ='Mai nikla.mp3'/>
                <File name ='i am in love.mp4'/>
                <File name ='Mai nikla.mp3'/>
                </Folder>
              </Folder>
            </Folder>
          </Folder>
        </div>
      </div>
    );
  }
}

export default App;
