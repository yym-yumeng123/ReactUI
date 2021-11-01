import React from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import './card.scss'

const mergeClass = addPrefixAndMergeClass('yui-card')

const Card = () => {
  return (
    <div className={mergeClass('')}>
      <header className={mergeClass('header')}>
        我是头部
      </header>
      <main className={mergeClass('content')}>
        我是身体
      </main>
    </div>
  )
}

export default Card
