import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type NativeSelectProps = React.ComponentProps<"select">;

function NativeSelect({ className, ...props }: NativeSelectProps) {
  return (
    <div className="relative w-full">
      <select
        className={cn(
          "h-9 w-full appearance-none rounded-full border border-white/15 bg-[#070510] px-4 py-2 pr-9 text-xs text-white transition-colors outline-none focus:border-purple-500 cursor-pointer",
          className
        )}
        {...props}
      />
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      className={cn("bg-[#0f0c1d] text-white py-1", className)}
      {...props}
    />
  );
}

export { NativeSelect, NativeSelectOption };
