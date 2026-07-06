interface SlothMascotProps {
  className?: string;
}

export function SlothMascot({ className }: SlothMascotProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* ears */}
      <circle cx="26" cy="24" r="10" fill="#C9A27C" />
      <circle cx="74" cy="24" r="10" fill="#C9A27C" />
      <circle cx="26" cy="24" r="5" fill="#8F6A49" />
      <circle cx="74" cy="24" r="5" fill="#8F6A49" />

      {/* head */}
      <circle cx="50" cy="52" r="38" fill="#D9B896" />

      {/* face mask */}
      <ellipse cx="50" cy="58" rx="26" ry="22" fill="#F5E9D9" />

      {/* eye patches */}
      <ellipse cx="37" cy="54" rx="9" ry="11" fill="#8F6A49" />
      <ellipse cx="63" cy="54" rx="9" ry="11" fill="#8F6A49" />

      {/* eyes */}
      <circle cx="37" cy="55" r="3.4" fill="#3B2A1E" />
      <circle cx="63" cy="55" r="3.4" fill="#3B2A1E" />
      <circle cx="38.2" cy="53.6" r="1.1" fill="#FFFFFF" />
      <circle cx="64.2" cy="53.6" r="1.1" fill="#FFFFFF" />

      {/* nose */}
      <ellipse cx="50" cy="66" rx="5" ry="3.6" fill="#5B4230" />

      {/* smile */}
      <path
        d="M42 71 Q50 77 58 71"
        stroke="#5B4230"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* blush */}
      <ellipse cx="29" cy="66" rx="4.5" ry="3" fill="#F3A57A" opacity="0.6" />
      <ellipse cx="71" cy="66" rx="4.5" ry="3" fill="#F3A57A" opacity="0.6" />
    </svg>
  );
}
