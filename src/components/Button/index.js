import clsx from 'clsx'

import style from './Button.module.scss'

function Button({ primary, success, danger, children}) {
    
    const classes = clsx(style.btn, {
        [style.primary]: primary,
        [style.success]: success,
        [style.danger]: danger,
    })

    return (
        <button className = {classes}>
            {children}
        </button>
    )
}

export default Button