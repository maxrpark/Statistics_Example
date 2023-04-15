import Logo from "./icons/Logo";
import { navLinks } from "../utils/links";
import { NavLink } from "react-router-dom";
import HeaderWrapper from "../assets/wrappers/HeaderWrapper";
const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div className='top-navbar section-center'>
        <Logo />
        <ul className='top-nav-links'>
          <li>English</li>
          <li className='special'>프로필요청</li>
          <li>로그아웃</li>
        </ul>
      </div>
      <nav className='nav-main'>
        <ul className='nav-main-links section-center'>
          {navLinks.map((item) => {
            return (
              <NavLink className='nav-link' key={item.id} to={item.url}>
                {item.name}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
