import React, { useState } from 'react';
import Dialog from './dialog'

export default function () {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <button onClick={() => setvisible(!visible)}>按钮</button>
      <Dialog visible={visible}>
        <em>
          hi
        </em>
      </Dialog>
    </>
  )
}
