import { 
  bgBlue0, bgBlue4 } from "../../helpers/common-styles";

export default function H1(props){
  return <h1 className='h1'
    style={{
      width: '100%',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 80,
      background: `-webkit-linear-gradient(${bgBlue0}, ${bgBlue4})`,
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      // color: globalHeaderColor,
    }}>
    {props.text}
  </h1>
}