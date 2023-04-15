import styled from "styled-components";

const Wrapper = styled.footer`
  margin-top: 200px;

  .nav-footer {
    background: var(--primary-back);
  }
  .nav-footer-links {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .nav-footer-link {
    color: var(--primary-white);
  }
  .footer-bottom {
    background: var(--primary-green);
  }
  .footer-content {
    padding: 51px 0 102px 0;
  }

  .company-information {
    margin-top: 0.8rem;
    padding-left: 5px;
  }
  .company-information p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 5px 0;
  }

  .company-information p:last-child {
    margin-top: 40px;
  }
`;
export default Wrapper;
