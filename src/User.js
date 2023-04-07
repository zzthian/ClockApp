

function User(props) {
    return (
        <div> 
            <h2>{props.userName}</h2>
            <p>app is version : {props.appVer}</p>
        </div>
    );
}
export default User;