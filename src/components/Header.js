import React from 'react';
import '../Header.css'
export default function Header(props){

const { title } = props;

return <div className='title'>{title}</div>;
};