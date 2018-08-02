import * as React from 'react';
import { Footer } from './Footer';
import '../style/index.css';
import registerServiceWorker from '../../../registerServiceWorker';

export default class Demo extends React.Component {

  public render() {
    return (
      <div>
        <div className='button-area'>
          <Footer buttons={[{
            id: "dialog_btn1",
            text: "Ok",
            emphasized: true,
            disabled: false
          }, {
            id: "dialog_btn2",
            text: "Cancel",
            emphasized: false,
            disabled: false
          }, {
            id: "dialog_btn3",
            text: "upload",
            emphasized: true,
            disabled: true
          }, {
            id: "dialog_btn4",
            text: "download",
            emphasized: false,
            disabled: true
          }]
          } />
        </div>
        {/* <div className='add-area'>
          <select className='setting-type' ref='settingType'>
            <option value='emphasized'>Emphasized Button</option>
            <option value='unemphasized'>Unemphasized Button</option>
            <option value='emphasized-disabled'>Emphasized Disabled Button</option>
            <option value='unemphasized-disabled'>Unemphasized Disabled Button</option>
          </select>

          <input ref='settingText' className='setting-text' type='text' placeholder='text...' />
          <Button text='add' backgroundStyle={{ backgroundColor: '#5496cd' }}
            contentFontStyle={{ color: '#cae4fb', textShadow: '0 0 0.125rem rgba(0,0,0,0.5)' }}
            borderStyle={{ borderColor: 'transparent', borderRadius: '0.2rem' }} />
        </div> */}
      </div>
    );
  }
}

registerServiceWorker();