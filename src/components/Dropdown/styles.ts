import styled from "styled-components";

export const DropdownLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    gap: 1.25rem;
  }

  @media (min-width: 770px){
    position: relative;

    ul{
      position: absolute;
      top: 2rem;
      right: 0;
      padding: 1rem;
      background-color: #fff;
      border-radius: 0.5rem;
      box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
    }
  }
`;