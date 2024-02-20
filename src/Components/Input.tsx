import React, { useId } from 'react'

const Input = (props) => {
  const id = useId()
  return (
    <div className=' flex flex-col gap-2 text-gray-800 ' >
    <label htmlFor={id}> {props.text} </label>
    <input className=' p-2 rounded-md bg-gray-200 ' id={id} type="text" {...props} />
    </div>
  )
}

export default Input