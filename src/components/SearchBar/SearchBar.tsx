/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import  React ,{ SetStateAction } from 'react';
import {Text, View, TextInput} from 'react-native';



interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
}

const SearchBar  : React.FC<SearchBarProps> = ({searchTerm, setSearchTerm}) => {
    

  return (
    <View>
      <Text>Buscador</Text>
      <View>
        <TextInput 
            placeholder='buscar imagenes por nombre'
            onChangeText={ (value) => setSearchTerm(value)} />
      </View>
    </View>
  );
};

export default SearchBar;
