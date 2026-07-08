import { getStructuredData } from "@/lib/structured-data";

/**
 * Injects the Person / WebSite / ProfilePage JSON-LD graph.
 * Server component; content is static and trusted (from lib/constants).
 */
export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
