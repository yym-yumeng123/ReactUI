import React from "react";
import PropTypes from "prop-types";
import "./importAllIcons";
import "./icon.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-icon");

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  color?: string;
  size?: string;
  spin?: boolean;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  color,
  size,
  spin,
  ...restProps
}) => {
  const styles = () => {
    let style: any = {};
    if (color) {
      style.fill = color;
    }
    if (size) {
      style.fontSize = `${size}px`;
    }
    return style;
  };
  return (
    <svg
      style={styles()}
      className={mergeClass({ "": true, spin: !!spin }, { extra: className })}
      {...restProps}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

Icon.displayName = "Icon";
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Icon;
