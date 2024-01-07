export function SocialMediaButton(props){
    const onClickHandle = () =>{
        window.open(props.Link, '_blank');
    };
    const buttonStyle = {
        backgroundColor: '#4169E1', // Set your desired background color
        color: '#FFFFFF',
        textAlign: 'center',
        marginLeft: '20px'    
      };
    return(
        <button onClick={onClickHandle} style={buttonStyle}>{props.Name}</button>
    )
}