import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      {
        title: "Pinnacle Group Tuitions",
        href: "https://www.pinnaclegrouptuitions.in",
      },
      { title: "Advance Claases", href: "https://www.advclasses.com" },
      { title: "SIPBN", href: "https://www.sipbn.com.au" },
      { title: "Triot Tech", href: "https://troittech.vercel.app" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
      // { title: "Login", href: "/login" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
