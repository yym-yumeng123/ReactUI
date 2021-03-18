import React, { FC } from "react";
import PropTypes from "prop-types";
import {addPrefixAndscopedClassMarker} from "../utils/classes";
import './switch.scss'

const prefix = addPrefixAndscopedClassMarker('yui-switch')

interface SwitchProps {
  checked?: boolean;
}

const Switch: FC<SwitchProps> = props => {
  const { checked } = props;
  return (
    <button className={prefix('wrap')}>
      <span className={prefix('square')}></span>
    </button>
  );
};

Switch.displayName = "switch";
Switch.defaultProps = {
  checked: true
};
Switch.propTypes = {
  checked: PropTypes.bool
};

export default Switch;
