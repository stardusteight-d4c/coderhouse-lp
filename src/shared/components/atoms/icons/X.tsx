interface XProps extends React.HTMLAttributes<SVGElement> {
  color?: string
  size?: string
}

export const X: React.FC<XProps> = ({ color, className, size }: XProps) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? "19"}
        height={size ?? "18"}
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
    </div>
  )
}
