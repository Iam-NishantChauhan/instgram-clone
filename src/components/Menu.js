import '../styles/Menu.scss';
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/like.svg";
import ProfileIcon from "./ProfileIcon";
import image from "../images/profile.jpeg";


function Menu (){
    return(
        <div className="menu" >
        <Home className="icon"/>
        <Inbox className="icon"/>
        <Explore className="icon"/>
        <Notifications className="icon"/>
        <ProfileIcon  iconSize="small" image={image}/>
        </div>
    );
}

export default Menu;