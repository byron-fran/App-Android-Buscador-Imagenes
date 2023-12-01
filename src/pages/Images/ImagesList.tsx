/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import CardImage from '../../components/CardImage/CardImage'
import { Hit } from '../../interfaces/Images';
import { styles } from './imagesStyles';


interface ImagesProps {
    totalImages : Hit[]
}
const ImagesList : React.FC<ImagesProps> = ({totalImages}) => {

    return (
        <View>
            <View style={styles.cotainerImages}>
                {totalImages && totalImages?.map((image ) => (
                    <CardImage
                        key={image.id}
                        image={image}
                    
                    />
                ))}
            </View>
        </View>

    )}

export default ImagesList