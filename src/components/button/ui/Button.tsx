import * as React from 'react';
import { classCombine } from '../../util/util';
import { IButtonProps } from '../types';

const BUTTON_CLASS_ROOT = 'sapFpaAppBuildingUiButton';
const BUTTON_CONTAINER = BUTTON_CLASS_ROOT + "Container";

const EMPHASIZED_STYLE = { backgroundColor: '#418ac7', color: '#ffffff', textShadow: '0 0 0.125rem rgba(0,0,0,0.5)',
borderColor: 'transparent', borderRadius: '0.2rem', paddding: '0, 0.4375rem', cursor: 'pointer', height: '1.625rem',
minWidth: '2.0rem', fontSize : '0.875rem', outline: 'none', margin: '0.2rem' };
const UNEMPHASIZED_STYLE = { backgroundColor: 'transparent', color: '#cae4fb', textShadow: '0 0 0.125rem rgba(0,0,0,0.5)',
borderColor: 'transparent', borderRadius: '0.2rem', paddding: '0, 0.4375rem', cursor: 'pointer', height: '1.625rem',
minWidth: '2.0rem', fontSize : '0.875rem', outline: 'none', margin: '0.2rem' };
const EMPHASIZED_DISABLED_STYLE = { backgroundColor: '#5496cd', color: '#ffffff', textShadow: '0 0 0.125rem rgba(0,0,0,0.5)',
borderColor: 'transparent', borderRadius: '0.2rem', paddding: '0, 0.4375rem', cursor: 'not-allowed', height: '1.625rem',
minWidth: '2.0rem', fontSize : '0.875rem', outline: 'none', margin: '0.2rem', opacity: '0.5' };
const UNEMPHASIZED_DISABLED_STYLE = { backgroundColor: 'transparent', color: '#cae4fb', textShadow: '0 0 0.125rem rgba(0,0,0,0.5)',
borderColor: 'transparent', borderRadius: '0.2rem', paddding: '0, 0.4375rem', cursor: 'not-allowed', height: '1.625rem',
minWidth: '2.0rem', fontSize : '0.875rem', outline: 'none', margin: '0.2rem', opacity: '0.5' };

export const Button: React.SFC<IButtonProps> = (props: IButtonProps) => {
    const { value,
        text,
        emphasized,
        disabled,
        onClick} = props;
    let typeClassName = "";

    const buttonType = "Default";
    if (buttonType) {
        typeClassName = BUTTON_CLASS_ROOT + buttonType;
    }

    const isUnstyle = false;

    const buttonClass = classCombine({
        [`${BUTTON_CLASS_ROOT}`]: !isUnstyle,
        [`${typeClassName}`]: !isUnstyle
        });

    const buttonContainerClass = classCombine({
        [`${BUTTON_CONTAINER}`]: true
    });

    let style = emphasized ? (disabled ? EMPHASIZED_DISABLED_STYLE : EMPHASIZED_STYLE) 
                            : (disabled ? UNEMPHASIZED_DISABLED_STYLE : UNEMPHASIZED_STYLE);
    
    return (
        <div className={buttonContainerClass}
            style={ {display: 'inline-block'} }>
            <button id={value}
                style={style}
                className={buttonClass}
                onClick={onClick}>
                <span>{text}</span>
            </button>
        </div>
    );
};