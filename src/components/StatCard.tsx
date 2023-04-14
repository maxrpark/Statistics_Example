import { CardData } from "../utils/statsData";

const StatCard: React.FC<CardData> = ({ totalUpdates, name, details = [] }) => {
  return (
    <div className='card-wrapper'>
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
    </div>
  );
};

export default StatCard;
