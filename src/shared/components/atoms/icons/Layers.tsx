interface LayersProps extends React.HTMLAttributes<SVGElement> {
  color?: string
  size?: string
}

export const Layers: React.FC<LayersProps> = ({ color, size }: LayersProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? "24"}
      height={size ?? "24"}
      fill="none"
      stroke={color ?? "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12.83 2.18a2 2 0 00-1.66 0L2.6 6.08a1 1 0 000 1.83l8.58 3.91a2 2 0 001.66 0l8.58-3.9a1 1 0 000-1.83zM22 17.65l-9.17 4.16a2 2 0 01-1.66 0L2 17.65M22 12.65l-9.17 4.16a2 2 0 01-1.66 0L2 12.65"></path>
    </svg>
  )
}
