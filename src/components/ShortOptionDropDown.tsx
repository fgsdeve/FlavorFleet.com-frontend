import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SORT_OPTION = [
  {
    label: "Best match",
    value: "bestMatch",
  },
  {
    label: "Delivery price",
    value: "DeliveryPrice",
  },
  {
    label: "Estimated delivery time",
    value: "estimatedDeliveryTime",
  },
];

const ShortOptionDropDown = ({ onChange, sortOption }: Props) => {
  const selectedSortLabel =
    SORT_OPTION.find((option) => option.value === sortOption)?.label ||
    SORT_OPTION[0].label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-auto"
          aria-label={`Sort by ${sortOption}`}
        >
          Sort by: {selectedSortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="custom-dropdown-content">
        {SORT_OPTION.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShortOptionDropDown;
