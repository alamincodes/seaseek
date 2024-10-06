import Logo from "@/assets/images/Logo.svg";
import { Container } from "./Container";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
export default function Navbar() {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Quiz",
      path: "/quiz",
    },
    {
      id: 3,
      name: "Mapbox",
      path: "/mapbox",
    },
    {
      id: 1,
      name: "Courses",
      path: "/courses",
    },
    {
      id: 1,
      name: "Virtual Trip",
      path: "/virtual-trip",
    },
  ];
  return (
    <nav className="bg-[#1f4980] w-full sticky top-0 z-50">
      <Container className="flex items-center justify-between h-[100px]">
        <Link to="/">
          <div>
            <img src={Logo} alt="" className="h-16" />
          </div>
        </Link>
        <div>
          <ul className="flex items-center space-x-6 text-white font-secondary">
            {menu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn("text-white", {
                      "cursor-pointer p-2 px-4 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)] hover:bg-themeColor  bg-themeColor text-white rounded-lg select-none":
                        isActive,
                    })
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
