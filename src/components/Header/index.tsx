import logoImg from '../../assets/logo.svg';
import menuIcon from '../../assets/icon-menu.svg';
import arrowDownIcon from '../../assets/icon-arrow-down.svg';

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
  return(
    <HeaderContainer>
      <HeaderCenter>
        <Logo>
          <img src={logoImg} alt="logo" />
        </Logo>

        <NavContainer>
          <NavContent>
            <LinksContainer>
              <ul>
                <li>
                  <button>
                    <span>Features</span>
                    <img src={arrowDownIcon} alt="arrow down" />
                  </button>
                  <ul>
                    {/* <li>a</li> */}
                  </ul>
                </li>
                <li>
                  <button>
                    <span>Company</span>
                    <img src={arrowDownIcon} alt="arrow down" />
                  </button>
                  <ul>
                    {/* <li>a</li> */}
                  </ul>
                </li>
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
        <MenuButton type="button">
          <img src={menuIcon} alt="menu" />
        </MenuButton>
      </HeaderCenter>
    </HeaderContainer>
  )
}