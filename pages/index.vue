<template>
  <div>
    <HeroSection />
    <TrustBadges />
    <AboutSection />
    <ServicesGrid />
    <ProcessSteps />
    <GalleryGrid />
    <ReviewsSlider />
    <FaqAccordion />
    <ServiceAreas />
    <CtaBanner />
  </div>
</template>

<script setup lang="ts">
// Activate scroll-triggered animations for all .animate-in elements
useScrollAnimation()

useSeoMeta({
  title: 'Home Window Repair & Vehicle Tinting Cleveland | Iced Window Tints',
  ogTitle: 'Iced Window Tints - Home Window Repair & Vehicle Tinting Cleveland',
  description: 'Iced Window Tints in Cleveland, Ohio specializes in premium vehicle tinting and expert home window repair services. Call (216) 678-8692 for a free quote.',
  ogDescription: 'Expert vehicle window tinting and home window repair in Cleveland, Ohio. Quality service by Iced Window Tints.',
  ogType: 'website',
  keywords: 'window repair cleveland, vehicle tinting cleveland, home window repair ohio, car tinting cleveland, iced window tints, window glass repair ohio',
})

// Schema.org Local Business structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Iced Window Tints",
        "image": "https://glassexpertsfl.org/logo.png",
        "url": "https://glassexpertsfl.org",
        "telephone": "(216) 678-8692",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1418 E 176th St",
          "addressLocality": "Cleveland",
          "addressRegion": "OH",
          "postalCode": "44110",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.5645,
          "longitude": -81.5604
        },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "08:30", "closes": "21:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "08:30", "closes": "21:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "08:30", "closes": "20:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "08:30", "closes": "20:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:30", "closes": "21:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:30", "closes": "21:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "08:30", "closes": "20:00" }
        ],
        "sameAs": [
          "https://www.facebook.com/icedwindowtints",
          "https://www.instagram.com/icedwindowtints"
        ]
      })
    }
  ]
})
</script>
