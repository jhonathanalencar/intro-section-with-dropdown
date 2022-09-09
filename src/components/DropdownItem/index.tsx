interface DropdownItemProps{
  title: string;
  icon?: string;
  alt?: string;
}

import { DropdownItemContainer } from './styles';

export function DropdownItem({ title, icon, alt }: DropdownItemProps){
  return(
    <DropdownItemContainer>
      {icon && <img src={icon} alt={alt} />}
      <a href="#">{title}</a>
    </DropdownItemContainer>
  )
}