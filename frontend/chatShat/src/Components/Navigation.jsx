import { useState } from 'react';
import './Navigation.css';
import { MdGroupAdd } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);




  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='body'>
      <div className={"navigation" + (lightTheme ? "" : " dark")}>
        <ul>
          <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onMouseEnter={() => handleHover(0)}>
            <a href="#">
              <span className={"icon" + (lightTheme ? "" : " dark")}><IoPersonCircleSharp/> </span> {/* Arrow back icon */}
            </a>
          </li>
          <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onMouseEnter={() => handleHover(1)}>
            <a href="/app/user">
              <span className={"icon" + (lightTheme ? "" : " dark")}><IoPersonAddSharp/></span> {/* Profile icon */}
            </a>
          </li>
          <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onMouseEnter={() => handleHover(2)}>
            <a href="/app/groups">
              <span className={"icon" + (lightTheme ? "" : " dark")}><MdGroupAdd /></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onMouseEnter={() => handleHover(3)}>
            <a href="/app/create-groups">
              <span className={"icon" + (lightTheme ? "" : " dark")}><IoIosAddCircle /></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onMouseEnter={() => handleHover(4)}>
            <a href="#" onClick={() => {
              dispatch(toggleTheme());
            }}>
              <span className={"icon" + (lightTheme ? "" : " dark")}> 
              {lightTheme ? <MdNightlight/> : <IoSunnySharp/>}
              </span>
            </a>
          </li>
          <div className='indicator' style={{ transform: `translateX(calc(${activeIndex} * 100%))` }}></div>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
