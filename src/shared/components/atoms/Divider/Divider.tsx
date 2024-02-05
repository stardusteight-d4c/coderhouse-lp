interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return (
    <div
      className={"w-full h-0 border-t border-dark-secondary " + props.className}
    />
  )
}
