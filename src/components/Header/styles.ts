import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  position: relative;
`;

export const HeaderCenter = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
  gap: 2rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    margin-top: 0.3rem;
  }
`;

export const NavContainer = styled.nav`
  flex: 1;
`;

export const NavContent = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  
  &.show{
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  @media (min-width: 770px){
    background-color: transparent;
    position: unset;
    height: unset;
    overflow: unset;

    &.show{
      background-color: transparent;
    }
  }
`;

export const LinksContainer = styled.div`
  margin-left: auto;
  background-color: var(--white);
  padding: 1rem;
  padding-top: 5rem;
  width: 230px;
  height: 100%;

  transform: translateX(100%);

  &.show{
    transform: translateX(0);
  }

  @media (min-width: 770px){
    background-color: transparent;
    margin: unset;
    padding: unset;
    width: 100%;
    height: unset;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    transform: translateX(0);
  }

  > ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li{
      font-size: 1rem;
      font-weight: 700;
      
      a{
        text-decoration: none;
        color: var(--gray);
      }

      button{
        border: none;
        background: none;
        font-size: 1rem;
        color: var(--gray);
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
      }
    }

    @media (min-width: 770px){
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      
      li{
        a, button{
          transition: color 0.3s ease;

          &:hover{
            color: var(--black);
          }
        }
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  height: 100%;

  @media (min-width: 770px){
    margin: 0;
  }

  ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    width: 100%;

    @media (min-width: 770px){
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    li{
      font-size: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.75rem 0;
      border-radius: 1rem;
      
      a{
        text-decoration: none;
        color: var(--gray);

        &:hover{
          color: var(--black);
        }
      }
    }

    li:nth-child(2){
      border: 0.2rem solid var(--gray);

      @media (min-width: 770px){
        padding: 0.75rem 1rem;
      }
    }
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 99;

  @media (min-width: 770px){
    display: none;
  }
`;

