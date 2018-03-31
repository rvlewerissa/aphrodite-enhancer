/*
*  accepts plain style object or aphrodite object in an optional array (or nested)
*  returns {style, className}
*  
*  @flow
*/

import {css} from 'aphrodite/no-important';

export * from 'aphrodite';

export default function styleWithProps(userStyles: *) {
  let generatedStyle = {style: {}, className: []};
  if (userStyles == null) {
    return generatedStyle;
  }
  Array.isArray(userStyles)
    ? assignStyles(generatedStyle, userStyles)
    : assignStyle(generatedStyle, userStyles);
  return !global.CURRENTLY_TESTING
    ? transformCSS(generatedStyle)
    : generatedStyle;
}

function assignStyles(generatedStyle, userStyles) {
  userStyles.forEach((userStyle) => assignStyle(generatedStyle, userStyle));
}

function assignStyle(generatedStyle, userStyle) {
  if (Array.isArray(userStyle)) {
    return assignStyles(generatedStyle, userStyle);
  } else if (userStyle == null) {
    return;
  }
  let {className, style} = generatedStyle;
  isAphroditeGenerated(userStyle)
    ? className.push(userStyle)
    : (style = Object.assign(style, userStyle));
  return generatedStyle;
}

/* all aphrodite generated style have _definition props (hacky) */
function isAphroditeGenerated(style) {
  return style.hasOwnProperty('_definition');
}

function transformCSS({className, style}) {
  return {
    className: css(className),
    style
  };
}
