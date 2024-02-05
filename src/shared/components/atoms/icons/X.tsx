interface XProps extends React.HTMLAttributes<SVGElement> {
  color?: string
}

export const X: React.FC<XProps> = ({ color }: XProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      fill="none"
      viewBox="0 0 19 18"
    >
      <path
        stroke={color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.125"
        d="M14.55 3.93L4.425 14.055M14.55 14.055L4.425 3.93"
      ></path>
    </svg>
  )
}
