import React from 'react';
import { HeaderImg, HeaderStyle } from '../Assets/Styles/HeaderStyle';


export default function Header({pagetitle="erro", bg=""}) {
  
  return (
    <HeaderStyle>
      <h1>{pagetitle}</h1>
      <HeaderImg src={bg}></HeaderImg>
    </HeaderStyle>

  
  

  
      
    
    
  
  )
}
