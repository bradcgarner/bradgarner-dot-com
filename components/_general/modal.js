import { modalBackground } from '../../helpers/common-styles';
import { X } from 'something-rather-iconic';

export default function Modal(props) {

  const allowCloseModal = 
    typeof props.allowCloseModal === 'boolean' ?
    props.allowCloseModal : 
    true;

  const toggleModal = 
    allowCloseModal &&
    typeof props.toggleModal === 'function' ? 
    props.toggleModal : ()=>{} ;

  const backgroundColor = props.backgroundColor ? props.backgroundColor : modalBackground;
  
  const navBarCss = {
    width: '100%',
    height: 60,
    position: 'absolute',
    display: 'flex',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 9999,
  };

  return <div className='modal'>
    <div className='background'
      onClick={()=>toggleModal()}>
      <div className='close'>
        {
          allowCloseModal ?
            <X style={{width: 20, height: 20}}/> :
            null 
        }
      </div>
    </div>
    {props.content}
    <div className='fake-nav-bar'
      style={navBarCss}>{` `}</div>
    <style jsx>{`
      .modal,
      .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1900;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
      .background {
        background-color: ${backgroundColor};
      }
      .close {
        height: 40px;
        width: 40px;
        position: fixed;
        top: 90px;
        right: 12px;
        color: white;
      }
      .close:hover {
        color: #c12b5b;
      }
    `}</style>
  </div>
}