import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Headphones,
  Mic,
  BookOpen,
  PenLine,
  Languages,
  ClipboardCheck,
  Home
} from "lucide-react";

function Sidebar() {
  const menu = [
    {
      name: "Trang chủ",
      path: "/",
      icon: Home
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Listening",
      path: "/listening",
      icon: Headphones
    },
    {
      name: "Speaking",
      path: "/speaking",
      icon: Mic
    },
    {
      name: "Reading",
      path: "/reading",
      icon: BookOpen
    },
    {
      name: "Writing",
      path: "/writing",
      icon: PenLine
    },
    {
      name: "Từ vựng",
      path: "/vocabulary",
      icon: Languages
    },
    {
      name: "Quiz",
      path: "/quiz",
      icon: ClipboardCheck
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        HỌC TẬP
      </div>

      <nav>
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-box">
          <div className="upgrade-icon">⭐</div>

          <h4>Học tập hiệu quả hơn</h4>

          <p>
            Hoàn thành bài học mỗi ngày để
            nâng cao trình độ tiếng Anh.
          </p>

          <button>
            Bắt đầu học
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;