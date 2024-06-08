export interface IconsProps {
  className?: string;
}
export type IconName = keyof typeof ICONS;

export const ICONS = {
  dashboard: (props: IconsProps) => (
    <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#clip0_1_311)'>
        <path
          d='M7.33333 7.33333H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L7.33333 0V7.33333ZM1.33333 6H6V1.33333H2C1.82319 1.33333 1.65362 1.40357 1.5286 1.5286C1.40357 1.65362 1.33333 1.82319 1.33333 2V6Z'
          fill='currentColor'
        />
        <path
          d='M15.9999 7.33333H8.66656V0H13.9999C14.5303 0 15.039 0.210714 15.4141 0.585786C15.7892 0.960859 15.9999 1.46957 15.9999 2V7.33333ZM9.9999 6H14.6666V2C14.6666 1.82319 14.5963 1.65362 14.4713 1.5286C14.3463 1.40357 14.1767 1.33333 13.9999 1.33333H9.9999V6Z'
          fill='currentColor'
        />
        <path
          d='M7.33333 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14L0 8.66666H7.33333V16ZM1.33333 9.99999V14C1.33333 14.1768 1.40357 14.3464 1.5286 14.4714C1.65362 14.5964 1.82319 14.6666 2 14.6666H6V9.99999H1.33333Z'
          fill='currentColor'
        />
        <path
          d='M13.9999 16H8.66656V8.66666H15.9999V14C15.9999 14.5304 15.7892 15.0391 15.4141 15.4142C15.039 15.7893 14.5303 16 13.9999 16ZM9.9999 14.6666H13.9999C14.1767 14.6666 14.3463 14.5964 14.4713 14.4714C14.5963 14.3464 14.6666 14.1768 14.6666 14V9.99999H9.9999V14.6666Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_311'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  lagerverwaltung: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_785)'>
        <path
          d='M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 16H16V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0V0ZM14.6667 2V3.33333H10V1.33333H14C14.1768 1.33333 14.3464 1.40357 14.4714 1.5286C14.5964 1.65362 14.6667 1.82319 14.6667 2ZM7.33333 1.33333H8.66667V5.33333H7.33333V1.33333ZM2 1.33333H6V3.33333H1.33333V2C1.33333 1.82319 1.40357 1.65362 1.5286 1.5286C1.65362 1.40357 1.82319 1.33333 2 1.33333V1.33333ZM1.33333 14.6667V4.66667H6V6.66667H10V4.66667H14.6667V14.6667H1.33333ZM10 12H13.3333V13.3333H10V12Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_785'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  banking: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_741)'>
        <path
          d='M3.42691e-08 14.6667H16V16H3.42691e-08V14.6667ZM16 5.27265V6.66665H14V12V13.3333H2V12V6.66665H3.42691e-08V5.27265C-6.64697e-05 4.91334 0.0966633 4.56066 0.280022 4.25166C0.46338 3.94266 0.726596 3.68876 1.042 3.51665L7.042 0.243984C7.33572 0.0832237 7.66517 -0.0010376 8 -0.0010376C8.33483 -0.0010376 8.66428 0.0832237 8.958 0.243984L14.958 3.51665C15.2734 3.68876 15.5366 3.94266 15.72 4.25166C15.9033 4.56066 16.0001 4.91334 16 5.27265ZM3.33333 12H5.33333V6.66665H3.33333V12ZM6.66667 6.66665V12H9.33333V6.66665H6.66667ZM12.6667 6.66665H10.6667V12H12.6667V6.66665ZM14.6667 5.27265C14.6667 5.15288 14.6344 5.03532 14.5733 4.93232C14.5122 4.82932 14.4245 4.74469 14.3193 4.68732L8.31933 1.41465C8.22138 1.3612 8.11158 1.33319 8 1.33319C7.88842 1.33319 7.77862 1.3612 7.68067 1.41465L1.68067 4.68732C1.57553 4.74469 1.48779 4.82932 1.42667 4.93232C1.36555 5.03532 1.33331 5.15288 1.33333 5.27265V5.33332H14.6667V5.27265Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_741'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  telefonie: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_272)'>
        <path
          d='M9.4668 10.8407C7.52572 10.0188 5.98217 8.47164 5.1648 6.52867L7.43146 4.258L3.25813 0.0813333L1.14413 2.19467C0.777464 2.56343 0.487562 3.00124 0.291196 3.48277C0.0948312 3.9643 -0.00409881 4.47999 0.000130068 5C0.000130068 9.832 6.16813 16 11.0001 16C11.5201 16.0045 12.0358 15.9058 12.5172 15.7094C12.9987 15.513 13.4364 15.2229 13.8048 14.856L15.9188 12.742L11.7421 8.56533L9.4668 10.8407ZM12.8615 13.9133C12.6166 14.156 12.326 14.3476 12.0065 14.4769C11.6869 14.6063 11.3448 14.6708 11.0001 14.6667C6.8448 14.6667 1.33346 9.15533 1.33346 5C1.32954 4.65522 1.39411 4.31309 1.52342 3.99346C1.65274 3.67383 1.84423 3.38305 2.0868 3.138L3.25813 1.96667L5.54946 4.258L3.5928 6.21467L3.75613 6.624C4.23696 7.91021 4.98864 9.07804 5.96023 10.0484C6.93182 11.0187 8.10063 11.7688 9.38746 12.248L9.79146 12.402L11.7421 10.4507L14.0335 12.742L12.8615 13.9133ZM9.33346 1.33333V0C11.101 0.00194106 12.7955 0.704943 14.0454 1.95477C15.2952 3.20459 15.9982 4.89915 16.0001 6.66667H14.6668C14.6652 5.25267 14.1028 3.89703 13.1029 2.89718C12.1031 1.89733 10.7475 1.33492 9.33346 1.33333V1.33333ZM9.33346 4V2.66667C10.394 2.66773 11.4108 3.08949 12.1607 3.83941C12.9106 4.58933 13.3324 5.60613 13.3335 6.66667H12.0001C12.0001 5.95942 11.7192 5.28115 11.2191 4.78105C10.719 4.28095 10.0407 4 9.33346 4Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_272'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  accounting: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_275)'>
        <path
          d='M6 7.99997C6.79113 7.99997 7.56449 7.76538 8.22228 7.32585C8.88008 6.88632 9.39277 6.26161 9.69552 5.53071C9.99827 4.7998 10.0775 3.99553 9.92314 3.21961C9.7688 2.44369 9.38784 1.73095 8.82843 1.17154C8.26902 0.612134 7.55629 0.231171 6.78036 0.0768302C6.00444 -0.0775107 5.20017 0.00170263 4.46927 0.304453C3.73836 0.607204 3.11365 1.11989 2.67412 1.77769C2.2346 2.43549 2 3.20885 2 3.99997C2.00106 5.06051 2.42283 6.07731 3.17274 6.82723C3.92266 7.57715 4.93946 7.99891 6 7.99997ZM6 1.3333C6.52742 1.3333 7.04299 1.4897 7.48152 1.78272C7.92005 2.07574 8.26185 2.49221 8.46368 2.97948C8.66551 3.46675 8.71832 4.00293 8.61543 4.52021C8.51253 5.0375 8.25856 5.51265 7.88562 5.88559C7.51268 6.25853 7.03752 6.51251 6.52024 6.6154C6.00296 6.71829 5.46678 6.66548 4.97951 6.46365C4.49224 6.26182 4.07576 5.92002 3.78275 5.48149C3.48973 5.04296 3.33333 4.52739 3.33333 3.99997C3.33333 3.29273 3.61428 2.61445 4.11438 2.11435C4.61448 1.61426 5.29276 1.3333 6 1.3333V1.3333Z'
          fill='currentColor'
        />
        <path
          d='M13.9999 6.66626V4.66626H12.6666V6.66626H10.6666V7.99959H12.6666V9.99958H13.9999V7.99959H15.9999V6.66626H13.9999Z'
          fill='currentColor'
        />
        <path
          d='M8.69533 9.33374H3.30467C2.42854 9.3348 1.5886 9.68331 0.969084 10.3028C0.349568 10.9223 0.00105855 11.7623 0 12.6384L0 16.0004H1.33333V12.6384C1.33386 12.1157 1.54173 11.6146 1.91131 11.245C2.28089 10.8755 2.782 10.6676 3.30467 10.6671H8.69533C9.218 10.6676 9.71911 10.8755 10.0887 11.245C10.4583 11.6146 10.6661 12.1157 10.6667 12.6384V16.0004H12V12.6384C11.9989 11.7623 11.6504 10.9223 11.0309 10.3028C10.4114 9.68331 9.57146 9.3348 8.69533 9.33374V9.33374Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_275'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  verkauf: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_278)'>
        <path
          d='M16 6.66667L14.5333 0H1.46667L0.016 6.522L0 7.33333C0.0024178 7.97686 0.23945 8.59741 0.666667 9.07867V14C0.666667 14.5304 0.87738 15.0391 1.25245 15.4142C1.62753 15.7893 2.13623 16 2.66667 16H13.3333C13.8638 16 14.3725 15.7893 14.7475 15.4142C15.1226 15.0391 15.3333 14.5304 15.3333 14V9.07867C15.7606 8.59741 15.9976 7.97686 16 7.33333V6.66667ZM1.33333 6.73933L2.53333 1.33333H4.66667V4H6V1.33333H10V4H11.3333V1.33333H13.4667L14.6667 6.73933V7.33333C14.6667 7.68696 14.5262 8.02609 14.2761 8.27614C14.0261 8.52619 13.687 8.66667 13.3333 8.66667H12.6667C12.313 8.66667 11.9739 8.52619 11.7239 8.27614C11.4738 8.02609 11.3333 7.68696 11.3333 7.33333H10C10 7.68696 9.85952 8.02609 9.60948 8.27614C9.35943 8.52619 9.02029 8.66667 8.66667 8.66667H7.33333C6.97971 8.66667 6.64057 8.52619 6.39052 8.27614C6.14048 8.02609 6 7.68696 6 7.33333H4.66667C4.66667 7.68696 4.52619 8.02609 4.27614 8.27614C4.02609 8.52619 3.68696 8.66667 3.33333 8.66667H2.66667C2.31304 8.66667 1.97391 8.52619 1.72386 8.27614C1.47381 8.02609 1.33333 7.68696 1.33333 7.33333V6.73933ZM13.3333 14.6667H2.66667C2.48986 14.6667 2.32029 14.5964 2.19526 14.4714C2.07024 14.3464 2 14.1768 2 14V9.90533C2.21724 9.96537 2.4413 9.99718 2.66667 10H3.33333C3.71326 9.99877 4.08849 9.91587 4.43356 9.7569C4.77864 9.59794 5.0855 9.36663 5.33333 9.07867C5.58117 9.36663 5.88803 9.59794 6.23311 9.7569C6.57818 9.91587 6.95341 9.99877 7.33333 10H8.66667C9.04521 10.0002 9.41944 9.9196 9.76434 9.76359C10.1092 9.60758 10.4169 9.37975 10.6667 9.09533C10.9165 9.37975 11.2241 9.60758 11.569 9.76359C11.9139 9.9196 12.2881 10.0002 12.6667 10H13.3333C13.5587 9.99718 13.7828 9.96537 14 9.90533V14C14 14.1768 13.9298 14.3464 13.8047 14.4714C13.6797 14.5964 13.5101 14.6667 13.3333 14.6667Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_278'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  statistik: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_282)'>
        <path
          d='M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00888 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0ZM14.6327 7.33333H8.66667V1.36733C10.1959 1.52304 11.6245 2.20163 12.7115 3.28854C13.7984 4.37545 14.477 5.80411 14.6327 7.33333V7.33333ZM1.33334 8C1.33542 6.34797 1.95003 4.75539 3.0583 3.53025C4.16657 2.30512 5.68978 1.53447 7.33334 1.36733V8.276L12.216 13.1587C11.2399 13.9583 10.0568 14.4642 8.80429 14.6176C7.55183 14.771 6.28156 14.5654 5.14136 14.0249C4.00116 13.4845 3.03792 12.6312 2.36377 11.5646C1.68961 10.498 1.33227 9.26182 1.33334 8V8ZM13.1587 12.216L9.60934 8.66667H14.6327C14.5027 9.96939 13.9898 11.2044 13.1587 12.216Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_282'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  postOffice: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14.5057 3.82643L14.5214 3.86061L14.4905 3.8821L8.02572 8.3847L8 8.40262L7.97428 8.3847L1.50946 3.8821L1.47861 3.86061L1.49427 3.82643C1.5548 3.69428 1.6462 3.59128 1.76802 3.51875C1.88839 3.44708 2.02603 3.4058 2.17994 3.39405L2.17993 3.39392H2.18337H13.8166V3.39379L13.8201 3.39405C13.974 3.4058 14.1116 3.44708 14.232 3.51875C14.3538 3.59128 14.4452 3.69428 14.5057 3.82643ZM14.5244 5.51785L14.5951 5.46876V5.55481V12.8335C14.5951 13.0484 14.5193 13.2296 14.3679 13.3738C14.2177 13.517 14.034 13.5944 13.8191 13.6063L13.8191 13.6063H13.8166H2.18337V13.6064L2.18089 13.6063C1.96603 13.5944 1.78233 13.517 1.63207 13.3738C1.48067 13.2296 1.40489 13.0484 1.40489 12.8335V5.55481V5.46876L1.47557 5.51785L7.61547 9.78291C7.73315 9.85701 7.86101 9.89392 8 9.89392C8.139 9.89392 8.26686 9.85701 8.38453 9.78291L14.5244 5.51785ZM15.337 2.66661C14.9366 2.26379 14.4308 2.0563 13.8162 2.04512H2.18376C1.56921 2.0563 1.06341 2.26379 0.663047 2.66661C0.26237 3.06974 0.0562554 3.56898 0.045 4.16721V12.833C0.0562554 13.4313 0.26237 13.9305 0.663047 14.3336C1.06342 14.7365 1.56922 14.9439 2.18378 14.9551H13.8162C14.4308 14.9439 14.9366 14.7365 15.337 14.3336C15.7376 13.9305 15.9437 13.4313 15.955 12.833V4.16722C15.9437 3.56899 15.7376 3.06975 15.337 2.66661Z'
        fill='currentColor'
        stroke='white'
        strokeWidth='0.09'
      />
    </svg>
  ),
  administration: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_763)'>
        <path
          d='M10.0003 16H6.00026V13.658C5.3051 13.412 4.66123 13.04 4.10093 12.5607L2.07159 13.7333L0.0715942 10.2667L2.10026 9.09667C1.967 8.37163 1.967 7.62837 2.10026 6.90333L0.0715942 5.73333L2.07159 2.26667L4.10093 3.43933C4.66123 2.95995 5.3051 2.58796 6.00026 2.342V0H10.0003V2.342C10.6954 2.58796 11.3393 2.95995 11.8996 3.43933L13.9289 2.26667L15.9289 5.73333L13.9003 6.90333C14.0335 7.62837 14.0335 8.37163 13.9003 9.09667L15.9289 10.2667L13.9289 13.7333L11.8996 12.5613C11.3392 13.0405 10.6954 13.4122 10.0003 13.658V16ZM7.33359 14.6667H8.66693V12.6487L9.16759 12.5193C9.98894 12.3066 10.7365 11.8734 11.3296 11.2667L11.6916 10.898L13.4403 11.908L14.1069 10.7533L12.3603 9.74467L12.4976 9.24733C12.7234 8.42929 12.7234 7.56538 12.4976 6.74733L12.3603 6.25L14.1069 5.24133L13.4403 4.08667L11.6916 5.09933L11.3296 4.73333C10.7362 4.12756 9.98864 3.69535 9.16759 3.48333L8.66693 3.35133V1.33333H7.33359V3.35133L6.83293 3.48067C6.01159 3.69343 5.264 4.12659 4.67093 4.73333L4.30893 5.102L2.56026 4.08933L1.89359 5.244L3.64026 6.25267L3.50293 6.75C3.27717 7.56804 3.27717 8.43196 3.50293 9.25L3.64026 9.74733L1.89359 10.756L2.56026 11.9107L4.30893 10.9007L4.67093 11.2693C5.26432 11.8751 6.01188 12.3073 6.83293 12.5193L7.33359 12.6487V14.6667ZM8.00026 10.6667C7.47284 10.6667 6.95727 10.5103 6.51874 10.2173C6.08021 9.92424 5.73842 9.50776 5.53658 9.02049C5.33475 8.53322 5.28194 7.99704 5.38483 7.47976C5.48773 6.96248 5.7417 6.48732 6.11464 6.11438C6.48758 5.74144 6.96274 5.48747 7.48002 5.38457C7.9973 5.28168 8.53348 5.33449 9.02075 5.53632C9.50802 5.73815 9.9245 6.07995 10.2175 6.51848C10.5105 6.95701 10.6669 7.47258 10.6669 8C10.6669 8.70724 10.386 9.38552 9.88588 9.88562C9.38578 10.3857 8.7075 10.6667 8.00026 10.6667ZM8.00026 6.66667C7.73655 6.66667 7.47877 6.74487 7.2595 6.89137C7.04024 7.03788 6.86934 7.24612 6.76842 7.48976C6.6675 7.73339 6.6411 8.00148 6.69255 8.26012C6.74399 8.51876 6.87098 8.75634 7.05745 8.94281C7.24392 9.12928 7.4815 9.25627 7.74014 9.30771C7.99878 9.35916 8.26687 9.33276 8.51051 9.23184C8.75414 9.13092 8.96238 8.96003 9.10889 8.74076C9.2554 8.52149 9.33359 8.26371 9.33359 8C9.33359 7.64638 9.19312 7.30724 8.94307 7.05719C8.69302 6.80714 8.35388 6.66667 8.00026 6.66667Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_763'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  help: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_767)'>
        <path
          d='M15.2813 1.13336C15.0568 0.945176 14.7935 0.808883 14.5103 0.734207C14.227 0.659531 13.9308 0.648314 13.6427 0.701356L9.52267 1.45002C8.9331 1.55632 8.39663 1.85838 8 2.30736C7.60367 1.85764 7.06716 1.55486 6.47733 1.44802L2.35733 0.699356C2.06918 0.647031 1.77305 0.658628 1.48987 0.733328C1.20669 0.808028 0.943372 0.944008 0.718521 1.13166C0.49367 1.31931 0.312775 1.55405 0.188618 1.8193C0.0644604 2.08455 7.11635e-05 2.37382 0 2.66669L0 13.8894L8 15.3447L16 13.8894V2.66669C16 2.37404 15.9357 2.08496 15.8115 1.81997C15.6873 1.55498 15.5063 1.32057 15.2813 1.13336V1.13336ZM7.33333 13.8667L1.33333 12.7774V2.66669C1.33342 2.56908 1.35493 2.47268 1.39636 2.3843C1.43779 2.29592 1.49811 2.21772 1.57308 2.15521C1.64805 2.09271 1.73583 2.04743 1.83022 2.02257C1.92461 1.99771 2.0233 1.99388 2.11933 2.01136L6.23867 2.76002C6.54588 2.81592 6.82374 2.97786 7.02378 3.21763C7.22383 3.45739 7.33338 3.75976 7.33333 4.07202V13.8667ZM14.6667 12.776L8.66667 13.8667V4.07202C8.66662 3.75976 8.77617 3.45739 8.97622 3.21763C9.17626 2.97786 9.45412 2.81592 9.76133 2.76002L13.8807 2.01136C13.9767 1.99388 14.0754 1.99771 14.1698 2.02257C14.2642 2.04743 14.352 2.09271 14.4269 2.15521C14.5019 2.21772 14.5622 2.29592 14.6036 2.3843C14.6451 2.47268 14.6666 2.56908 14.6667 2.66669V12.776Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_767'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  warenbestand: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_771)'>
        <path
          d='M8.08142 0L1.08142 4V12L8.08142 16L15.0814 12V4L8.08142 0ZM13.0901 4.4L8.00809 7.23467L3.11542 4.37333L8.08142 1.53333L13.0901 4.4ZM2.41475 5.508L7.33342 8.38267V14.0373L2.41475 11.226V5.508ZM8.66675 14.1293V8.39133L13.7481 5.55733V11.224L8.66675 14.1293Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_771'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  auswahllisten: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_775)'>
        <path d='M16.0002 2.66687H4.66687V4.0002H16.0002V2.66687Z' fill='currentColor' />
        <path d='M16.0002 7.33313H4.66687V8.66647H16.0002V7.33313Z' fill='currentColor' />
        <path d='M16.0002 12H4.66687V13.3333H16.0002V12Z' fill='currentColor' />
        <path
          d='M1.33333 4.66666C2.06971 4.66666 2.66667 4.06971 2.66667 3.33333C2.66667 2.59695 2.06971 2 1.33333 2C0.596954 2 0 2.59695 0 3.33333C0 4.06971 0.596954 4.66666 1.33333 4.66666Z'
          fill='currentColor'
        />
        <path
          d='M1.33333 9.33353C2.06971 9.33353 2.66667 8.73658 2.66667 8.0002C2.66667 7.26382 2.06971 6.66687 1.33333 6.66687C0.596954 6.66687 0 7.26382 0 8.0002C0 8.73658 0.596954 9.33353 1.33333 9.33353Z'
          fill='currentColor'
        />
        <path
          d='M1.33333 13.9998C2.06971 13.9998 2.66667 13.4028 2.66667 12.6665C2.66667 11.9301 2.06971 11.3331 1.33333 11.3331C0.596954 11.3331 0 11.9301 0 12.6665C0 13.4028 0.596954 13.9998 1.33333 13.9998Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_775'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  einkauf: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_301)'>
        <path
          d='M13.4427 8.66667H3.61267L2.98533 3.33333H8V2H2.828L2.8 1.76533C2.74255 1.27907 2.50871 0.830769 2.14279 0.505403C1.77688 0.180036 1.30432 0.000208558 0.814667 0L0 0V1.33333H0.814667C0.977956 1.33335 1.13556 1.3933 1.25758 1.50181C1.3796 1.61032 1.45756 1.75983 1.47667 1.922L2.53333 10.9007C2.59063 11.3871 2.82441 11.8355 3.19034 12.161C3.55627 12.4865 4.02891 12.6664 4.51867 12.6667H13.3333V11.3333H4.51867C4.35528 11.3333 4.19759 11.2733 4.07555 11.1646C3.95351 11.056 3.87562 10.9063 3.85667 10.744L3.76933 10H14.5573L15.1573 6.66667H13.8033L13.4427 8.66667Z'
          fill='currentColor'
        />
        <path
          d='M4.66677 16.0004C5.40314 16.0004 6.0001 15.4035 6.0001 14.6671C6.0001 13.9307 5.40314 13.3338 4.66677 13.3338C3.93039 13.3338 3.33344 13.9307 3.33344 14.6671C3.33344 15.4035 3.93039 16.0004 4.66677 16.0004Z'
          fill='currentColor'
        />
        <path
          d='M11.3333 16.0004C12.0697 16.0004 12.6667 15.4035 12.6667 14.6671C12.6667 13.9307 12.0697 13.3338 11.3333 13.3338C10.597 13.3338 10 13.9307 10 14.6671C10 15.4035 10.597 16.0004 11.3333 16.0004Z'
          fill='currentColor'
        />
        <path
          d='M11.3852 5.69513H11.4072C11.5725 5.69568 11.7364 5.66337 11.8892 5.60008C12.0419 5.53679 12.1806 5.44379 12.2972 5.32646L15.8045 1.81913L14.8618 0.876465L11.4078 4.3338L9.91184 2.7738L8.95117 3.6978L10.4885 5.2978C10.6034 5.42115 10.7421 5.51995 10.8962 5.58824C11.0503 5.65653 11.2166 5.69289 11.3852 5.69513V5.69513Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_301'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  rechn: (props: IconsProps) => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1_305)'>
        <path
          d='M14 0.666718H2C1.46957 0.666718 0.960859 0.877431 0.585786 1.2525C0.210714 1.62758 0 2.13628 0 2.66672L0 15.3334H16V2.66672C16 2.13628 15.7893 1.62758 15.4142 1.2525C15.0391 0.877431 14.5304 0.666718 14 0.666718V0.666718ZM2 2.00005H14C14.1768 2.00005 14.3464 2.07029 14.4714 2.19531C14.5964 2.32034 14.6667 2.48991 14.6667 2.66672V4.66672H1.33333V2.66672C1.33333 2.48991 1.40357 2.32034 1.5286 2.19531C1.65362 2.07029 1.82319 2.00005 2 2.00005V2.00005ZM1.33333 14.0001V6.00005H14.6667V14.0001H1.33333ZM3.33333 8.00005H12.6667V9.33338H3.33333V8.00005ZM3.33333 10.6667H10V12.0001H3.33333V10.6667ZM2 3.33338C2 3.20153 2.0391 3.07264 2.11235 2.963C2.18561 2.85337 2.28973 2.76792 2.41154 2.71746C2.53336 2.66701 2.66741 2.6538 2.79673 2.67953C2.92605 2.70525 3.04484 2.76874 3.13807 2.86198C3.23131 2.95521 3.2948 3.074 3.32052 3.20332C3.34625 3.33264 3.33304 3.46669 3.28259 3.58851C3.23213 3.71032 3.14668 3.81444 3.03705 3.8877C2.92741 3.96095 2.79852 4.00005 2.66667 4.00005C2.48986 4.00005 2.32029 3.92981 2.19526 3.80479C2.07024 3.67976 2 3.5102 2 3.33338ZM4 3.33338C4 3.20153 4.0391 3.07264 4.11235 2.963C4.18561 2.85337 4.28973 2.76792 4.41154 2.71746C4.53336 2.66701 4.66741 2.6538 4.79673 2.67953C4.92605 2.70525 5.04484 2.76874 5.13807 2.86198C5.23131 2.95521 5.2948 3.074 5.32052 3.20332C5.34625 3.33264 5.33304 3.46669 5.28259 3.58851C5.23213 3.71032 5.14668 3.81444 5.03705 3.8877C4.92741 3.96095 4.79852 4.00005 4.66667 4.00005C4.48986 4.00005 4.32029 3.92981 4.19526 3.80479C4.07024 3.67976 4 3.5102 4 3.33338ZM6 3.33338C6 3.20153 6.0391 3.07264 6.11235 2.963C6.18561 2.85337 6.28973 2.76792 6.41154 2.71746C6.53336 2.66701 6.66741 2.6538 6.79673 2.67953C6.92605 2.70525 7.04484 2.76874 7.13807 2.86198C7.23131 2.95521 7.2948 3.074 7.32052 3.20332C7.34625 3.33264 7.33305 3.46669 7.28259 3.58851C7.23213 3.71032 7.14668 3.81444 7.03705 3.8877C6.92741 3.96095 6.79852 4.00005 6.66667 4.00005C6.48986 4.00005 6.32029 3.92981 6.19526 3.80479C6.07024 3.67976 6 3.5102 6 3.33338Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_305'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
};
