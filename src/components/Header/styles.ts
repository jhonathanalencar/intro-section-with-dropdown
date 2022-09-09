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
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.nav`
`;

export const NavContent = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  height: 100vh;
`;

export const LinksContainer = styled.div`
  margin-left: auto;
  background-color: var(--white);
  padding: 1rem;
  padding-top: 5rem;
  width: 230px;
  height: 100%;

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
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 3rem;

  ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

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
`;

