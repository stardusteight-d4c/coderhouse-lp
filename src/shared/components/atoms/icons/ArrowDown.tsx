interface ArrowDownProps extends React.HTMLAttributes<SVGElement> {
  color?: string
}

export const ArrowDown: React.FC<ArrowDownProps> = ({
  color,
}: ArrowDownProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke={color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M10.237 3.117v13.75M4.612 11.242l5.625 5.625 5.625-5.625"
      ></path>
    </svg>
  )
}
