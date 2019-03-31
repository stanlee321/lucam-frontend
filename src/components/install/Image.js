import React from 'react';


const image = (props) => {
    let x = props.position.x
    let y = props.position.y

    let data = {
        x: x,
        y:y
    }
    return (
        <img src={require("./test_img.jpg")} onClick={ () => props.getData(data) } style={{height: "100%", width: "100%"}} alt="This is a placeholder"></img>
    )
}

export default image;