const fs = require('fs');

// Read data files
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
  
  if (lastSpaceIndex > maxLength * 0.7) {
    return title.substring(0, lastSpaceIndex) + '...';
  }
  
  return title.substring(0, maxLength - 3) + '...';
}

let changes = 0;

// Fix city titles
citiesData.cities.forEach(city => {
  if (city.seo && city.seo.metaTitle) {
    const originalTitle = city.seo.metaTitle;
    const newTitle = truncateTitle(originalTitle);
    
    if (newTitle !== originalTitle) {
      console.log(`City ${city.name}: "${originalTitle}" -> "${newTitle}"`);
      city.seo.metaTitle = newTitle;
      changes++;
    }
  }
});

// Fix service titles
servicesData.services.forEach(service => {
  if (service.seo && service.seo.metaTitle) {
    const originalTitle = service.seo.metaTitle;
    const newTitle = truncateTitle(originalTitle);
    
    if (newTitle !== originalTitle) {
      console.log(`Service ${service.name}: "${originalTitle}" -> "${newTitle}"`);
      service.seo.metaTitle = newTitle;
      changes++;
    }
  }
});

// Write updated data back
fs.writeFileSync('./data/cities.json', JSON.stringify(citiesData, null, 2));
fs.writeFileSync('./data/services.json', JSON.stringify(servicesData, null, 2));

console.log(`\n✅ Fixed ${changes} titles to be under 60 characters`);
