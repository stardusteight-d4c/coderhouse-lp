interface MenuBarProps extends React.HTMLAttributes<SVGElement> {
  color?: string
}

export const MenuBar: React.FC<MenuBarProps> = ({ color }: MenuBarProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      fill="none"
      viewBox="0 0 33 32"
    >
      <path
        stroke={color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.487 15.992h22M5.487 7.992h22M5.487 23.992h22"
      ></path>
    </svg>
  )
}
