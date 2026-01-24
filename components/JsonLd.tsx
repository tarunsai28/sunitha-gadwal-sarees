
import { siteContent } from "@/data/siteContent";

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteContent.brandName,
        "image": "https://sunithagadwalsarees.com/og-image.jpg",
        "telephone": siteContent.contact.phones[0],
        "email": siteContent.contact.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteContent.contact.address.street,
            "addressLocality": siteContent.contact.address.city,
            "addressRegion": siteContent.contact.address.district, // Using district as region part
            "postalCode": siteContent.contact.address.pincode,
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 16.2333,
            "longitude": 77.7997
        },
        "url": "https://sunithagadwalsarees.com",
        "sameAs": [
            siteContent.socials.instagram,
            siteContent.socials.facebook,
            siteContent.socials.youtube
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "21:00"
        },
        "priceRange": "₹₹₹"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
