const fs = require('fs');

// Read services data
const servicesData = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));

console.log(`Original services count: ${servicesData.services.length}`);

// Track seen IDs and slugs
const seenIds = new Set();
const seenSlugs = new Set();
const uniqueServices = [];

// Remove duplicates
servicesData.services.forEach((service, index) => {
  if (!seenIds.has(service.id) && !seenSlugs.has(service.slug)) {
    seenIds.add(service.id);
    seenSlugs.add(service.slug);
    uniqueServices.push(service);
  } else {
    console.log(`Removing duplicate service #${index}: ${service.id} (${service.slug})`);
  }
});

// Update the services array
servicesData.services = uniqueServices;

// Write updated data back
fs.writeFileSync('./data/services.json', JSON.stringify(servicesData, null, 2));

console.log(`\n✅ Removed service duplicates. Total services: ${uniqueServices.length}`);

// Also check cities for duplicates
const citiesData = JSON.parse(fs.readFileSync('./data/cities.json', 'utf8'));

console.log(`Original cities count: ${citiesData.cities.length}`);

// Track seen IDs and slugs for cities
const seenCityIds = new Set();
const seenCitySlugs = new Set();
const uniqueCities = [];

// Remove duplicates
citiesData.cities.forEach((city, index) => {
  if (!seenCityIds.has(city.id) && !seenCitySlugs.has(city.slug)) {
    seenCityIds.add(city.id);
    seenCitySlugs.add(city.slug);
    uniqueCities.push(city);
  } else {
    console.log(`Removing duplicate city #${index}: ${city.id} (${city.slug})`);
  }
});

// Update the cities array
citiesData.cities = uniqueCities;

// Write updated data back
fs.writeFileSync('./data/cities.json', JSON.stringify(citiesData, null, 2));

console.log(`✅ Removed city duplicates. Total cities: ${uniqueCities.length}`);
