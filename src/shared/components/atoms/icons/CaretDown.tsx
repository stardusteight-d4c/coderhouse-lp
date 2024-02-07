interface CaretDownProps extends React.HTMLAttributes<SVGElement> {
  color?: string
  size?: string
}

export const CaretDown: React.FC<CaretDownProps> = ({
  color,
  size,
  className,
}: CaretDownProps) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? "17"}
        height={size ?? "16"}
        fill="none"
        viewBox="0 0 17 16"
      >
        <path
          stroke={color ?? "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.157 5.992l-5 5-5-5"
        ></path>
      </svg>
    </div>
  )
}
