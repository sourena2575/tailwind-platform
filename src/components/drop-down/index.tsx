import { FC, memo } from "react";
import { useToggle } from "hooks";
import { ICChevronDown, ICChevronRight } from "icons";
import { classNames } from "utils/classes";

export const DropDown: FC<IDropdown> = memo(
  ({ className, label, children, active = false, icon }) => {
    const { open, toggle } = useToggle(active);

    return (
      <div className="col-full p-4" id="drop-down">
        <button
          className={classNames(
            "row-between focus:outline-none hover:animate-pulse text-white ",
            className
          )}
          onClick={() => toggle()}
          role="button"
        >
          <div className="row-items-center">
            {icon && icon()}
            <span className="text-lg text-gray-400">{label}</span>
          </div>

          {open ? (
            <ICChevronDown className="w-3 h-3" role="close" id="close" />
          ) : (
            <ICChevronRight className="w-3 h-3 " />
          )}
        </button>
        <div
          className={classNames(
            "w-full  rounded",
            open ? " h-auto min-h-10" : "h-0"
          )}
        >
          {open && (
            <div className="flex flex-col pt-2 pl-4" slot="children">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);
