import React from 'react';
import Navbar from '../navbar';
import { SideNavCompact } from "@pantheon-systems/pds-toolkit-react"
import getOmniItems from './getOmniItems';
import { findSubMenuItemsToUse, getOmniSidebarActiveSection, turnItemsIntoLinks, simplerTurnItemsIntoLinks } from './helpers.js';

const OmniSidebarNav = ({
  activePage,
  fallbackItems = null,
  fallbackTitle = '',
  submenuPathToUse = '',
}) => {
  const menuItems = [getOmniSidebarActiveSection({ activePage })];
  const OmniItems = getOmniItems();

  // If the caller is asking for a specific submenu, use that directly.
  if (submenuPathToUse.length > 0) {
    const submenuItems = [findSubMenuItemsToUse(submenuPathToUse, OmniItems)];
    const submenuLinks = turnItemsIntoLinks(submenuItems, activePage);
    return (
      <SideNavCompact
        headingText={submenuLinks[0].linkContent}
        menuItems={submenuLinks[0].links}
      />
    );
  }
  // @todo, checking the 0 property is a hack, need to fix this.
  else if (menuItems[0]) {
    const OmniLinks = simplerTurnItemsIntoLinks(menuItems[0], activePage);
    return (
      <SideNavCompact
        headingText={OmniLinks.linkContent}
        menuItems={OmniLinks.links}
      />
    );
  } else if (fallbackItems && fallbackItems.length > 0) {
    return (
      <Navbar
        title={fallbackTitle}
        activePage={activePage}
        items={fallbackItems}
      />
    );
  } else {
    return <div></div>;
  }
};

export default OmniSidebarNav;
