import { ComponentListContainer, ContentList } from './styles';

export const ComponentList = ({ icon, name, children, onClick }) => {
  return (
    <>
      <ComponentListContainer onClick={onClick}>
        {icon && <span>{icon}</span>}
        <ContentList>
          {name && <h2>{name}</h2>}
          {children && <span>{`${children}`}</span>}
        </ContentList>
      </ComponentListContainer>
    </>
  );
};
