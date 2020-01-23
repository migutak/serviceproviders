// Default theme settings configurations

export const ThemeSettingsConfig = {
  colorTheme: 'semi-light', // light, semi-light, semi-dark, dark
  layout: {
    style: 'vertical', // style: 'vertical', horizontal,
    pattern: 'fixed' // fixed, boxed, static
  },
  menuColor: 'menu-light', // Vertical: [menu-dark, menu-light] , Horizontal: [navbar-dark, navbar-light]
  navigation: 'menu-collapsible', // menu-collapsible, menu-accordation
  menu: 'expand', // collapse, expand
  header: 'fix', // fix, static
  footer: 'static', // fix, static
  customizer: 'on', // on ,off
  headerIcons: {
    maximize: 'off', // on, off
    search: 'on', // on, off
    internationalization: 'off', // on, off
    notification: 'on', // on, off
    email: 'off' // on, off
  },
  brand: {
    brand_name: 'E-Collect',
    logo: {
      type: 'internal', // internal, url
      value: 'assets/custom/images/coop.jpg' // recommended location for custom images
      // type:'url',
      // value:'http://evolvision.com/wp-content/uploads/2018/01/envelope4-green.png'
    },
  },
  defaultTitleSuffix: 'E-Collect'
};
