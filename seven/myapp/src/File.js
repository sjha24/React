import React from "react";

function File(props){
    <div>
        
    </div>
    // let fileIcon;
    const ext = props.name.split(".")[1];
    // if(ext === 'mp3'){
    //     fileIcon = '';
    // }else if(ext==='png'){
    //     fileIcon = '';
    // }else if(ext === 'js'){
    //     fileIcon = 'bi bi-filetype-java'
    // }
    const iconList ={
        mp3 : "bi bi-headset",
        png : "bi bi-file-image",
        mp4 : "bi bi-earbuds",
        mvp:"bi bi-file-play-fill",
        js:"bi bi-filetype-js",
        css:"bi bi-filetype-css",
        html:"bi bi-filetype-html"
    }
    // fileIcon = iconList[ext];
    return(
        <div className ='File'><i className={`${iconList[ext]}`}></i>{props.name}</div>
    )
    
}
export default File;