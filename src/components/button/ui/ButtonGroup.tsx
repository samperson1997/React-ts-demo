import * as React from 'react';
import { Button } from './Button'
import { IButtonGroupProps } from '../types';

export const ButtonGroup: React.SFC<IButtonGroupProps> = (props: IButtonGroupProps) => {
    const { buttons } = props;

    function buildButtons(){
        let list = new Array
        for (const button of buttons) {
            list.push(<Button value={button.value} text={button.text} 
                emphasized={button.emphasized} disabled={button.disabled}/>)
        }
        
        return list
    }
    
    return (
        <div>
            {buildButtons()}
        </div>
    );
};