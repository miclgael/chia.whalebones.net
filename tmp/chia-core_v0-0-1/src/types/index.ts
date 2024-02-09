export {}

declare global {
  interface AppConfig {
    siteName: string;
    siteTagline: string;
    siteAuthor: string;
    socialMedia?: {
      text: string;
      icon: string;
      href: string;
    }[]
  }
  interface Track {
    data?: {
      id: string;
      title: string;
      embed: string;
    };
  }
}
