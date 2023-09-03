import {useContext, memo} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../../../contexts';
import Lottie from 'lottie-react-native';
import styles from './styles';

// Functional component
const Alert = ({lottieFile, problemTitle, problemInfo}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.black}]}>
      <Lottie source={lottieFile} autoPlay loop style={styles.lottieFile} />
      <Text style={[styles.problemTitle, {color: theme.textHighContrast}]}>
        {problemTitle}
      </Text>
      <Text style={[styles.problemInfo, {color: theme.textLowContrast}]}>
        {problemInfo}
      </Text>
    </View>
  );
};

// Exporting
export default memo(Alert);
