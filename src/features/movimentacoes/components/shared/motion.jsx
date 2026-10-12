// Shim leve que substitui a dependência de "framer-motion" por CSS puro,
// para que o projeto precise apenas de "react" instalado.
// Suporta a API usada neste projeto: motion.div/button/tr/li/p/section/span/aside,
// AnimatePresence (passthrough) e as props initial/animate/whileHover/whileTap
// (convertidas em transições CSS simples em vez de física de mola).
import { forwardRef, useState } from 'react';

const MOTION_ONLY_PROPS = [
  'initial', 'animate', 'exit', 'transition', 'whileHover', 'whileTap',
  'layout', 'layoutId', 'variants',
];

function stripMotionProps(props) {
  const rest = {};
  Object.keys(props).forEach((key) => {
    if (!MOTION_ONLY_PROPS.includes(key)) rest[key] = props[key];
  });
  return rest;
}

function createMotionComponent(Tag) {
  return forwardRef(function MotionTag(props, ref) {
    const { whileHover, whileTap, className = '', style = {}, ...rest } = props;
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);
    const clean = stripMotionProps(rest);

    const transforms = [];
    if (pressed && whileTap?.scale !== undefined) transforms.push(`scale(${whileTap.scale})`);
    else if (hovered && whileHover?.y !== undefined) transforms.push(`translateY(${whileHover.y}px)`);
    else if (hovered && whileHover?.scale !== undefined) transforms.push(`scale(${whileHover.scale})`);

    return (
      <Tag
        ref={ref}
        {...clean}
        className={`motion-fade-in transition-transform duration-150 ease-out ${className}`}
        style={{ ...style, transform: transforms.length ? transforms.join(' ') : style.transform }}
        onMouseEnter={(e) => { setHovered(true); props.onMouseEnter?.(e); }}
        onMouseLeave={(e) => { setHovered(false); setPressed(false); props.onMouseLeave?.(e); }}
        onMouseDown={(e) => { setPressed(true); props.onMouseDown?.(e); }}
        onMouseUp={(e) => { setPressed(false); props.onMouseUp?.(e); }}
      />
    );
  });
}

export const motion = {
  div: createMotionComponent('div'),
  button: createMotionComponent('button'),
  tr: createMotionComponent('tr'),
  li: createMotionComponent('li'),
  p: createMotionComponent('p'),
  section: createMotionComponent('section'),
  span: createMotionComponent('span'),
  aside: createMotionComponent('aside'),
};

// Sem framer-motion não há orquestração real de saída (exit); os componentes
// somem junto com a desmontagem do React. Para o objetivo deste preview
// (ver a página funcionando com "npm install react") isso é suficiente.
export function AnimatePresence({ children }) {
  return <>{children}</>;
}
