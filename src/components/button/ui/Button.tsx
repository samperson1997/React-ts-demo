import * as React from 'react';
import { classCombine } from '../../util/util';
import { IButtonProps } from '../types';

const BUTTON_CLASS_ROOT = 'sapFpaAppBuildingUiButton';
const BUTTON_CONTAINER = BUTTON_CLASS_ROOT + "Container";
const DT = '-designTime';
export const Button: React.SFC<IButtonProps> = (props: IButtonProps) => {
    //name, designTime are also items
    const { text,
        tooltipText,
        contentFontStyle,
        backgroundStyle,
        borderStyle,
        isDesignMode,
        onClick} = props;
    let typeClassName = "";
    //style (buttonType) will be added in future
    const buttonType = "Default";
    if (buttonType) {
        typeClassName = BUTTON_CLASS_ROOT + buttonType;
    }

    const isUnstyle = false;

    const buttonClass = classCombine({
        [`${BUTTON_CLASS_ROOT}`]: !isUnstyle,
        [`${typeClassName}`]: !isUnstyle,
        [`${BUTTON_CLASS_ROOT}${DT}`]: isDesignMode
    });

    const buttonContainerClass = classCombine({
        [`${BUTTON_CONTAINER}`]: true,
        [`${BUTTON_CONTAINER}${DT}`]: isDesignMode
    });

    let style = { ...contentFontStyle, ...borderStyle };
    if (!isUnstyle) {
        style = {...style, ...backgroundStyle};
    }

    return (
        <div className={buttonContainerClass}>
            <button title={tooltipText}
                style={style}
                className={buttonClass}
                onClick={onClick}
                disabled={isDesignMode}>
                <div>{text}</div>
            </button>
        </div>
    );
};
