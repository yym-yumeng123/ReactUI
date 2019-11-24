import React from 'react'
import './importAllIcons'
interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <div>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </div>
  )
}

export default Icon
