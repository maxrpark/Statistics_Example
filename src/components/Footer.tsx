import { NavLink } from "react-router-dom";
import { footerLinks, socialLink } from "../utils/links";

const Footer: React.FC = () => {
  return (
    <footer>
      <nav className='nav-footer'>
        <ul className='nav-footer-links section-center'>
          {footerLinks.map((item) => {
            return (
              <NavLink className='nav-footer-link' key={item.id} to={item.url}>
                {item.name}
              </NavLink>
            );
          })}
        </ul>
      </nav>
      <div className='footer-bottom'>
        <div className='footer-content section-center'>
          <ul className='social-links-wrapper'>
            {socialLink.map((item) => {
              return (
                <NavLink className='social-link' key={item.id} to={item.url}>
                  <item.component />
                </NavLink>
              );
            })}
          </ul>
          <div className='company-information'>
            <p>
              Room 5-115, 83 Uisadang-daero, Yeongdeungpo-gu, Seoul, South Korea
            </p>
            <p>https://www.easymation.com</p>
            <p>admin@eazymation.com</p>
            <p>https://goo.gl/maps/wiapC9RtusiTss39</p>
            <p>Copyright © 2023 Dev2Job. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
