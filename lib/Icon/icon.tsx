import React from "react";
import PropTypes from "prop-types";
import "./importAllIcons";
import { classes } from "../utils/classes";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  color?: string;
  size?: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  color,
  size,
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
      className={classes("yui-icon", className)}
      {...restProps}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

Icon.displayName = "Icon";
Icon.defaultProps = {};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Icon;
