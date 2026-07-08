import { about, contact, profile, site, socials } from "@/lib/constants";

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

/**
 * Schema.org @graph describing the person, the website, and this profile page.
 * All values are sourced from lib/constants — no user input, safe to inline.
 */
export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: site.handle,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        jobTitle: profile.role,
        description: about.bio[0],
        email: `mailto:${contact.email}`,
        worksFor: { "@type": "Organization", name: profile.company },
        knowsAbout: [...about.techStack],
        address: { "@type": "PostalAddress", addressCountry: "NG" },
        sameAs: [socials.github, socials.linkedin, socials.twitter],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.title,
        url: site.url,
        inLanguage: "en",
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        url: site.url,
        name: site.title,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
    ],
  };
}
