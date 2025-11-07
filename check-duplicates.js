const fs = require('fs');

// Read services data
const servicesData = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));

console.log(`Total services: ${servicesData.services.length}`);

// Check for duplicates by ID
const ids = servicesData.services.map(s => s.id);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

// Check for duplicates by slug
const slugs = servicesData.services.map(s => s.slug);
const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);

// Check for duplicates by name
const names = servicesData.services.map(s => s.name);
const duplicateNames = names.filter((name, index) => names.indexOf(name) !== index);

console.log(`\nDuplicate IDs: ${duplicateIds.length > 0 ? duplicateIds.join(', ') : 'None'}`);
console.log(`Duplicate Slugs: ${duplicateSlugs.length > 0 ? duplicateSlugs.join(', ') : 'None'}`);
console.log(`Duplicate Names: ${duplicateNames.length > 0 ? duplicateNames.join(', ') : 'None'}`);

// List all services with their IDs, slugs, and names
console.log('\nAll services:');
servicesData.services.forEach((service, index) => {
  console.log(`${index + 1}. ID: ${service.id}, Slug: ${service.slug}, Name: "${service.name}"`);
});
