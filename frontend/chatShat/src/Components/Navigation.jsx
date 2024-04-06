import { useState } from 'react';
import './Navigation.css';
import { IoIosArrowBack } from "react-icons/io";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa"; 

function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='body'>
      <div className='navigation'>
        <ul>
          <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onMouseEnter={() => handleHover(0)}>
            <a href="#">
              <span className="icon"> <IoIosArrowBack /></span> {/* Arrow back icon */}
            </a>
          </li>
          <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onMouseEnter={() => handleHover(1)}>
            <a href="#">
              <span className="icon"> <FaUserCircle /></span> {/* Profile icon */}
            </a>
          </li>
          <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onMouseEnter={() => handleHover(2)}>
            <a href="#">
              <span className="icon"><MdMessage /></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onMouseEnter={() => handleHover(3)}>
            <a href="#">
              <span className="icon"><IoCall /></span>
            </a>
          </li>
          <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onMouseEnter={() => handleHover(4)}>
            <a href="#">
              <span className="icon"><PiDotsThreeOutlineVerticalDuotone />
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
