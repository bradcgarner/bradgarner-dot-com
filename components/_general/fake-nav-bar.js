export default function FakeNavBar(){

  const fullCss = {
    width: '100%',
    height: 60,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    justifyContent: 'space-between',
  };

  const leftCss = {
    width: '50%',
    height: '100%',
    background: 'linear-gradient(165deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 50%)',
  };

  const rightCss = {
    width: '50%',
    height: '100%',
    background: 'linear-gradient(205deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 50%)',
  };

  return <div className='fake-nav-bar'
    style={fullCss}>
      <div style={leftCss}> {` `}</div>
      <div style={rightCss}>{` `}</div>
    </div>
	
};