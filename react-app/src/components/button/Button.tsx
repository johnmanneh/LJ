import React from 'react';

interface ButtonProps{
    label: string;
    btnType: string;
    btnClick: () =>void;

}
function Button({label,btnType,btnClick}:ButtonProps) {
    return (
        <>
        <button className={btnType} type="button" onClick ={btnClick}>{label}</button>
        </>
    )
}

export default Button;
