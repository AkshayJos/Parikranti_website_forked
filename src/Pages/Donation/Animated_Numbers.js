import { useSpring, animated } from "react-spring";

export default function Animated_Numbers({ figure }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: figure,
    delay: 200,
    config: { mass: 100, tension: 2000, friction: 1000 },
  });
  return (
    <div style={{color : 'red',fontSize : '1.5rem', display : 'flex',  justifyContent : 'center', }}>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div><p>+</p>
    </div>
  );
}
