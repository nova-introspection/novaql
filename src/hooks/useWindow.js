import { useState, useEffect } from 'react';

export default () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const resize = () => {
    const { innerHeight, innerWidth } = window;
    if (width !== innerWidth) setWidth(innerWidth);
    if (height !== innerHeight) setHeight(innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return [width, height];
};
