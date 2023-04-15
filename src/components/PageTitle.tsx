// import { useNavigate } from "react-router-dom";
import ArrowBack from "./icons/ArrowBack";
import styled from "styled-components";

const PageTitle: React.FC = () => {
  // const navigate = useNavigate();
  return (
    <Wrapper className='page-title'>
      <button className='btn-go-back'>
        <ArrowBack /> <p>뒤로가기</p>
      </button>
      <h2>CinPle_react &gt; 개발자 2</h2>
    </Wrapper>
  );
};

export default PageTitle;

const Wrapper = styled.section`
  margin-top: 65px;
  .btn-go-back {
    margin-bottom: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: none;
  }
  .btn-go-back p {
    margin-top: 0.2rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  .page-title h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;
