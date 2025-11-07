const fs = require('fs');

// Read services data
const servicesData = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));

console.log(`Original services count: ${servicesData.services.length}`);

// Track seen IDs, slugs, and names
const seenIds = new Set();
const seenSlugs = new Set();
const seenNames = new Set();
const uniqueServices = [];

// Remove duplicates
servicesData.services.forEach((service, index) => {
  const isDuplicate = seenIds.has(service.id) || 
                     seenSlugs.has(service.slug) || 
                     seenNames.has(service.name);
  
  if (!isDuplicate) {
    seenIds.add(service.id);
    seenSlugs.add(service.slug);
    seenNames.add(service.name);
    uniqueServices.push(service);
  } else {
    console.log(`Removing duplicate service #${index}: ${service.id} (${service.slug}) - "${service.name}"`);
  }
});

// Update the services array
servicesData.services = uniqueServices;

// Write updated data back
fs.writeFileSync('./data/services.json', JSON.stringify(servicesData, null, 2));

console.log(`\n✅ Removed service duplicates. Total services: ${uniqueServices.length}`);

// Verify no duplicates remain
const finalNames = servicesData.services.map(s => s.name);
const duplicateNames = finalNames.filter((name, index) => finalNames.indexOf(name) !== index);

if (duplicateNames.length > 0) {
  console.log(`❌ Still have duplicate names: ${duplicateNames.join(', ')}`);
} else {
  console.log(`✅ No duplicate names remaining`);
}
