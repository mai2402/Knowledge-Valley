import { useState } from "react";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  title?: string;
  email?: string;
  items?: string[];
  placeholder?: string;
}

export default function DropDownMenu({
  trigger,
  title,
  items,
  email,
  placeholder,
}: DropdownMenuProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let timeout: NodeJS.Timeout;

  return (
    <div
      onMouseEnter={() => {
        clearTimeout(timeout);
        setIsOpenMenu(true);
      }}
      onMouseLeave={() => {
        timeout = setTimeout(() => setIsOpenMenu(false), 100);
      }}
      className="relative hover:cursor-pointer"
    >
      {trigger}

      {isOpenMenu && (
        <div className="top-full mt-2 right-0 absolute w-48 bg-white text-black rounded-lg shadow-lg border border-gray-200">
          <div className="px-4 py-3 text-sm font-semibold bg-gray-100 rounded-t-lg">
            <Link to="/login" className="font-bold text-gray-700 hover:text-teal-500">
              {title}
            </Link>
            {email && <p className="text-gray-500">{email}</p>}
          </div>

          <div className="bg-white">
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <Link
                  to={`/${item}`}
                  key={index}
                  className="hover:text-teal-500 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </Link>
              ))
            ) : (
              <p className="px-4 py-2 text-sm text-gray-500">{placeholder}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



