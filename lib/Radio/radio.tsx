import React from 'react';
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import './radio.scss'

const prefix = addPrefixAndscopedClassMarker("yui-radio");

const Radio = () => {
  return (
    <label className={prefix('wrapper')}>
      <span className={prefix('')}>
        <span className={prefix('inner')}></span>
        <input type="radio" className={prefix('input')} />
      </span>
      <span className={prefix('label')}>Radio</span>
    </label>
  )
}

export default Radio
