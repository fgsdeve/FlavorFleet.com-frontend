import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name 
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value || ""} 
                placeholder="E.g., Margherita Pizza"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Price ($)
              <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value || ""} 
                placeholder="E.g., 12.99"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-emerald-700 max-h-fit mt-5"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
