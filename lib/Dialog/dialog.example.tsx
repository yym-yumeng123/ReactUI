import React, { useState } from 'react';
import Dialog from './dialog'

export default function () {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <button onClick={() => setvisible(!visible)}>按钮</button>
      <Dialog visible={visible}>
        <strong>
          hi
        </strong>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>
    </>
  )
}
