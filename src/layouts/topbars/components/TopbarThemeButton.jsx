import { Sun, Moon } from "lucide-react";
import IconButton from "../../../shared/components/actions/IconButton";
import { useTheme } from "../../../shared/contexts/ThemeContext";

export default function TopbarThemeButton() {
  const { tema, alternarTema } = useTheme();

  return (
    <IconButton icon={tema === "dark" ? Sun : Moon} onClick={alternarTema} />
  );
}
