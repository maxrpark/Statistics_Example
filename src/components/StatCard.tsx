import { CardData } from "../utils/statsData";
import StatCardWrapper from "../assets/wrappers/StatCardWrapper";

const StatCard: React.FC<CardData> = ({ totalUpdates, name, details = [] }) => {
  return (
    <StatCardWrapper>
      <p className='card-title'>{name}</p>
      <div className='card-main'>
        <div className='card-center'>
          <p>Total Updates</p>
          <p>{totalUpdates}</p>
        </div>
        <div className='card-footer'>
          {details.map((item, idx) => {
            return (
              <div key={idx} className='card-details'>
                <p>{item.label}</p>
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StatCardWrapper>
  );
};

export default StatCard;
