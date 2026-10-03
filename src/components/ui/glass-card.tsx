// component.tsx
import * as React from "react";
import { ChevronDown } from "lucide-react";

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group h-auto w-full [perspective:1000px] ${className}`}
        {...props}
      >
        <div className="relative h-full rounded-[50px] bg-gradient-to-br from-zinc-900 to-black shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,30deg)]">
          <div className="absolute inset-2 rounded-[55px] border-b border-l border-white/20 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>
          <div className="absolute [transform:translate3d(0,0,26px)] px-7 pt-[100px] pb-0 w-full">
            {props.children}
            </div>

          
            <div className="flex w-2/5 cursor-pointer items-center justify-end transition-all duration-200 ease-in-out hover:[transform:translate3d(0,0,10px)]">
              <button className="border-none bg-none text-xs font-bold text-white">
                View more
              </button>
              <ChevronDown className="h-4 w-4 stroke-white" strokeWidth={3} />
            </div>
          </div>
          
        </div>
      
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
