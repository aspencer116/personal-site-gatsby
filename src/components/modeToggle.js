import React from "react"


const ModeToggle = () => {

  const handleClick = e => {
    // Switch to Light Mode
    // console.log(e.documentElement.getAttribute("lang"));
    e.documentElement.setAttribute('data-test', 'light');

    // if (e.documentElement.getAttribute('data-colormode') === 'dark') {
    //   // Sets the custom HTML attribute
    // 	document.documentElement.setAttribute("data-colormode", "light");

    //   //Sets the user's preference in local storage
    //   localStorage.setItem('data-colormode', "light")
    //   return;
	  // }
    
    // Switch to Dark Mode. Sets the custom HTML attribute.
    // document.documentElement.setAttribute("data-colormode", "dark");

    // Sets the user's preference in local storage
    // localStorage.setItem("data-colormode", "dark");


    // event.currentTarget.classList.toggle('c-button');
    // document.documentElement.setAttribute("color-mode", "light");
  }

  return (
    <button onClick={handleClick} className={'c-button'}>TesT</button>
  )
}


export default ModeToggle