import React, { ChangeEvent, ChangeEventHandler, FC, InputHTMLAttributes, useState } from 'react';
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import './radio.scss'

const prefix = addPrefixAndscopedClassMarker("yui-radio");


interface RadioProps {
  checked?: boolean
}

const Radio: FC<RadioProps> = props => {
  const { checked = false } = props
  const [defaultChecked, setDefaultChecked] = useState(checked);

  const chengeStatus = (e: any) => {
    const { checked } = e.target
    setDefaultChecked(checked)
  }

  return (
    <label className={prefix('wrapper')}>
      <span className={prefix('')}>
        <span className={prefix({'inner': true, checked: defaultChecked})}></span>
        <input type="radio" checked={defaultChecked} onChange={chengeStatus} className={prefix('input')} />
      </span>
      <span className={prefix('label')}>Radio</span>
    </label>
  )
}

export default Radio
