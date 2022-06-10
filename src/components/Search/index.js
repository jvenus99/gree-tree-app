import { Input, SearchContainer } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({ onChange }) => {
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
          onChange={(e) => onChange(e)}
          InputProps={{
            disableUnderline: true,
          }}
        />
      </SearchContainer>
    </>
  );
};
