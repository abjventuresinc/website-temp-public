const fs = require('fs');
const path = require('path');

// Read cities data
const citiesData = JSON.parse(fs.readFileSync('./data/cities.json', 'utf8'));
const servicesData = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));

// Function to truncate title to under 60 characters
function truncateTitle(title, maxLength = 58) {
  if (title.length <= maxLength) return title;
  
  // Try to break at a logical point (before "|" or " - ")
  const pipeIndex = title.lastIndexOf(' | ');
  const dashIndex = title.lastIndexOf(' - ');
  const breakPoint = Math.max(pipeIndex, dashIndex);
  
  if (breakPoint > 0 && breakPoint < maxLength) {
    return title.substring(0, breakPoint);
  }
  
  // Otherwise truncate at word boundary
  const truncated = title.substring(0, maxLength - 3);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > maxLength - 20) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
}

// Function to create shorter, SEO-friendly titles
function createShortTitle(cityName, state, serviceType = 'Garage Door Services') {
  const baseTitle = `${serviceType} ${cityName}, ${state}`;
  if (baseTitle.length <= 58) return baseTitle;
  
  // Try shorter variations
  const shortTitle = `Garage Door ${cityName}, ${state}`;
  if (shortTitle.length <= 58) return shortTitle;
  
  const veryShortTitle = `${cityName} Garage Door Services`;
  if (veryShortTitle.length <= 58) return veryShortTitle;
  
  return truncateTitle(baseTitle);
}

// Update cities
citiesData.cities.forEach(city => {
  const newTitle = createShortTitle(city.name, city.state);
  console.log(`${city.name}: "${city.seo.metaTitle}" (${city.seo.metaTitle.length}) -> "${newTitle}" (${newTitle.length})`);
  city.seo.metaTitle = newTitle;
});

// Update services
servicesData.services.forEach(service => {
  if (service.seo && service.seo.metaTitle) {
    const newTitle = truncateTitle(service.seo.metaTitle);
    console.log(`${service.name}: "${service.seo.metaTitle}" (${service.seo.metaTitle.length}) -> "${newTitle}" (${newTitle.length})`);
    service.seo.metaTitle = newTitle;
  }
});

// Write updated data back
fs.writeFileSync('./data/cities.json', JSON.stringify(citiesData, null, 2));
fs.writeFileSync('./data/services.json', JSON.stringify(servicesData, null, 2));

console.log('\n✅ Updated all titles to be under 60 characters');
