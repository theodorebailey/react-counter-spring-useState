import React, {useState} from 'react';

import { useSpring, animated } from '@react-spring/web';
 
function Example() {
  const [isExpanded, setExpanded] = useState(false);
 
  const springProps = useSpring({
    height: isExpanded ? '200px' : '100px',
    backgroundColor: isExpanded ? 'red' : 'blue',
  });
 
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };
 
  return (
    <div>
      <h2>Animated Box</h2>
      <animated.div
        style={{ ...springProps, width: '200px', borderRadius: '8px' }}
        onClick={toggleExpand}
      />
    </div>
  );
}
 
export default Example;
