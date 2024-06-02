import { useSpring, animated } from "react-spring";
import './component.css';

export default function AnimatedNumbers({ figure }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: figure,
    delay: 200,
    config: { mass: 100, tension: 2000, friction: 1000 },
  });
  return (
    <div className='animated-Numbers'>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div><p>+</p>
    </div>
  );
}
