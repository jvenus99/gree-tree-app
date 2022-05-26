import { ComponentListContainer, ContentList } from './styles';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export const ComponentList = ({ icon, name, children, onClick }) => {
  return (
    <>
      <ComponentListContainer onClick={onClick}>
        <span>{icon}</span>
        <ContentList>
          <h2>{name}</h2>
          <span>{`${children}`}</span>
        </ContentList>
        <MdOutlineArrowForwardIos size={25} />
      </ComponentListContainer>
    </>
  );
};
