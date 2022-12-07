import React from 'react'
import "./Nav.css";

function Nav() {

  const [barColor, setBarColor] = React.useState(0);

  React.useEffect(() => { //function to change navbar color from transparent to black after 100px scrolling
    const handleScroll = event => {
      //console.log('window.scrollY', window.scrollY);
      if (window.scrollY > 100) setBarColor(1); //if scrolling along y-axis>100px
      else setBarColor(0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
      <div className='nav' style={{backgroundColor: `rgba(0, 0, 0, ${barColor})`}}>
          <img className='nav_logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt='Netflix-logo' />
          <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt='Netflix-avatar' />
    </div>
  )
}

export default Nav;


