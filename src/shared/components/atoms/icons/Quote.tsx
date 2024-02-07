interface QuoteProps extends React.HTMLAttributes<SVGElement> {}

export const Quote: React.FC<QuoteProps> = ({ className }: QuoteProps) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="30"
        fill="none"
        viewBox="0 0 38 30"
      >
        <g clipPath="url(#clip0_260_446)">
          <g clipPath="url(#clip1_260_446)">
            <path
              stroke="url(#paint0_linear_260_446)"
              strokeWidth="0.712"
              d="M30.244 10.044c.201-.15.33-.406.33-.691v-7.41a.903.903 0 00-.137-.484c-.238-.374-.686-.45-1.008-.209l-8.041 6.017c-.2.15-.33.407-.33.692v20.1c0 .486.357.83.738.83h14.86c.38 0 .738-.344.738-.83V13.274c0-.487-.357-.831-.738-.831h-9.617l.856-.642 2.35-1.758zm0 0l.214.286M7.194 11.802l-.857.642h9.617c.381 0 .738.344.738.83v14.784c0 .487-.357.831-.738.831H1.094c-.38 0-.738-.344-.738-.83v-20.1c0-.285.13-.542.33-.692l8.04-6.017c.324-.242.771-.165 1.01.21.088.139.137.307.137.482v7.41c0 .286-.13.542-.33.692l-2.35 1.758z"
            ></path>
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_260_446"
            x1="18.82"
            x2="18.949"
            y1="0.755"
            y2="29.245"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F4FF80"></stop>
            <stop offset="1" stopColor="#26501F" stopOpacity="0"></stop>
          </linearGradient>
          <clipPath id="clip0_260_446">
            <path fill="#fff" d="M0 0H37.75V30H0z"></path>
          </clipPath>
          <clipPath id="clip1_260_446">
            <path
              fill="#fff"
              d="M0 0H37.75V28.491H0z"
              transform="translate(0 .755)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
