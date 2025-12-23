type SectionHeaderProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl font-bold font-playfair after:content-[''] after:block after:w-32 after:h-2 
           after:mt-1 after:rounded-full after:mx-auto ${titleClassName}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-lg font-semibold text-black mb-6 rounded relative
          after:content-[''] after:block after:w-32 after:h-2 
          after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
