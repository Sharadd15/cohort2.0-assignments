import { SocialMediaButton } from './SocialMediaButton';
export function BusinessCard(props) {
    const divStyle = {
        width: '400px', // Set your desired width
        height: '400px', // Set your desired height
        backgroundColor: '#fff', // Set your desired background color
        marginLeft: '20px',
        padding: '10px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Set your desired shadow properties
      };
      let gid =0;
    return (
        <div style={divStyle} id={props.Id}>
            <h1 >{props.Name}</h1>
            <p>{props.Description}</p>
            <h3>Interests</h3>
            {
                props.Interests.map(element => {
                    ++gid;
                    return(<p key={gid}>{element}</p>);
            })}
            <SocialMediaButton Name="Linkdin" Link={props.LinkdinLink}></SocialMediaButton>
            <SocialMediaButton Name="Twitter" Link={props.TwitterLink}></SocialMediaButton>
        </div>
    );
}

