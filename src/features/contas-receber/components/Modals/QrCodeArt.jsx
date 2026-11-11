import { useMemo } from 'react';
import { createRng } from '../../data/seed';

const N = 25;
const inFinder = (x, y) => [[0, 0], [N - 7, 0], [0, N - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
const finderOn = (x, y) => {
  const [fx, fy] = [[0, 0], [N - 7, 0], [0, N - 7]].find(([ax, ay]) => x >= ax && x < ax + 7 && y >= ay && y < ay + 7);
  const dx = x - fx; const dy = y - fy;
  return dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4);
};

/** QR Code ilustrativo (NÃO escaneável) — gerado a partir de uma semente. */
export function QrCodeArt({ seed, size = 168 }) {
  const cells = useMemo(() => {
    const rng = createRng(Number(String(seed).replace(/\D/g, '')) || 7);
    const out = [];
    for (let y = 0; y < N; y += 1) for (let x = 0; x < N; x += 1) {
      if (inFinder(x, y) ? finderOn(x, y) : rng.chance(0.48)) out.push([x, y]);
    }
    return out;
  }, [seed]);
  return (
    <svg viewBox={`0 0 ${N} ${N}`} width={size} height={size} role="img" aria-label="QR Code ilustrativo" className="rounded-lg bg-white p-2">
      {cells.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill="#0f172a" />)}
    </svg>
  );
}
