import {    
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { cuisineList } from "@/config/restaurante-config";
import CuisineCheckbox from "./CuisineCheckBox";

const CuisinesSection = () => {
    const { control } = useFormContext();
  
    return (
      <div className="space-y-2">
        <div>
          <h2 className="text-2xl font-bold">Types of Cuisine</h2>
          <FormDescription>
          What cuisines does your restaurant offer?        
          </FormDescription>
        </div>
        <FormField
          control={control}
          name="cuisines"
          render={({ field }) => (
            <FormItem>
              <div className="grid md:grid-cols-5 gap-1">
                {cuisineList.map((cuisineItem, index) => (
                  <CuisineCheckbox 
                    key={cuisineItem + index} 
                    cuisine={cuisineItem} 
                    field={field} 
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
export default CuisinesSection;
