import React from 'react'

const FormInput = ({defaultValue,label,name,type}) => {
  return (
    <div className="form-control ">
    <label className="label">
      <span className="label-text">{label}</span>
    
    </label>
    <input type={type} name={name} defaultValue={defaultValue} className="input input-bordered w-full max-w-xs" />
    
  </div>
  )
}

export default FormInput