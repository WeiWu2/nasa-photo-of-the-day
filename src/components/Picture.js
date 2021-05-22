import React from 'react';



export default function Picture(props){
    const { pictureURL } = props;

    return <img src={pictureURL} alt='space'/>;
}