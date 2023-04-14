import StatCard from "./StatCard";
import { statsSections } from "../utils/statsData";

const StatSection: React.FC = () => {
  return (
    <section className='stats-wrapper'>
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
    </section>
  );
};

export default StatSection;
