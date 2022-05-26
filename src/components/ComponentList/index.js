import { ComponentListContainer, ContentList } from './styles';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const ComponentList = ({ icon, name, children, onClick }) => {
  return (
    <>
      <ComponentListContainer onClick={onClick}>
        {icon && <span>{icon}</span>}
        <ContentList>
          {name && <h2>{name}</h2>}
          {children && <span>{`${children}`}</span>}
        </ContentList>
        {onClick !== undefined && <MdOutlineArrowForwardIos size={25} />}
      </ComponentListContainer>
    </>
  );
};
