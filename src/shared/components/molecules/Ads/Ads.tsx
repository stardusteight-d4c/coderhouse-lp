interface AdsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Ads: React.FC<AdsProps> = ({
  children,
  className,
  ...props
}: AdsProps) => {
  return (
    <div
      className={"flex items-center justify-center py-3 " + className}
      {...props}
    >
      {children}
    </div>
  )
}
