import Dropdown from "../../../../shared/components/ui/Dropdown";
import { PER_PAGE_OPTIONS } from "../../constants/filterOptions";

export default function PerPageSelect({ perPage, onChange }) {
  return (
    <Dropdown
      value={`${perPage} por página`}
      options={PER_PAGE_OPTIONS}
      onChange={(label) => onChange(Number(label.split(" ")[0]))}
    />
  );
}
