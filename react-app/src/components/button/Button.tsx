import React from 'react';

interface ButtonProps{
    label: string;
    btnClass: string;
    btnClick: () =>void;

}
function Button({label,btnClass,btnClick}:ButtonProps) {
    return (
        <>
        <button className={btnClass} type="button" onClick ={btnClick}>{label}</button>
        </>
    )
}

export default Button;
