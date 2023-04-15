import styled from "styled-components";

const HeaderWrapper = styled.header`
  .top-navbar,
  .nav-main-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .top-navbar {
    height: 145px;
  }
  .top-nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.625rem;
  }
  .top-nav-links li {
    cursor: pointer;
  }

  .nav-main {
    background: var(--gray-1);
    width: 100%;
  }

  .nav-main-links {
    justify-content: flex-start;
    gap: 3rem;
  }

  .nav-link.active {
    height: 100%;
    padding: 0.8rem;

    background: var(--primary-back);
    color: var(--primary-white);
  }
`;

export default HeaderWrapper;
