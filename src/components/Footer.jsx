import React from "react";

function Footer(){

const date = new Date();  
const yearUpdate = date.getFullYear();

  return (

    <footer>
    
    <p> Copyright &copy;{yearUpdate} </p>

    </footer>

  );
}

export default Footer;