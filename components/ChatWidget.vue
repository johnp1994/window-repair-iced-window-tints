<template>
  <div id="n8n-chat-widget"></div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

// Embed the official n8n chat widget via CDN as per package instructions
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css' }
  ],
  script: [
    {
      type: 'module',
      innerHTML: `
        import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
        
        createChat({
          webhookUrl: 'https://primary-production-55e84.up.railway.app/webhook/d078abf0-ba5e-4eaa-a155-032f00233774/chat',
          target: '#n8n-chat-widget',
          mode: 'window',
          chatLink: {
            title: 'The Glassperts Chat',
            text: 'Need help? Chat with us now!'
          },
          metadata: {
            site_knowledge: \`
              Business Name: The Glassperts
              Primary Services: 
              1. Sliding Glass Door Repair (Tracks, Rollers, Locks)
              2. Window Glass Repair (Cracked or damaged glass)
              3. Commercial Glass (Storefronts, office windows)
              4. Impact Windows & Doors (Durable installation)
              
              Service Areas (South Florida): 
              Miami, Kendall, Coral Gables, Homestead, Pinecrest, Miami Lakes, Miami Beach, Hollywood, Cutler Bay, Cutler Ridge.
              
              How It Works: 
              1. Contact Us
              2. Free Estimate (No-obligation)
              3. Professional Repair
              4. Complete!
              
              Company Promise: Over 23 years of industry experience serving South Florida. High quality materials and expert technicians.
            \`.trim()
          }
        });
      `
    }
  ]
})
</script>

<style>
/* CSS overrides to match the exact aesthetic of The Glassperts */
:root {
  /* Teal/Cyan accents from screenshot */
  --chat--color-primary: #00bcd4;
  --chat--color-primary-shade-50: #00a4bd;
  --chat--color-primary-shade-100: #008a9f;
  
  /* Dark Navy header from screenshot */
  --chat--color-secondary: #0b1d3a;
  --chat--color-secondary-shade-50: #0a172e;
  
  /* Basics */
  --chat--white: #ffffff;
  --chat--color-font: #333333;
  --chat--color-light: #f5f7f9;
  
  /* Rounded corners like the screenshot */
  --chat--border-radius-base: 12px;
}
</style>
