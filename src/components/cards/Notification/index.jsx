import {memo, useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import styles from './styles';
import {STANDARD_SPACING} from '../../../config/Constants';

// Functional component
const Notification = ({
  avatarImage,
  notificationTitle,
  notificationAge,
  notificationMessage,
  isLastItem,
}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View
      style={[
        styles.notificationCard,
        {marginBottom: isLastItem ? 0 : STANDARD_SPACING * 3},
      ]}>
      <View
        style={[styles.avatarImageWrapper, {backgroundColor: theme.lightYellow}]}>
        <Image source={avatarImage} style={styles.avatarImage} />
      </View>

      <View style={styles.notificationMessageWrapper}>
        {/* Notification title & age wrapper */}
        <View style={styles.notificationTitleAndAgeWrapper}>
          {/* Notification title */}
          <Text
            style={[styles.notificationTitle, {color: theme.textHighContrast}]}>
            {notificationTitle}
          </Text>

          {/* Notification age */}
          <Text style={[styles.notificationAge, {color: theme.white}]}>
            {notificationAge}
          </Text>
        </View>

        {/* Notification message */}
        <Text
          style={[styles.notificationMessage, {color: theme.textLowContrast}]}
          numberOfLines={4}
          ellipsizeMode="tail">
          {notificationMessage}
        </Text>
      </View>
    </View>
  );
};

// Exporting
export default memo(Notification);
