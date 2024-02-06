interface ClockProps extends React.HTMLAttributes<SVGElement> {
  color?: string
}

export const Clock: React.FC<ClockProps> = ({ color }: ClockProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <g clipPath="url(#clip0_260_225)">
        <g clipPath="url(#clip1_260_225)">
          <g clipPath="url(#clip2_260_225)">
            <path
              fill={color ?? "currentColor"}
              d="M7.5 3.5a.5.5 0 00-1 0h1zM7 7h-.5a.5.5 0 00.5.5V7zm3.5.5a.5.5 0 000-1v1zm-3.5 6A6.5 6.5 0 0013.5 7h-1A5.5 5.5 0 017 12.5v1zM13.5 7A6.5 6.5 0 007 .5v1A5.5 5.5 0 0112.5 7h1zM7 .5A6.5 6.5 0 00.5 7h1A5.5 5.5 0 017 1.5v-1zM.5 7A6.5 6.5 0 007 13.5v-1A5.5 5.5 0 011.5 7h-1zm6-3.5V7h1V3.5h-1zm.5 4h3.5v-1H7v1z"
            ></path>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_260_225">
          <path fill={color ?? "currentColor"} d="M0 0H14V14H0z"></path>
        </clipPath>
        <clipPath id="clip1_260_225">
          <path fill={color ?? "currentColor"} d="M0 0H14V14H0z"></path>
        </clipPath>
        <clipPath id="clip2_260_225">
          <path fill={color ?? "currentColor"} d="M0 0H14V14H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
