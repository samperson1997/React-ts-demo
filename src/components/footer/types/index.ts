export interface IButtonProps {
    id: string;
    text: string;
    emphasized: boolean;
    disabled: boolean;
}

export interface IFooterProps {
    buttons: Array<IButtonProps>;
    isDesignMode ?: boolean;
}