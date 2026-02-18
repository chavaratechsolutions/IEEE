
export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "ICSEMII 2027",
        "startDate": "2027-03-25",
        "endDate": "2027-03-26",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": "Carmel College of Engineering and Technology",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Punnapra P O",
                "addressLocality": "Alappuzha",
                "postalCode": "688004",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
            }
        },
        "image": [
            "https://icsemii.vercel.app/og-image.jpg" // Ideally we should have a real image URL here
        ],
        "description": "IEEE International Conference on Smart Energy, Mobility, and Intelligent Infrastructure (ICSEMII 2027).",
        "organizer": {
            "@type": "Organization",
            "name": "IEEE",
            "url": "https://www.ieee.org"
        }
    };

    return (
        <section>
            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
