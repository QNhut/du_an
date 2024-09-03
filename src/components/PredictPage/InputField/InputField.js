import clsx from "clsx";
import style from './inputField.module.css'

function InputField({ label, id, value, placeholder, min, max, onChange }) {
    return (
      <div className="row mb-4">
        <div className="col-md-5 col-sm-4 col-lg-4">
          <label htmlFor={id} className="pt-lg-2">
            {label}
          </label>
        </div>
        <div className="col-md-7 col-sm-8 col-lg-8">
          <input
            id={id}
            type="number"
            className={clsx('form-control', (id.slice(0, 1) === 'P' && style.inputColorPrelab) || (id.slice(0, 1) === 'I' && style.inputColorInlab))}
            placeholder={placeholder}
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            required
          />
        </div>
      </div>
    );
  }

export default InputField