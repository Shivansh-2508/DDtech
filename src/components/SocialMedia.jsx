import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  // {
  //   title: "Youtube",
  //   href: "https://www.youtube.com/",
  //   icon: BsYoutube,
  // },
  // { title: "GitHub", href: "https://github.com/DD Tech-04/", icon: BsGithub },
  // {
  //   title: "Facebook",
  //   href: "https://www.facebook.com/",
  //   icon: BsFacebook,
  // },
  {
    title: "Instagram",
    href: "https://www.instagram.com/theddtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: BsInstagram,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/company/dd-technology-ltd/posts/?feedView=all",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/TheDD_Tech/",
    icon: BsTwitter,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
