import * as React from 'react';
import { IFooterProps } from '../types';
import { Button } from '../../button'
import { StyleConstant } from '../types/constants';
import '../style/button.css'

export const Footer: React.SFC<IFooterProps> = (props: IFooterProps) => {
    const { buttons,
        isDesignMode } = props;

    const loop = (): JSX.Element[] => {
        return buttons.map((button) => {
            let backgroundStyle = button.emphasized ? StyleConstant.EMPHASIZED_BACKGROUND_STYLE : StyleConstant.UNEMPHASIZED_BACKGROUND_STYLE;
            let contentFontStyle = button.emphasized ? StyleConstant.EMPHASIZED_CONTENT_FONT_STYLE : StyleConstant.UNEMPHASIZED_CONTENT_FONT_STYLE;
            let borderStyle = button.disabled ? StyleConstant.DISABLED_BORDER_STYLE : StyleConstant.BORDER_STYLE;
            
            return <Button
                text={button.text}
                backgroundStyle={backgroundStyle}
                contentFontStyle={contentFontStyle}
                borderStyle={borderStyle}
                isDesignMode={isDesignMode === undefined ? true : isDesignMode} />;
        });
    };

    return (
        <div className='footer'>
            {loop()}
        </div>
    );
}