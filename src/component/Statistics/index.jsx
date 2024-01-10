import { statisticData } from '@/constants';
import Info from './Info';
import './style.css';

const Statistics = () => {
  return (
    <section className="statistics bg-[#F2F8FF] mt-12 py-10">
      <div className="statistic-container">
        <div className="flex align-middle gap-20">
          {statisticData.map((el) => (
           <Info key={el.id} {...el}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
