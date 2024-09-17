import clsx from "clsx";
import { forwardRef, useImperativeHandle, useRef } from "react";

// import style from './InputField.module.css'

function InputField({ label, id, value, placeholder, min, max, onChange, name }, ref) {

  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus()
    }
  }))

  return (
    <div className="row mb-4">
      <div className="col-md-5 col-sm-4 col-lg-4 text-end">
        <label htmlFor={id} className="pt-lg-2">
          {label}
        </label>
      </div>
      <div className="col-md-7 col-sm-8 col-lg-8">
        <input
          id={id}
          type="number"
          className={clsx('form-control')}
          placeholder={placeholder}
          value={value}
          name={name}
          min={min}
          max={max}
          onChange={onChange}
          required
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default forwardRef(InputField)