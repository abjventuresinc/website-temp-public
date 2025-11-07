const fs = require('fs');

// Read cities data
const citiesData = JSON.parse(fs.readFileSync('./data/cities.json', 'utf8'));

// Track seen IDs and slugs
const seenIds = new Set();
const seenSlugs = new Set();
const uniqueCities = [];

// Remove duplicates
citiesData.cities.forEach(city => {
  if (!seenIds.has(city.id) && !seenSlugs.has(city.slug)) {
    seenIds.add(city.id);
    seenSlugs.add(city.slug);
    uniqueCities.push(city);
  } else {
    console.log(`Removing duplicate: ${city.id} (${city.slug})`);
  }
});

// Update the cities array
citiesData.cities = uniqueCities;

// Write updated data back
fs.writeFileSync('./data/cities.json', JSON.stringify(citiesData, null, 2));

console.log(`\n✅ Removed duplicates. Total cities: ${uniqueCities.length}`);

// Also check for duplicate service entries
const servicesData = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));
const seenServiceIds = new Set();
const seenServiceSlugs = new Set();
const uniqueServices = [];

servicesData.services.forEach(service => {
  if (!seenServiceIds.has(service.id) && !seenServiceSlugs.has(service.slug)) {
    seenServiceIds.add(service.id);
    seenServiceSlugs.add(service.slug);
    uniqueServices.push(service);
  } else {
    console.log(`Removing duplicate service: ${service.id} (${service.slug})`);
  }
});

// Update the services array
servicesData.services = uniqueServices;

// Write updated data back
fs.writeFileSync('./data/services.json', JSON.stringify(servicesData, null, 2));

console.log(`✅ Removed service duplicates. Total services: ${uniqueServices.length}`);
