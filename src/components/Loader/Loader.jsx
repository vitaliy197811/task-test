import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color=""
      wrapperStyle={{}}
      wrapperClass="#272F28"
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#FFFFFF"
      innerCircleColor="#272F28"
      middleCircleColor=""
    />
  );
};
