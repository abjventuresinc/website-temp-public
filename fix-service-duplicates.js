const fs = require('fs');

// Read services data
const servicesData = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));

// Track seen IDs and slugs
const seenIds = new Set();
const seenSlugs = new Set();
const uniqueServices = [];

// Remove duplicates
servicesData.services.forEach(service => {
  if (!seenIds.has(service.id) && !seenSlugs.has(service.slug)) {
    seenIds.add(service.id);
    seenSlugs.add(service.slug);
    uniqueServices.push(service);
  } else {
    console.log(`Removing duplicate service: ${service.id} (${service.slug})`);
  }
});

// Update the services array
servicesData.services = uniqueServices;

// Write updated data back
fs.writeFileSync('./data/services.json', JSON.stringify(servicesData, null, 2));

console.log(`\n✅ Removed service duplicates. Total services: ${uniqueServices.length}`);
