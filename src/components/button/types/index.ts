export interface ButtonProps {
    value: string;
    text: string;
    emphasized: boolean;
    disabled: boolean;
}

export interface ButtonGroupProps {
    buttons: Array<IButtonProps>;
}

export interface IButtonWidgetPayload extends ButtonProps {
}

export interface IButtonGroupWidgetPayload extends ButtonGroupProps {
}

export interface IButtonState extends IButtonWidgetPayload {
    onClick?: () => void;
}

export interface IButtonGroupState extends IButtonGroupWidgetPayload {
}

export interface IButtonProps extends IButtonState {
}

export interface IButtonGroupProps extends IButtonGroupState {
}

export interface ButtonWidgetUiResult extends IButtonProps {
}

export interface ButtonGroupWidgetUiResult extends IButtonGroupProps {
}

export const BUTTON_STORE_ENTITY_TYPE = 'button';

export const BUTTON_GROUP_STORE_ENTITY_TYPE = 'buttonGroup';
