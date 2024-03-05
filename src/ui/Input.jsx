import React from 'react'

const Input = ({ children, placeholder, type, classes, state, onChange }) => {

    const base = " outline-none p-4 border rounded-md border-grayBorder placeholder:text-grayText my-2 "
    const styles = {
      small: base + "w-[380px]"
    }

    const className = styles[classes];

    const handleChange = () => {
      if(onChange) {
        onChange();
      }
    }

  return (
    <input onChange={handleChange}  placeholder={placeholder} type={type} className={className}>
      {children}
    </input>
  )
}

export default Input