import styled from "styled-components";

export const DropdownItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: max-content;
  
  img{
    align-self: flex-end;
    width: 1rem;
  }
  
  a{
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover{
      color: var(--black);
    }
  }

`;
