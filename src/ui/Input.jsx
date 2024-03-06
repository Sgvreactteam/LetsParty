import React from 'react'

const Input = ({ children, placeholder, type, classes, state, onChange }) => {

    const base = " outline-none p-4 border rounded-md border-borde placeholder:text-placeholderText my-2 "
    const styles = {
      small: base + "sm:w-[45%] w-[100%]",
      large: base + "sm:w-[95%] w-[100%]"
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