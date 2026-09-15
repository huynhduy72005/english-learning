import { Link } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">E</div>

        <div>
          <strong>English<span>Up</span></strong>
          <small>Learn English Better</small>
        </div>
      </Link>

      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Tìm kiếm bài học..."
        />
      </div>

      <div className="navbar-actions">
        <button className="icon-button">
          <Bell size={20} />
        </button>

        <div className="user-profile">
          <div className="avatar">DU</div>

          <div>
            <strong>Học viên</strong>
            <small>Beginner</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;