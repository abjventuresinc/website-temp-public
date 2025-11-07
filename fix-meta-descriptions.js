const fs = require('fs');

// Read data files
const citiesData = JSON.parse(fs.readFileSync('./data/cities.json', 'utf8'));
const servicesData = JSON.parse(fs.readFileSync('./data/services.json', 'utf8'));

// Function to truncate meta description to under 155 characters
function truncateMetaDescription(description, maxLength = 155) {
  if (description.length <= maxLength) return description;
  
  // Try to break at a logical point (before "Call", "Contact", "Get", etc.)
  const breakPoints = ['Call ', 'Contact ', 'Get ', 'Free ', 'Today!', 'Now!', 'Available'];
  let bestBreakPoint = -1;
  
  for (const breakPoint of breakPoints) {
    const index = description.lastIndexOf(breakPoint);
    if (index > 0 && index < maxLength - 10) {
      bestBreakPoint = index;
    }
  }
  
  if (bestBreakPoint > 0) {
    return description.substring(0, bestBreakPoint).trim();
  }
  
  // Otherwise truncate at word boundary
  const truncated = description.substring(0, maxLength - 3);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > maxLength - 20) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
}

// Update cities
citiesData.cities.forEach(city => {
  if (city.seo && city.seo.metaDescription) {
    const newDescription = truncateMetaDescription(city.seo.metaDescription);
    if (newDescription !== city.seo.metaDescription) {
      console.log(`${city.name}: "${city.seo.metaDescription}" (${city.seo.metaDescription.length}) -> "${newDescription}" (${newDescription.length})`);
      city.seo.metaDescription = newDescription;
    }
  }
});

// Update services
servicesData.services.forEach(service => {
  if (service.seo && service.seo.metaDescription) {
    const newDescription = truncateMetaDescription(service.seo.metaDescription);
    if (newDescription !== service.seo.metaDescription) {
      console.log(`${service.name}: "${service.seo.metaDescription}" (${service.seo.metaDescription.length}) -> "${newDescription}" (${newDescription.length})`);
      service.seo.metaDescription = newDescription;
    }
  }
});

// Write updated data back
fs.writeFileSync('./data/cities.json', JSON.stringify(citiesData, null, 2));
fs.writeFileSync('./data/services.json', JSON.stringify(servicesData, null, 2));

console.log('\n✅ Updated all meta descriptions to be under 155 characters');
