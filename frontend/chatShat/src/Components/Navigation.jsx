import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoPersonCircleSharp, IoPersonAddSharp } from "react-icons/io5";
import { MdGroupAdd, MdNightlight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='body'>
      <div className='navigation'>
        <ul>
          <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onMouseEnter={() => handleHover(0)}>
            <button onClick={() => handleNavigation("/")}>
            </button>
          </li>
          <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onMouseEnter={() => handleHover(1)}>
            <button onClick={() => handleNavigation("/app/user")}>
            </button>
          </li>
          <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onMouseEnter={() => handleHover(2)}>
            <button onClick={() => handleNavigation("/app/groups")}>
            </button>
          </li>
          <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onMouseEnter={() => handleHover(3)}>
            <button onClick={() => handleNavigation("/app/create-groups")}>
            </button>
          </li>
          <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onMouseEnter={() => handleHover(4)}>
            <button onClick={() => handleNavigation("#")}>
            </button>
          </li>

        {/* Indicator element to highlight active tab */}
        <div className='indicator' style={{ transform: `translateX(calc(${activeIndex} * 100%))` }}></div>
        </ul>

      </div>
    </div>
  );
}

export default Navigation;
