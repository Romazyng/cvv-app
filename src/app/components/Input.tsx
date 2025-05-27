import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

type InputProps = {
  id: any,
  type: any,
  placeholder: string,
  data: any,
  handleChange: any,
  setter: any,
}

export const Input = ({id = uuidv4(), type, placeholder, data, handleChange, setter}: InputProps) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <input
      className={`w-full text-xl py-2 px-4 rounded-lg`}
      type={type}
      id={id}
      value={data === undefined ? inputValue : data}
      placeholder={placeholder}
      onChange={(e) => (
        handleChange(e, setter === undefined ? setInputValue : setter) 
      )}
    />
  )
}
