import {
  ArrowUp, ArrowDown, SlidersHorizontal, AlertTriangle,
  ArrowLeftRight, Undo2, Redo2, ClipboardList,
} from 'lucide-react';
import { MOVEMENT_TYPE_CONFIG } from '../constants/movementTypes';

const ICONS = {
  ArrowUp, ArrowDown, SlidersHorizontal, AlertTriangle,
  ArrowLeftRight, Undo2, Redo2, ClipboardList,
};

export function getMovementTypeConfig(tipo) {
  const config = MOVEMENT_TYPE_CONFIG[tipo];
  if (!config) return null;
  return { ...config, IconComponent: ICONS[config.icon] };
}
