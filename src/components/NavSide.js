import { NavLink } from "react-router-dom";

export const NavSide = (props) => {
    const {children} = props;
  return (
    <NavLink  {...props} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">{children}</NavLink>
  )
}
