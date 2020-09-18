export default function LoadingHeader(props){

  const message = typeof props.message === 'string' ?
    props.message : 'loading';

  const loadingHeaderCss = {
    width: '100%',
    fontSize: '24px',
    textAlign: 'center',
    marginTop: '100px',
    color: '#ddd',
    fontStyle: 'italic',
    minHeight: '60vh',
  };
  return <h2 className='loading-header'
    style={loadingHeaderCss}>
    ...{message}...
  </h2>
};