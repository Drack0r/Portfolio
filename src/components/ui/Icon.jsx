import { icons } from "./icons";

function Icon({ name, className, size = 60 }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} width={size} height={size} />;
}

export default Icon;
