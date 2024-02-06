interface TriangleProps extends React.HTMLAttributes<SVGElement> {
  color?: string
}

export const Triangle: React.FC<TriangleProps> = ({ color, className }: TriangleProps) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="7"
        fill="none"
        viewBox="0 0 10 7"
      >
        <g clipPath="url(#clip0_260_239)">
          <path fill={color ?? "currentColor"} d="M0 7l10-7H0v7z"></path>
        </g>
        <defs>
          <clipPath id="clip0_260_239">
            <path fill={color ?? "currentColor"} d="M0 0H10V7H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
