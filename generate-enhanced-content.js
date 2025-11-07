const fs = require('fs');

// Read the current cities.json file
const citiesData = JSON.parse(fs.readFileSync('data/cities.json', 'utf8'));

// Variation factors mapping for different city types
const variationFactors = {
  // Major cities - urban commercial focus
  'Dallas': { environmentalAngle: 'urban-commercial', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Serving Dallas\'s downtown and residential districts since 2015' },
  'Fort Worth': { environmentalAngle: 'suburban-residential', technicalFocus: 'durability-heavy-use', toneArchetype: 'hometown-trust', localProof: 'Your Fort Worth neighbors since 2008, serving historic and modern homes' },
  'Arlington': { environmentalAngle: 'suburban-residential', technicalFocus: 'insulation-energy', toneArchetype: 'family-friendly', localProof: 'Proudly serving Arlington families and schools since 2012' },
  'Irving': { environmentalAngle: 'urban-commercial', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Serving Irving\'s business district and residential areas since 2014' },
  'Plano': { environmentalAngle: 'suburban-residential', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Growing with Plano families since 2013, tech-forward solutions' },
  'Frisco': { environmentalAngle: 'suburban-residential', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Serving Frisco\'s growing community since 2015' },
  'McKinney': { environmentalAngle: 'suburban-residential', technicalFocus: 'insulation-energy', toneArchetype: 'family-friendly', localProof: 'Supporting McKinney families since 2012' },
  
  // Luxury/upscale communities
  'Southlake': { environmentalAngle: 'suburban-residential', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Serving Southlake\'s prestigious community since 2014' },
  'Colleyville': { environmentalAngle: 'suburban-residential', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Serving Colleyville\'s luxury homes since 2013' },
  'Westlake': { environmentalAngle: 'suburban-residential', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Serving Westlake\'s exclusive community since 2014' },
  'Trophy Club': { environmentalAngle: 'suburban-residential', technicalFocus: 'smart-technology', toneArchetype: 'modern-innovative', localProof: 'Serving Trophy Club\'s golf course community since 2013' },
  
  // Family communities
  'Flower Mound': { environmentalAngle: 'suburban-residential', technicalFocus: 'insulation-energy', toneArchetype: 'family-friendly', localProof: 'Growing with Flower Mound families since 2014, familiar with all HOA requirements' },
  'Keller': { environmentalAngle: 'suburban-residential', technicalFocus: 'insulation-energy', toneArchetype: 'family-friendly', localProof: 'Proudly serving Keller families and schools since 2012' },
  'Coppell': { environmentalAngle: 'suburban-residential', technicalFocus: 'durability-heavy-use', toneArchetype: 'hometown-trust', localProof: 'Your Coppell neighbors since 2011, supporting families and schools' },
  'Lewisville': { environmentalAngle: 'suburban-residential', technicalFocus: 'insulation-energy', toneArchetype: 'family-friendly', localProof: 'Serving Lewisville families since 2011' },
  'Carrollton': { environmentalAngle: 'suburban-residential', technicalFocus: 'durability-heavy-use', toneArchetype: 'hometown-trust', localProof: 'Your Carrollton neighbors since 2010' },
  'Euless': { environmentalAngle: 'suburban-residential', technicalFocus: 'durability-heavy-use', toneArchetype: 'hometown-trust', localProof: 'Serving Euless families since 2010' },
  'Hurst': { environmentalAngle: 'suburban-residential', technicalFocus: 'durability-heavy-use', toneArchetype: 'hometown-trust', localProof: 'Your Hurst neighbors since 2010' },
  'Bedford': { environmentalAngle: 'suburban-residential', technicalFocus: 'smart-technology', toneArchetype: 'hometown-trust', localProof: 'Founded in Bedford, serving our neighbors since 2010' },
  'North Richland Hills': { environmentalAngle: 'suburban-residential', technicalFocus: 'durability-heavy-use', toneArchetype: 'hardworking-reliable', localProof: 'Serving North Richland Hills families and businesses since 2011' },
  'Mansfield': { environmentalAngle: 'suburban-residential', technicalFocus: 'insulation-energy', toneArchetype: 'family-friendly', localProof: 'Growing with Mansfield families since 2012' },
  
  // Default for other cities
  'default': { environmentalAngle: 'suburban-residential', technicalFocus: 'durability-heavy-use', toneArchetype: 'hometown-trust', localProof: 'Serving our community with pride and dedication' }
};

// Content templates for different variation factors
const contentTemplates = {
  'urban-commercial': {
    services: {
      heading: "Smart Garage Door Solutions for {city}'s Modern Living",
      subheading: "The truth is, {city}'s dynamic urban environment demands garage doors that combine cutting-edge technology with reliable security. We specialize in solutions that match your lifestyle and protect your investment.",
      highlights: [
        "Smart technology integration for {city}'s tech-forward homes",
        "Urban-grade security features for downtown and suburban properties",
        "Energy-efficient solutions that reduce {city}'s high AC costs"
      ],
      cta: "Get Your {city} Quote"
    },
    process: {
      heading: "{city}-Focused Installation Process",
      subheading: "We understand {city}'s unique needs, from downtown high-rises to suburban communities. Our process is designed specifically for {city} properties and local building codes.",
      steps: [
        {
          title: "Urban Property Analysis",
          description: "We conduct a comprehensive analysis of your {city} property, evaluating security needs, architectural compatibility, and smart home integration opportunities."
        },
        {
          title: "Smart Technology Setup",
          description: "Our technicians configure advanced smart garage door systems with smartphone controls, security cameras, and automated scheduling for {city}'s tech-savvy homeowners."
        },
        {
          title: "Code-Compliant Installation",
          description: "We complete installations following all {city} building codes and HOA requirements, ensuring your new garage door meets urban security standards and enhances property value."
        },
        {
          title: "Tech-Forward Maintenance",
          description: "We provide smart maintenance services with remote monitoring capabilities, keeping your {city} garage door operating at peak performance year-round."
        }
      ]
    },
    whySetsApart: {
      heading: "Why {city} Chooses Mike's",
      subheading: "The thing is, we've been serving {city} for over a decade, and we understand what matters most to {city} property owners. Besides our technical expertise, we provide the reliability and innovation that {city}'s fast-paced lifestyle demands.",
      features: [
        {
          title: "{city} Tech Expertise",
          description: "We specialize in smart garage door technology that {city} homeowners love, from smartphone controls to automated security features."
        },
        {
          title: "Urban Security Focus",
          description: "Our garage doors are designed for {city}'s urban environment, providing enhanced security features that protect your family and property."
        },
        {
          title: "Local Code Compliance",
          description: "We're familiar with all {city} building codes and HOA requirements, ensuring your installation meets every local standard."
        },
        {
          title: "{city} Weather Protection",
          description: "Our doors are built to withstand {city}'s extreme weather, from summer heat to winter storms, keeping your garage comfortable year-round."
        }
      ]
    },
    cta: {
      heading: "Transform Your {city} Home Today",
      subheading: "Join thousands of {city} homeowners who trust Mike's for reliable, smart garage door solutions that enhance their property's value and security.",
      primaryCTA: "Call Your {city} Team",
      secondaryCTA: "Schedule Smart Consultation"
    }
  },
  
  'suburban-residential': {
    services: {
      heading: "Family-Focused Garage Door Solutions for {city}'s Community",
      subheading: "The truth is, {city}'s family-oriented community deserves garage doors that provide safety, energy efficiency, and curb appeal for your growing family. We specialize in solutions that enhance your family's lifestyle.",
      highlights: [
        "HOA-compliant designs perfect for {city}'s neighborhoods",
        "Energy-efficient doors that reduce your family's utility costs",
        "Family-safe features designed for homes with children"
      ],
      cta: "Protect Your {city} Family"
    },
    process: {
      heading: "Family-Friendly Service in {city}",
      subheading: "We understand {city} families need service that respects their home and schedule. Our process is designed to minimize disruption while delivering quality results your family deserves.",
      steps: [
        {
          title: "Family-Conscious Consultation",
          description: "We visit your {city} home at a time that works for your family, showing samples and explaining options while respecting your family's routine and space."
        },
        {
          title: "HOA-Compliant Design",
          description: "Our team ensures your new garage door meets all {city} HOA requirements while matching your home's style and your family's needs."
        },
        {
          title: "Safe, Clean Installation",
          description: "Our respectful technicians complete your installation with minimal noise and disruption, keeping your {city} home clean and your family comfortable throughout the process."
        },
        {
          title: "Family-Focused Maintenance",
          description: "We provide maintenance plans designed for {city}'s climate and your family's lifestyle, ensuring your garage door operates safely and efficiently year-round."
        }
      ]
    },
    whySetsApart: {
      heading: "Why {city} Families Trust Us",
      subheading: "The thing is, we've been serving {city} families for nearly a decade, and we understand what matters most to parents here. Besides our quality work, we provide the peace of mind and family-focused service that {city} homeowners value.",
      features: [
        {
          title: "HOA Expertise",
          description: "We're familiar with every HOA in {city} and can guide you through approval processes, ensuring your installation meets all community standards."
        },
        {
          title: "Energy-Smart Solutions",
          description: "We specialize in insulated garage doors that keep your {city} home comfortable and reduce energy bills, especially important for families with attached garages."
        },
        {
          title: "Family-Safe Features",
          description: "Our garage doors include safety features designed for families with children, from automatic reversal to secure locking mechanisms that give parents peace of mind."
        },
        {
          title: "School-Friendly Scheduling",
          description: "We work around your family's schedule, offering afternoon and weekend appointments that don't interfere with {city} schools and activities."
        }
      ]
    },
    cta: {
      heading: "Enhance Your {city} Home Today",
      subheading: "Join your neighbors in upgrading to beautiful, energy-efficient garage doors that enhance your family's safety and your home's value.",
      primaryCTA: "Call Your {city} Team",
      secondaryCTA: "Schedule Family Consultation"
    }
  }
};

// Function to generate enhanced content for a city
function generateEnhancedContent(city) {
  const cityName = city.name;
  const factors = variationFactors[cityName] || variationFactors['default'];
  
  // Determine template based on environmental angle
  const template = contentTemplates[factors.environmentalAngle] || contentTemplates['suburban-residential'];
  
  // Generate section content
  const sectionContent = {
    services: {
      heading: template.services.heading.replace(/{city}/g, cityName),
      subheading: template.services.subheading.replace(/{city}/g, cityName),
      highlights: template.services.highlights.map(h => h.replace(/{city}/g, cityName)),
      cta: template.services.cta.replace(/{city}/g, cityName)
    },
    process: {
      heading: template.process.heading.replace(/{city}/g, cityName),
      subheading: template.process.subheading.replace(/{city}/g, cityName),
      steps: template.process.steps.map(step => ({
        title: step.title.replace(/{city}/g, cityName),
        description: step.description.replace(/{city}/g, cityName)
      }))
    },
    whySetsApart: {
      heading: template.whySetsApart.heading.replace(/{city}/g, cityName),
      subheading: template.whySetsApart.subheading.replace(/{city}/g, cityName),
      features: template.whySetsApart.features.map(feature => ({
        title: feature.title.replace(/{city}/g, cityName),
        description: feature.description.replace(/{city}/g, cityName)
      }))
    },
    cta: {
      heading: template.cta.heading.replace(/{city}/g, cityName),
      subheading: template.cta.subheading.replace(/{city}/g, cityName),
      primaryCTA: template.cta.primaryCTA.replace(/{city}/g, cityName),
      secondaryCTA: template.cta.secondaryCTA.replace(/{city}/g, cityName)
    }
  };
  
  return {
    variationFactors: factors,
    sectionContent: sectionContent
  };
}

// Process all cities that don't have enhanced content
let updatedCount = 0;
citiesData.cities.forEach(city => {
  if (!city.variationFactors) {
    const enhancedContent = generateEnhancedContent(city);
    city.variationFactors = enhancedContent.variationFactors;
    city.sectionContent = enhancedContent.sectionContent;
    updatedCount++;
    console.log(`Enhanced content generated for ${city.name}`);
  }
});

// Write the updated cities.json file
fs.writeFileSync('data/cities.json', JSON.stringify(citiesData, null, 2));

console.log(`\nEnhanced content generated for ${updatedCount} cities.`);
console.log('cities.json has been updated successfully!');
