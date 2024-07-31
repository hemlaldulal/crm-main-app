import "./navbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";

export interface NavbarProps {
  userName: string;
  userIcon: string;
  notificationCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  userName,
  userIcon,
  notificationCount,
}) => {
  return (
    <div className="navbar">
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <div className="notification">
          <IoMdNotificationsOutline />
          {notificationCount > 0 && (
            <span className="badge">{notificationCount}</span>
          )}
        </div>
        <div className="user">
          <img src={userIcon} alt="User Icon" className="user-icon" />
          <span className="user-name">{userName}</span>
        </div>
      </div>
    </div>
  );
};
