import Entypo from 'react-native-vector-icons/Fonts/Entypo.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import Foundation from 'react-native-vector-icons/Fonts/Foundation.ttf';


/**
 * Todo find better way to load fonts for icons
 */
const fontList = {
  Entypo,
  ['Material Icons']: MaterialIcons,
  ['fontcustom']: Foundation
};

Object.keys(fontList).map((font) => {
  const iconFontStyles = `@font-face {
    src: url(${fontList[font]});
    font-family: ${font};
  }`;
  
  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }
  
  // Inject stylesheet
  document.head.appendChild(style);
})
