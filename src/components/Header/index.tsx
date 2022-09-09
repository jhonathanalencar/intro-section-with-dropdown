import { images } from '../../constants';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { Dropdown } from '../Dropdown';
import { DropdownItem } from '../DropdownItem';

import {
  HeaderContainer,
  HeaderCenter,
  Logo,
  NavContainer,
  NavContent,
  LinksContainer,
  ButtonsContainer,
  MenuButton,
} from './styles';

export function Header(){
  const { isSidebarOpen, toggleSidebarState } = useGlobalContext();

  return(
    <HeaderContainer>
      <HeaderCenter>
        <Logo>
          <img src={images.logoImg} alt="logo" />
        </Logo>
        {isSidebarOpen && (
          <NavContainer>
            <NavContent>
              <LinksContainer>
                <ul>
                  <Dropdown title="Features">
                    <DropdownItem 
                      title="Todo List"
                      icon={images.todoIcon} 
                      alt="list icon"
                    />
                    <DropdownItem 
                      title="Calendar"
                      icon={images.calendarIcon} 
                      alt="calendar icon"
                    />
                    <DropdownItem 
                      title="Reminders"
                      icon={images.remindersIcon} 
                      alt="bell icon"
                    />
                    <DropdownItem 
                      title="Planning"
                      icon={images.planningIcon} 
                      alt="clock icon"
                    />
                  </Dropdown>
                  
                  <Dropdown title="Company">
                    <DropdownItem 
                      title="History"
                    />
                    <DropdownItem 
                      title="Our Team"
                    />
                    <DropdownItem 
                      title="Blog"
                    />
                  </Dropdown>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
                <ButtonsContainer>
                  <ul>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                  </ul>
                </ButtonsContainer>
              </LinksContainer>
            </NavContent>
          </NavContainer>
        )}
        <MenuButton 
          type="button"
          onClick={toggleSidebarState}
        >
          {isSidebarOpen ? (
            <img src={images.closeMenuIcon} alt="" />
          ) : (
            <img src={images.menuIcon} alt="" />
          )}
        </MenuButton>
      </HeaderCenter>
    </HeaderContainer>
  )
}