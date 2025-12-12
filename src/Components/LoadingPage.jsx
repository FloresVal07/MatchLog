import { useEffect, useState } from "react";

const LoadingDots = ({ text = "Loading", interval = 500 }) => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDots(prev => (prev + 1) % 4); // 0 → 1 → 2 → 3 → 0
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  return <span>{text + ".".repeat(dots)}</span>;
};

const LoadingPage = ({text = "Loading", interval = 500}) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    color: 'white'
  }}>
    <LoadingDots text={text} interval={interval}  />
  </div>
);

export default LoadingPage;
