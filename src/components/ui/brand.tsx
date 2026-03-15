import capivoraIcon from "@/assets/branding/capivora-icon-transparent.png";
import capivoraLogo from "@/assets/branding/capivora-logo-transparent.png";

type BrandProps = {
  compact?: boolean;
  className?: string;
};

export function Brand({ compact = false, className = "" }: BrandProps) {
  if (compact) {
    return (
      <img
        src={capivoraIcon}
        alt="Capivora"
        className={`h-10 w-10 object-contain ${className}`}
      />
    );
  }

  return (
    <img
      src={capivoraLogo}
      alt="Capivora"
      className={`h-10 w-auto object-contain ${className}`}
    />
  );
}