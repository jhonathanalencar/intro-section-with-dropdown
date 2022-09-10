import styled from "styled-components";

export const HeroContainer = styled.section<{isSidebarOpen: boolean}>`
  width: 100%;
  height: ${({isSidebarOpen}) => isSidebarOpen ? '100vh' : 'auto'};
  overflow: ${({isSidebarOpen}) => isSidebarOpen ? 'hidden' : 'auto'};
  min-height: 100vh;
`;

export const HeroContent = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;


  @media (min-width: 770px){
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    gap: 4rem;
    width: 95vw;
    max-width: 1100px;
    margin-inline: auto;
    padding-bottom: 2rem;
  }
`;

export const HeroImage = styled.div`
  width: 100%;

  img{
    width: 100%;
  }
  
  @media (min-width: 770px){
    grid-area: right;
    justify-self: center;
    align-self: center;

    img{
      max-height: 600px;
      object-fit: scale-down;
    }
  }
`;

export const HeroInfo = styled.div`
  width: 95%;
  margin-inline: auto;
  padding-top: 3rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 770px){
    grid-area: left;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    gap: 3rem;
    align-self: center;
  }

  > h1{
    font-size: 2.15rem;
    text-align: center;

    @media (min-width: 770px){
      font-size: 4.7rem;
      width: 130%;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
  
  > p{
    text-align: center;
    line-height: 1.5;
    color: hsl(0, 0%, 41%);
    font-size: 1.125rem;

    @media (min-width: 770px){
      text-align: left;
      width: 450px;
    }
  }

  > button{
    background-color: var(--black);
    color: var(--white);
    border-radius: 0.9rem;
    padding: 0.75rem 1.25rem;
    border: 0.1rem solid var(--black);
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover{
      background-color: var(--white);
      color: var(--black); 
    }
  }
`;

export const Sponsors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  img{
    width: 5rem;
  }

  img:nth-child(2){
    width: 3rem;
  }

  @media (min-width: 770px){
    flex: 1;
    align-items: flex-end;
    gap: 2rem;
    margin-top: 3rem;
  }
`;