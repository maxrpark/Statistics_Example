import Facebook from "../components/icons/Facebook";

interface LinkInt {
  id: number;
  name: string;
  url: string;
}
interface SocialLink extends LinkInt {
  component: React.ComponentType<any>;
}

export const navLinks: LinkInt[] = [
  { id: 1, name: "내 프로필(기업)", url: "/profile" },
  { id: 2, name: "채용공고 관리", url: "/job-offers" },
  { id: 3, name: "프로필 공유내역 관리", url: "/share-profiles" },
  { id: 4, name: "그룹멤버", url: "/" },
  { id: 5, name: "그룹관리", url: "/groups" },
];

export const footerLinks: LinkInt[] = [
  { id: 1, name: "DEV2JOB", url: "/" },
  { id: 2, name: "About Us", url: "/" },
  { id: 3, name: "Contact", url: "/" },
  { id: 4, name: "Terms", url: "/" },
  { id: 5, name: "SUPPORT", url: "/" },
  { id: 6, name: "Request", url: "/" },
  { id: 7, name: "FAQ", url: "/" },
];
export const socialLink: SocialLink[] = [
  { id: 1, name: "facebook", component: Facebook, url: "/" },
  { id: 2, name: "linkedIn", component: Facebook, url: "/" },
  { id: 3, name: "naver", component: Facebook, url: "/" },
];
