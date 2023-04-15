import StatCard from "./StatCard";
import { statsSections } from "../utils/statsData";
import styled from "styled-components";

const StatSection: React.FC = () => {
  return (
    <Wrapper>
      {statsSections.map((section) => {
        return (
          <div key={section.id} className='single-stat-section'>
            <p className='stat-section-title'>{section.title}</p>
            <div className='cards-wrapper'>
              {section.cardData.map((card) => {
                return <StatCard key={card.id} {...card} />;
              })}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default StatSection;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: fit-content;
  margin-top: 20px;

  .single-stat-section {
    border: 1px solid #e2e2e2;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }

  .stat-section-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    padding: 21px;
  }

  .cards-wrapper {
    display: flex;
  }
  .cards-wrapper .card-wrapper:nth-child(2) {
    border-left: 1px solid #e2e2e2;
  }
`;
