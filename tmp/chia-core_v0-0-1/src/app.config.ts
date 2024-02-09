export default defineAppConfig({
  siteName: 'Chia - The Nuxt 3 Layer',
  siteTagline: 'A Nuxt 3 layer with some starter components',
  siteAuthor: 'Michael Gale',
  socialMedia: [
    {
      text: 'Website by Michael Gale',
      icon: 'website',
      href: 'https://www.michaelgale.dev'
    }
  ]
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    siteName?: string,
    siteTagline?: string,
    siteAuthor?: string,
    socialMedia?: {
      text: string,
      icon: string,
      href: string
    }[]
  }
}
