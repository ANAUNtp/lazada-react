import './Search.css'
import logo from "./Image/logo.jfif"
import cart from "./Image/cart.png"
import serach from "./Image/serach.png"
import newuser from "./Image/Newuser.jpg"


function Search(){
    return(
        <div className="Topbar">
            <div className="TopbarControl">
                <img className="logo" src={logo}></img>
                <div className="Serachbar">
                    <input className="Serachtext" type="text" placeholder="Search in Lazada" width="50%"></input>
                    <img className="serach" src={serach}></img>
                    <img className="cart" src={cart}></img>
                </div>
                <img className="newuser" src={newuser}></img>
            </div>
        </div>
    );
}

export default Search;