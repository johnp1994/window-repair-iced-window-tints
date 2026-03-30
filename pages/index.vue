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
  title: 'Sliding Glass Door & Window Repair',
  ogTitle: 'The Glassperts - Sliding Glass Door & Window Repair',
  description: 'The Glassperts sliding glass door & window repair specializes in sliding door, window, and glass repair. Over 23 years of industry experience serving South Florida.',
  ogDescription: 'Expert sliding glass door repair, window glass repair, commercial glass repair, and impact window installation in South Florida.',
  ogType: 'website',
})
</script>
