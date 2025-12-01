import SocialIcon, { type SocialIconProps } from "@/components/navigator/SocialIcon";

type TopSocialBarProps = {
  socialLinks: SocialIconProps[];
};

export default function TopSocialBar({ socialLinks }: TopSocialBarProps) {
  return (
    <section className="w-full bg-slate-100">
      <nav className="flex justify-between items-center px-6 h-8 w-full md:w-3xl md:mx-auto md:h-10">
        {socialLinks.map((item: SocialIconProps, index: number) => (
          <SocialIcon key={index} {...item} />
        ))}
      </nav>
    </section>
  );
}
