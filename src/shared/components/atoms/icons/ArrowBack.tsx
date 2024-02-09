interface ArrowBackProps extends React.HTMLAttributes<SVGElement> {
  color?: string
  size?: string
}

export const ArrowBack: React.FC<ArrowBackProps> = ({
  color,
  className,
  size,
}: ArrowBackProps) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? "24"}
        height={size ?? "24"}
        fill="none"
        stroke={color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-move-left"
        viewBox="0 0 24 24"
      >
        <path d="M6 8l-4 4 4 4M2 12h20"></path>
      </svg>
    </div>
  )
}
