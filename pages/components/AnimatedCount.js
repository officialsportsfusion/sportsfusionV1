import CountUp from 'react-countup';

const AnimatedCount = ({ targetCount }) => {
  return (
    <CountUp start={0} end={targetCount} duration={2} />
  );
};

export default AnimatedCount;
