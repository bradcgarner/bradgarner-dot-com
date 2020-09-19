import React               from 'react';
import content             from '../helpers/content';
import { getMeta }         from '../helpers/meta';
import { fireNewPageView } from '../helpers/browser/tag-manager';
import Frame               from '../components/_general/_frame';
import Modal               from '../components/_general/modal';
import PrivacyMain      from '../components/privacy/_main';
import { fontsToLoadArr }     from '../helpers/common-styles';

export default class PrivacyPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal:        false,
      modalContent: null,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){
    fireNewPageView();
  }

  toggleModal(modalContent) {
    this.setState({
      modal: !this.state.modal,
      modalContent,
    });
  }

  render(){
    const c = content.privacy || {} ;

    const meta = getMeta('privacy');

    const modal = !this.state.modal ? null :
    <Modal 
      toggleModal={this.toggleModal}
      content={this.state.modalContent}/> ;

    return <Frame 
      hideHeader={false} 
      meta={meta} 
      fontsToLoadArr={c.fontsToLoadArr ? c.fontsToLoadArr : fontsToLoadArr} >
      <section className='section'>
        <PrivacyMain toggleModal={this.toggleModal}/>
        <style jsx>{`
          .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
          }
        `}</style>
      </section>
      {modal}
    </Frame>
  }
}