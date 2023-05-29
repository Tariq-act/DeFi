import { useState } from 'react';
import { CgMathMinus } from 'react-icons/cg';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { ReactComponent as Category } from '../../assets/Category.svg';
import { ReactComponent as Stats } from '../../assets/Stats.svg';
import { ReactComponent as Graph } from '../../assets/Graph.svg';
import { ReactComponent as Share } from '../../assets/Share.svg';

import './LeftSideBar.css';

const LeftSideBar = () => {
  const [activeItem, setActiveItem] = useState<null | number>(null);
  const handleClick = (active: number) => {
    setActiveItem(active);
  };
  return (
    <div className='left__sidebar'>
      <div className='left__sidebar--header'>
        <div>
          <p className='profile__logo'>N</p>
          <p className='profile__name'>Name</p>
        </div>
        <div className='menu__close'>
          <CgMathMinus
            className='top__icons'
            fontSize={'1.3rem'}
            color='#808191'
          />
          <HiOutlineArrowNarrowLeft fontSize={'2rem'} color='#FFFFFF' />
          <CgMathMinus
            className='bottom__icons'
            fontSize={'1.3rem'}
            color='#808191'
            opacity={'0.3'}
          />
        </div>
      </div>

      <ul className='left__sidebar__list'>
        <li
          className={activeItem === 1 ? 'active' : ''}
          onClick={() => handleClick(1)}
        >
          <Category className='left__sidebar--icon' />
          <p>Home</p>
        </li>
        <li
          className={activeItem === 2 ? 'active' : ''}
          onClick={() => handleClick(2)}
        >
          <Stats className='left__sidebar--icon' />
          <p>Section 1</p>
        </li>
        <li
          className={activeItem === 3 ? 'active' : ''}
          onClick={() => handleClick(3)}
        >
          <Graph className='left__sidebar--icon' />
          <p>Section 2</p>
        </li>
        <li
          className={activeItem === 4 ? 'active' : ''}
          onClick={() => handleClick(4)}
        >
          <Share className='left__sidebar--icon' />
          <p>Section 3</p>
        </li>
      </ul>

      <div className='left__sidebar__footer'>
        <div className='button__group'>
          <button className='left__sidebar--button secondary__button'>
            <span>N</span>
            $0.90
          </button>
          <button className='left__sidebar--button primary__button'>
            <span>Buy</span>
            <span>$xyz</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
