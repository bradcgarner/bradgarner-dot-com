export default function AuthorTag(props){
  return <h4 className='h4'
    style={{
			width: '100%',
			fontSize: 14,
      fontStyle: 'italic',
      marginBottom: 10,
			marginTop: 10,
			opacity: 0.6,
    }}>
    {props.text}
  </h4>
}