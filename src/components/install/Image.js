import React from 'react';


const image = (props) => {
    let x = props.position.x
    let y = props.position.y

    let data = {
        x: x,
        y:y
    }
    return (
        <img src={require("./test_img.jpg")} onClick={ () => props.getCoord(data) } style={{height: "100%", width: "100%"}}></img>
    )
}

export default image;