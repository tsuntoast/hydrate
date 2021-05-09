import React from 'react';
import { TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerIcon = props => {
   return (
      <TouchableOpacity onPress={props.onPress}>
         <FontAwesomeIcon icon={faBars} size={20} />
      </TouchableOpacity>
   );
}

HamburgerIcon.propTypes = { onPress: PropTypes.func.isRequired };

export default HamburgerIcon;