// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[]
  };
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: {
    items: [
      {
        title: 'Dashboard',
        icon: 'la-file',
        page: '/changelog',
        badge: { type: 'badge-danger', value: '1.1' }
      },
      {
        title: 'Templates',
        icon: 'la-television',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Horizontal',
              page: 'null'
            },
            {
              title: 'Vertical',
              page: 'null'
            },
          ]
        }
      },
      {
        title: 'Manual',
        icon: 'la-support',
        page: '/manual',
        isExternalLink: true
      },
      {
        title: 'Home',
        icon: 'la-text-height',
        page: '/landing',
        isExternalLink: false,
      }
    ]
  },
  vertical_menu: {
    items: [
      {
        title: 'Dashboard',
        icon: 'la-file',
        page: '/dashboard'
      },
      {
        title: 'Work Queue',
        icon: 'la-television',
        page: 'null',
        badge: { type: 'badge-danger', value: '1' },
        submenu: {
          items: [
            {
              title: 'New',
              page: 'null'
            },
            {
              title: 'Pending',
              page: 'null',
              badge: { type: 'badge-danger', value: '1' }
            },
            {
              title: 'Out for Repossession',
              page: 'null',
              badge: { type: 'badge-danger', value: '1' }
            },
            {
              title: 'Repossessed',
              page: 'null',
              badge: { type: 'badge-danger', value: '1' }
            },
          ]
        }
      },
      { section: 'SUPPORT', icon: 'la-ellipsis-h' },
      {
        title: 'Manual',
        icon: 'la-support',
        page: '/manual',
        isExternalLink: true
      },
      {
        title: 'Home',
        icon: 'la-text-height',
        page: '/landing',
        isExternalLink: false,
      }
    ]
  }

};





