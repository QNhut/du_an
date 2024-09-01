import clsx from 'clsx'
import { memo } from 'react';

import style from './Button.module.scss'

function Button({ primary, success, danger, children}) {
    
    const classes = clsx(style.btn, {
        [style.primary]: primary,
        [style.success]: success,
        [style.danger]: danger,
    })

    // console.log("11");
    

    return (
        <button className = {classes}>
            {children}
        </button>
    )
}

export default memo(Button) //Tránh gọi lại component không cần thiết