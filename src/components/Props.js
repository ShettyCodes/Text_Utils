import React from 'react'

const Props = (x) => {
  return (
    <div>
         {x.op}
        <button onClick={x.func}>
            Change
        </button>
    </div>
  )
}

export default Props