import React from "react";
import { connect } from "frontity";
import { NavItemSt } from './styles';
import Link from "../link";


const NavItem = ({ state, key, name, link, isCurrent }) => {
  const indSubmenu = String(name).indexOf(":");
  const mainName = (indSubmenu == -1 ? name : String(name).substring(0, indSubmenu + 1));
  const subBloc = (indSubmenu == -1 ? "" : String(name).substring(indSubmenu));
  const subNames = (indSubmenu == -1 ? "" : String(subBloc).split(';'));
  const subLinks = (indSubmenu == -1 ? "" : String(link).split(';'));
  console.log('test' + mainName + ' subNames ' + subNames + ' sublinks ' + subLinks);
  return (
    <NavItemSt>
      <Link link={link} aria-current={isCurrent ? "page" : undefined}>
      &#124; {mainName} 
      </Link>
    </NavItemSt>
  )
}


export default connect(NavItem);