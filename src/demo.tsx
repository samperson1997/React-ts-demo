import * as React from 'react';
import { Button, ButtonGroup } from './components/button';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { IButtonProps } from './components/button/types';

let buttonsProps = Array<IButtonProps>()

export default class Demo extends React.Component {
  addButton() {
    
    let settingText = this.refs.settingText as HTMLInputElement
    let settingType = this.refs.settingType as HTMLInputElement
    buttonsProps.push({ text: settingText.value, value: 'button' + buttonsProps.length, 
      emphasized: settingType.value == 'emphasized' || settingType.value == 'emphasized-disabled',
      disabled: settingType.value == 'emphasized-disabled' || settingType.value == 'unemphasized-disabled' })
    this.forceUpdate();

    settingText.value = '';
  }

  public render() {

    return (
      <div>
        {/* <div className='sample-button-area'>
          <Button text='Confirm' value='button1' emphasized={true} disabled={false} />
          <Button text='Cancel' value='button2' emphasized={false} disabled={false} />
          <Button text='upload' value='button3' emphasized={true} disabled={true} />
          <Button text='Delete' value='button4' emphasized={false} disabled={true} />
        </div> */}
        <div className='button-area'>
          <ButtonGroup buttons={buttonsProps} />
        </div>
        <div className='add-area'>
          <select className='setting-type' ref='settingType'>
            <option value='emphasized'>Emphasized Button</option>
            <option value='unemphasized'>Unemphasized Button</option>
            <option value='emphasized-disabled'>Emphasized Disabled Button</option>
            <option value='unemphasized-disabled'>Unemphasized Disabled Button</option>
          </select>

          <input ref='settingText' className='setting-text' type='text' placeholder='text...'/>
          <Button text='add' value='add-button' emphasized={true} disabled={false} onClick={() => this.addButton()} />
        </div>
      </div>
    );
  }
}

registerServiceWorker();