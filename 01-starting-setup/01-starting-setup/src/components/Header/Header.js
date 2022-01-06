import './Header.css'
const Header=(props)=>{
    return(
        <div className="title-container">
            <h2>{props.title}</h2>
        </div>
    );
}
export default Header;