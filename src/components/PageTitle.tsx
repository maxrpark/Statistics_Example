import { useNavigate } from "react-router-dom";
import ArrowBack from "./icons/ArrowBack";

const PageTitle: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className='page-title'>
      <button className='btn-go-back'>
        <ArrowBack /> <p>뒤로가기</p>
      </button>
      <h2>CinPle_react &gt; 개발자 2</h2>
    </section>
  );
};

export default PageTitle;
