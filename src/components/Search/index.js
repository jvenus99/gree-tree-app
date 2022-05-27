import { Input, SearchContainer } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = () => {
  return (
    <>
      <SearchContainer>
        <AiOutlineSearch
          size={25}
          style={{ color: 'white', margin: '0 10px' }}
        />
        <Input
          placeholder='Busque...'
          variant={'standard'}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </SearchContainer>
    </>
  );
};
