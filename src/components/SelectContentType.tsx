import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Twitter, Instagram, Linkedin } from "lucide-react";
const SelectContentType = ({
  contentType,
  setContentType,
  contentTypes,
}:{
  contentType: string;
  setContentType: (value: string) => void;
  contentTypes: { value: string; label: string }[];
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-300">
        Content Type
      </label>
      <Select onValueChange={setContentType} defaultValue={contentType}>
        <SelectTrigger className="w-full bg-gray-700 border-none rounded-xl">
          <SelectValue placeholder="Select content type" />
        </SelectTrigger>
        <SelectContent>
          {contentTypes.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              <div className="flex items-center">
                {type.value === "twitter" && (
                  <Twitter className="mr-2 h-4 w-4 text-blue-400" />
                )}
                {type.value === "instagram" && (
                  <Instagram className="mr-2 h-4 w-4 text-pink-400" />
                )}
                {type.value === "linkedin" && (
                  <Linkedin className="mr-2 h-4 w-4 text-blue-600" />
                )}
                {type.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectContentType;
