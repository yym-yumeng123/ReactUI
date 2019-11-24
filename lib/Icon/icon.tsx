import React from 'react'
import '../../icons/wechat.svg'
interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <div>
      <svg>
        <use xlinkHref='#wechat'></use>
      </svg>
    </div>
  )
}

export default Icon
