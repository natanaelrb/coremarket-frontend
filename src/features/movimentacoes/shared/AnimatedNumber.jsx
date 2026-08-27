import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { formatNumber } from "../utils/formatQuantity";

// Anima a contagem de um número inteiro do zero até o valor final.
export default function AnimatedNumber({ value, className = '' }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 90, damping: 20 });
  const display = useTransform(spring, (v) => formatNumber(Math.round(v)));
  const [text, setText] = useState('0');

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsubscribe = display.on('change', setText);
    return unsubscribe;
  }, [display]);

  return <motion.span className={className}>{text}</motion.span>;
}
