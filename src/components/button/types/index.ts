import * as React from 'react';

export interface ButtonStyles {
    backgroundStyle?: React.CSSProperties;
    borderStyle?: React.CSSProperties;
    contentFontStyle?: React.CSSProperties;
}

export interface ButtonProps {
    text?: string;
    tooltipText?: string;
}

export interface IButtonWidgetPayload extends ButtonStyles, ButtonProps {
}

export interface IButtonState extends IButtonWidgetPayload {
    isDesignMode?: boolean;
    onClick?: () => void;
}

export interface IButtonProps extends IButtonState {
}

export interface ButtonWidgetUiResult extends IButtonProps {
}

export const BUTTON_STORE_ENTITY_TYPE = 'button';
