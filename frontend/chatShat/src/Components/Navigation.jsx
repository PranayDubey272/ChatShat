import { useState } from 'react';
import './Navigation.css';
import { MdGroupAdd } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { toggleTheme } from '../Features/themeSlice';

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector(state => state.themeKey); // Access themeKey from Redux state

  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='body'>
      <div className={"navigation" + (lightTheme ? "" : " dark")}>
        <ul>
          <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onMouseEnter={() => handleHover(0)}>
            <button onClick={() => handleNavigation("/")}>
              <IoPersonCircleSharp className="icon" />
            </button>
          </li>
          <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onMouseEnter={() => handleHover(1)}>
            <button onClick={() => handleNavigation("/app/user")}>
              <IoPersonAddSharp className="icon" />
            </button>
          </li>
          <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onMouseEnter={() => handleHover(2)}>
            <button onClick={() => handleNavigation("/app/groups")}>
              <MdGroupAdd className="icon" />
            </button>
          </li>
          <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onMouseEnter={() => handleHover(3)}>
            <button onClick={() => handleNavigation("/app/create-groups")}>
              <IoIosAddCircle className="icon" />
            </button>
          </li>
          <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onMouseEnter={() => handleHover(4)}>
            <button onClick={() => dispatch(toggleTheme())} className={`theme-toggle-button ${lightTheme ? "" : "dark"}`}>
              {lightTheme ? <MdNightlight className="icon" /> : <IoSunnySharp className="icon" />}
            </button>
          </li>
          <div className='indicator' style={{ transform: `translateX(calc(${activeIndex} * 100%))` }}></div>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
