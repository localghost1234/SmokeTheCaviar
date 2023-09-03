import {useState, useContext} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ArrowUpDarkestGreen from '../../assets/icons/svg/ic_arrow_up_darkest_green.svg';
import ArrowDownDarkestGreen from '../../assets/icons/svg/ic_arrow_down_darkest_green.svg';
import {STANDARD_VECTOR_ICON_SIZE} from '../../config/Constants';
import {ThemeContext} from '../../contexts';
import FaqsData from '../../data/FaqsData';

import styles from './styles';

// Comparing
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Functional component
const AccordionItem = ({children, question, expanded, onHeaderPress}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Defining accordion body
  const body = <View style={styles.accordionBody}>{children}</View>;

  // Returning
  return (
    <View style={styles.accordionWrapper}>
      <TouchableOpacity
        style={[styles.accordionHeader, {backgroundColor: theme.lightYellow}]}
        onPress={onHeaderPress}>
        {/* Question */}
        <Text style={[styles.question, {color: theme.textHighContrast}]}>
          {question}
        </Text>

        {/* Conditional rendering */}
        {expanded ? (
          <ArrowUpDarkestGreen
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        ) : (
          <ArrowDownDarkestGreen
            width={STANDARD_VECTOR_ICON_SIZE}
            height={STANDARD_VECTOR_ICON_SIZE}
          />
        )}
      </TouchableOpacity>

      {/* Conditional rendering */}
      {expanded && body}
    </View>
  );
};

// Functional component
const Accordion = ({data}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Local states
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Method to handle press
  const handleHeaderPress = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Returning
  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          expanded={expandedIndex === index}
          onHeaderPress={() => handleHeaderPress(index)}>
          <Text style={[styles.answer, {color: theme.textLowContrast}]}>
            {item.answer}
          </Text>
        </AccordionItem>
      ))}
    </>
  );
};

// Functional component
const Faqs = ({navigation}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View style={[styles.mainWrapper, {backgroundColor: theme.black}]}>
      {/* Scrollview */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {/* Accordion */}
        <Animatable.View animation="fadeInUp" delay={100}>
          <Accordion data={FaqsData} />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

// Exporting
export default Faqs;
