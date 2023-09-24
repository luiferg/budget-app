export const GithubIcon = ({
  className = 'w-4 h-4',
  color = '#ffffff',
}: {
  className: string
  color: string
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke={color}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
  </svg>
)

export const GoogleIcon = ({
  className = 'w-4 h-4',
  color = '#ffffff',
}: {
  className: string
  color: string
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    width={24}
    height={24}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke={color}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M17.788 5.108a9 9 0 1 0 3.212 6.892h-8'></path>
  </svg>
)
