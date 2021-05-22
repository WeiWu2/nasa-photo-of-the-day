import React from 'react';
import '../Header.css'
export default function Header(props){

const { title } = props;

return <h1 className='title'>{title}</h1>;
};