import './Footer.css'
const Footer=(props)=>{
    return(
        <div className="title-container">
            {props.expenses_count===0?<h2>No Expenses For The Selected Year</h2>:<h2>{props.title}{props.expenses_count}</h2>}
        </div>
    );
}
export default Footer;