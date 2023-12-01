/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text , Image} from 'react-native'
import { Hit } from '../../interfaces/Images';
import { styles } from './cardImageStyles';
interface ImageProps {
    image : Hit
}

const CardImage : React.FC<ImageProps> = ({image}) => {
   
    return (
        <View>
            <Image style={styles.image} source={{uri :image.userImageURL }}/>
            <View>
                <Text>{image.views}</Text>
                <Text>{image.likes}</Text>

            </View>
        </View>

    )}

export default CardImage