export interface SocialLink {
  href: string;
  target: string;
  ariaLabel: string;
  color: string;
  icon: React.ReactElement;
}

export interface NavLink {
  name: string;
  href: string;
  activeStyle: string;
  hoverStyle: string;
}
