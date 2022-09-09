import { DropdownItem } from '../DropdownItem';
import { images } from '../../constants';

import {DropdownLi} from './styles';
import { ReactNode, useState } from 'react';

interface DropdownProps{
  title: string;
  children: ReactNode;
}

export function Dropdown({ title, children }: DropdownProps){
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return(
    <DropdownLi>
      <button 
        type="button" 
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        {isDropdownOpen ? (
          <img src={images.arrowUpIcon} alt="arrow up" />
        ) : (
          <img src={images.arrowDownIcon} alt="arrow down" />
        )}
      </button>
      {isDropdownOpen && (
        <ul>
          {children}
        </ul>
      )}
    </DropdownLi>
  )
}