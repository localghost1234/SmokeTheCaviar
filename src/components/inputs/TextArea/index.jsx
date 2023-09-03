import {memo, useContext} from 'react';
import {Text, TextInput as RNTextInput} from 'react-native';
import {ThemeContext} from '../../../contexts';
import styles from './styles';

// Functional component
const TextArea = ({label, placeholder}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <>
      {/* Text input label */}
      <Text style={[styles.textareaLabel, {color: theme.textHighContrast}]}>
        {label}
      </Text>
      {/* Text input */}
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={theme.textLowContrast}
        numberOfLines={10}
        multiline={true}
        style={[
          styles.textareaContainer,
          {
            borderColor: theme.darkYellow,
            backgroundColor: theme.lightYellow,
            color: theme.textHighContrast,
          },
        ]}
      />
    </>
  );
};

// Exporting
export default memo(TextArea);
