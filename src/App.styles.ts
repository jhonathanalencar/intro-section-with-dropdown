import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
`;

export const HeroContent = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

export const HeroImage = styled.div`
  width: 100%;

  img{
    width: 100%;
  }
`;

export const HeroInfo = styled.div`
  /* width: 95%; */
  margin-inline: auto;
  padding-top: 3rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > h1{
    font-size: 2.15rem;
    text-align: center;
  }
  
  > p{
    text-align: center;
    line-height: 1.5;
    color: hsl(0, 0%, 41%);
    font-size: 1.125rem;
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
`;