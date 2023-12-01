/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
//import type {PropsWithChildren} from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from './src/components/SearchBar/SearchBar'
import axios from 'axios';
import { Hit } from './src/interfaces/Images';
import ImagesList from './src/pages/Images/ImagesList';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): JSX.Element {
  const url: string = 'https://pixabay.com/api/?key=30285645-15ef99a73781bfe8606a97aa9';
  const [totalImages, setTotalImages] = useState<Hit[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  useEffect(() => {
    const getImage = async () => {
      try {

        const res = await fetch(url);
        const data = await res.json();
        setTotalImages(data.hits);


      }
      catch (error) {
        console.log(error);
      }
    };
    getImage();
  }, []);
  return (
    <ScrollView>
      <View>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <View>
          <ImagesList
            totalImages={totalImages}
          />
        </View>
      </View>
    </ScrollView>
  );
}



export default App;
