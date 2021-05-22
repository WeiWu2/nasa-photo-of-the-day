import React, {useState, useEffect} from 'react';

export default function PictureBody(props){
    const {date, description} = props;


    return  ( 
    <div> Date: {date} 
    <div> Details: {description}
    </div>
    </div>
    )
};