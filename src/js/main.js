const countyData = {
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36005': { name: 'Bronx', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Strict local permitting and registration requirements.', 'Most short-term uses are heavily restricted by NYC law.', 'Verify whether the building and host registration rules allow the strategy before purchasing.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36047': { name: 'Kings', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Very restrictive short-term rental environment.', 'Expect tight local oversight, permit hurdles, and possible enforcement risk.', 'Buyer due diligence should confirm current zoning and host registration requirements.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36061': { name: 'New York', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['One of the most restrictive markets in the state.', 'Check the building and host registration rules before relying on rental income.', 'Local rules can change quickly, so review current enforcement guidance closely.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36081': { name: 'Queens', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Local permitting and registration requirements are significant.', 'Many properties will face extra scrutiny for short-term rentals.', 'Confirm whether the specific building and neighborhood permit short-term stays.'] },
  // Source: https://www.nyc.gov/site/hpd/services-and-information/short-term-rental.page
  '36085': { name: 'Richmond', score: 0.95, tier: 'Very High', permitRequired: 'Yes — city registration and use rules apply', ownerOccupancyRequired: 'Varies by building and host type', nightCap: '30 nights/year for unhosted stays', minimumStay: '30 nights — unhosted', zoningRestrictions: 'Restricted; NYC limits most short-term rentals in residential settings', regulations: ['Expect a challenging approval path for short-term rentals.', 'Host registration and dwelling-use rules should be reviewed carefully.', 'Verify whether transient occupancy is allowed on the parcel or in the building.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/nassau-county-ny
  '36059': { name: 'Nassau', score: 0.84, tier: 'High', permitRequired: 'Varies by town; local approval is common', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level zoning restrictions are common', regulations: ['Local rules tend to favor tighter oversight and permit controls.', 'Buyer should confirm whether the property is in a municipality that limits short-term rentals.', 'Check for minimum-stay, occupancy, or nuisance rules that can affect yield.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/suffolk-county-ny
  '36103': { name: 'Suffolk', score: 0.81, tier: 'High', permitRequired: 'Varies by town; local approval is common', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level zoning restrictions are common', regulations: ['Expect a mix of local permit rules and neighborhood restrictions.', 'Short-term stays may be limited by specific town-level policy.', 'Review town code before treating a property as a straightforward STR investment.'] },
  // Source: https://www.lodgecompliance.com/local-jurisdiction/westchester-county-ny
  '36119': { name: 'Westchester', score: 0.78, tier: 'High', permitRequired: 'Varies by municipality; local review is common', ownerOccupancyRequired: 'Varies by town', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town and zoning rules often matter more than countywide law', regulations: ['County and town rules can be strict around transient occupancy.', 'Host registration and local review processes are common.', 'Confirm whether the municipality requires a permit or imposes other operating limits.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/ulster-county-ny
  '36111': { name: 'Ulster', score: 0.71, tier: 'High', permitRequired: 'Varies by town; local approval may be required', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level zoning and use restrictions may apply', regulations: ['Local rules are more structured than in the light-regulation upstate regions.', 'Check town code and any zoning overlays before purchase.', 'Verify whether the municipality restricts rental duration or occupancy.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/sullivan-county-ny
  '36093': { name: 'Sullivan', score: 0.67, tier: 'High', permitRequired: 'Varies by town', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Town-level rules may matter', regulations: ['The market remains more regulated than many upstate counties.', 'Town-level requirements can affect your ability to operate as a short-term rental.', 'Review local code before underwriting.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/columbia-county-ny
  '36021': { name: 'Columbia', score: 0.61, tier: 'High', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Local restrictions are not uniformly codified.', 'A buyer should verify town rules before relying on STR income.', 'Municipal enforcement and zoning interpretation can still matter.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/greene-county-ny
  '36039': { name: 'Greene', score: 0.58, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Rules are comparatively light, but local enforcement should still be checked.', 'Short-term rental use may be viable if zoning and use rules allow it.', 'Verify the exact town-level expectations before closing.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/saratoga-county-ny
  '36091': { name: 'Saratoga', score: 0.54, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The area is often more permissive than downstate markets.', 'Municipal awareness still matters, especially around zoning and event use.', 'Confirm the exact local standard before underwriting.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/warren-county-ny
  '36105': { name: 'Warren', score: 0.50, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Lake George-area rules can be more restrictive than surrounding communities.', 'Town and waterfront rules can affect rental operations.', 'Verify local law before relying on a short-term rental business plan.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/tompkins-county-ny
  '36109': { name: 'Tompkins', score: 0.47, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Rules are often lighter than in the metro corridor.', 'Local zoning still matters for property-level feasibility.', 'Check municipal permitting before assuming a simple STR path.'] },
  // Source: https://www3.erie.gov/environment/sites/www3.erie.gov.environment/files/2024-10/short-term-rental-regulation-2-per.pdf
  '36029': { name: 'Erie', score: 0.44, tier: 'Moderate', permitRequired: 'Yes — Erie County occupancy-tax rules and local registration can apply', ownerOccupancyRequired: 'No countywide rule found', nightCap: 'No countywide cap found', minimumStay: 'No countywide minimum found', zoningRestrictions: 'Buffalo and other municipalities may have local rules', regulations: ['Short-term rental rules are more permissive than downstate, but not uniform.', 'Check city or town-specific requirements before closing.', 'Operational flexibility may depend on parking, occupancy, and nuisance rules.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/monroe-county-ny
  '36055': { name: 'Monroe', score: 0.42, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The market is generally more accessible, but local oversight still matters.', 'Buyer should review zoning and permit details at the municipal level.', 'Some areas may impose limits on the number of nights or use type.'] },
  // Source: https://www.albanyny.gov/2268/Short-Term-Rentals
  '36001': { name: 'Albany', score: 0.40, tier: 'Moderate', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Rules are generally manageable but still worth reviewing.', 'Local permits and zoning rules can affect the business plan.', 'Confirm the municipality allows the intended rental model.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/schenectady-county-ny
  '36083': { name: 'Schenectady', score: 0.35, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The regulatory environment is usually lighter than downstate.', 'Still review local code for zoning and occupancy conditions.', 'A property may be viable, but municipal approval should be confirmed.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/niagara-county-ny
  '36063': { name: 'Niagara', score: 0.31, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Most markets are more flexible here than in the metro corridor.', 'Host responsibilities still depend on local ordinances.', 'Check whether the municipality has any transient-occupancy or nuisance rules.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/wayne-county-ny
  '36117': { name: 'Wayne', score: 0.28, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['This is a comparatively permissive area for short-term rentals.', 'Expect fewer barriers than in the metro counties.', 'Still review local zoning and property-use restrictions before purchase.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/delaware-county-ny
  '36025': { name: 'Delaware', score: 0.27, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['This can be a relatively flexible market for short-term rentals.', 'Local code and homeowner association rules may still matter.', 'Check whether the town treats the use as transient occupancy.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/franklin-county-ny
  '36033': { name: 'Franklin', score: 0.25, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['The regulatory burden is usually lower here than in metro counties.', 'Short-term rental use may be feasible with basic local compliance.', 'Review town rules and any HOA or deed restrictions before purchase.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/st-lawrence-county-ny
  '36089': { name: 'St. Lawrence', score: 0.24, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['Expect a relatively simple approval path in many communities.', 'Local zoning should still be checked to avoid surprises.', 'A strong property-level review matters more than statewide rules.'] },
  // Source: https://www.cityrulelookup.com/short-term-rentals/permit-requirements/washington-county-ny
  '36113': { name: 'Washington', score: 0.22, tier: 'Low', permitRequired: 'No local ordinance found — likely unregulated', ownerOccupancyRequired: 'No local ordinance found — likely unregulated', nightCap: 'No local ordinance found — likely unregulated', minimumStay: 'No local ordinance found — likely unregulated', zoningRestrictions: 'No local ordinance found — likely unregulated', regulations: ['This region is generally more permissive for short-term stays.', 'Local zoning and deed restrictions remain the main risk factors.', 'Confirm the parcel and building are suitable for the intended rental use.'] }
};

const details = document.getElementById('details');

function colorForScore(score) {
  const [r1, g1, b1] = [220, 38, 38];
  const [r2, g2, b2] = [255, 215, 0];
  const [r3, g3, b3] = [22, 163, 74];
  const mix = Math.max(0, Math.min(1, score));

  if (mix <= 0.5) {
    const blend = mix / 0.5;
    return `rgb(${Math.round(r1 + (r2 - r1) * blend)}, ${Math.round(g1 + (g2 - g1) * blend)}, ${Math.round(b1 + (b2 - b1) * blend)})`;
  }

  const blend = (mix - 0.5) / 0.5;
  return `rgb(${Math.round(r2 + (r3 - r2) * blend)}, ${Math.round(g2 + (g3 - g2) * blend)}, ${Math.round(b2 + (b3 - b2) * blend)})`;
}

function getTier(score) {
  if (score >= 0.8) return 'Very High';
  if (score >= 0.6) return 'High';
  if (score >= 0.4) return 'Moderate';
  return 'Low';
}

function describeScore(score) {
  if (score >= 0.8) return 'Very restrictive rules, often with strict permitting and local caps.';
  if (score >= 0.6) return 'Moderately restrictive, with notable local limits and review processes.';
  if (score >= 0.4) return 'Mixed approach with some local limits but more room for operation.';
  return 'Generally more permissive, with fewer barriers to short-term rentals.';
}

function defaultRulesForScore(score) {
  if (score >= 0.8) {
    return [
      'Expect strong local permit and registration requirements.',
      'Owner-occupancy or use restrictions may apply.',
      'Check neighborhood and zoning language early.'
    ];
  }
  if (score >= 0.6) {
    return [
      'Local oversight is meaningful and should be reviewed thoroughly.',
      'Permits and bedroom or occupancy limits may apply.',
      'Verify the municipality’s rules before relying on rental income.'
    ];
  }
  if (score >= 0.4) {
    return [
      'The county is usually more open to short-term rentals.',
      'Municipal zoning and nuisance rules still matter.',
      'Confirm the exact town rules before making a purchase decision.'
    ];
  }
  return [
    'This market is comparatively permissive for short-term rentals.',
    'Local zoning and HOA restrictions may still shape the operation.',
    'Confirm that the parcel and building support the intended use.'
  ];
}

function getCountyName(feature) {
  const props = feature.properties || {};
  return props.name || props.NAME || props.COUNTYNAME || props.County || 'County';
}

function getCountyMetadata(feature) {
  const fips = String(feature.id);
  const entry = countyData[fips];
  if (entry) {
    return {
      name: entry.name,
      score: entry.score,
      tier: entry.tier || getTier(entry.score),
      permitRequired: entry.permitRequired,
      ownerOccupancyRequired: entry.ownerOccupancyRequired,
      nightCap: entry.nightCap,
      minimumStay: entry.minimumStay,
      zoningRestrictions: entry.zoningRestrictions,
      regulations: entry.regulations || defaultRulesForScore(entry.score)
    };
  }

  const score = 0.2;
  return {
    name: getCountyName(feature),
    score,
    tier: 'Low',
    permitRequired: 'None known',
    ownerOccupancyRequired: 'No',
    nightCap: 'None known',
    minimumStay: 'None known',
    zoningRestrictions: 'No local ordinance — state law applies',
    regulations: defaultRulesForScore(score)
  };
}

function renderCountyDetails(metadata) {
  details.innerHTML = `
    <h2>${metadata.name}</h2>
    <p><strong>Stringency score:</strong> ${Math.round(metadata.score * 100)}/100</p>
    <p>${describeScore(metadata.score)}</p>
    <h3>Key buyer considerations</h3>
    <ul>
      ${metadata.regulations.map((rule) => `<li>${rule}</li>`).join('')}
    </ul>
  `;
}

function createTooltipContent(metadata) {
  const tierClass = metadata.tier.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `
    <div class="tooltip-header">
      <strong>${metadata.name}</strong>
      <span class="tooltip-badge tier-${tierClass}">${metadata.tier}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Permit Required</span>
      <span class="tooltip-value">${metadata.permitRequired}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Owner-Occupancy Required</span>
      <span class="tooltip-value">${metadata.ownerOccupancyRequired}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Night/Day Cap</span>
      <span class="tooltip-value">${metadata.nightCap}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Minimum Stay</span>
      <span class="tooltip-value">${metadata.minimumStay}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Zoning Restrictions</span>
      <span class="tooltip-value">${metadata.zoningRestrictions}</span>
    </div>
    <div class="tooltip-footer">Verify with local authorities before purchasing</div>
  `;
}

const map = L.map('map').setView([42.9, -75.5], 7);
const tooltip = L.DomUtil.create('div', 'county-tooltip');
tooltip.style.display = 'none';
map.getContainer().appendChild(tooltip);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

async function loadNewYorkCounties() {
  const response = await fetch('https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json');
  const geojson = await response.json();

  const nyFeatures = geojson.features.filter((feature) => String(feature.id).startsWith('36'));

  const countyLayer = L.geoJSON(nyFeatures, {
    style: (feature) => {
      const { score } = getCountyMetadata(feature);
      return {
        color: '#2d3748',
        weight: 1,
        fillColor: colorForScore(score),
        fillOpacity: 0.8
      };
    },
    onEachFeature: (feature, layer) => {
      const metadata = getCountyMetadata(feature);
      layer.on('mouseover', (event) => {
        renderCountyDetails(metadata);
        tooltip.innerHTML = createTooltipContent(metadata);
        tooltip.style.display = 'block';
        const size = map.getSize();
        const tooltipWidth = Math.min(300, size.x - 24);
        const tooltipHeight = tooltip.offsetHeight || 220;
        let left = event.containerPoint.x + 14;
        let top = event.containerPoint.y + 14;

        if (left + tooltipWidth > size.x - 12) {
          left = event.containerPoint.x - tooltipWidth - 14;
        }
        if (left < 12) {
          left = 12;
        }
        if (top + tooltipHeight > size.y - 12) {
          top = event.containerPoint.y - tooltipHeight - 14;
        }
        if (top < 12) {
          top = 12;
        }

        tooltip.style.maxWidth = `${tooltipWidth}px`;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
      });
      layer.on('mousemove', (event) => {
        const size = map.getSize();
        const tooltipWidth = Math.min(300, size.x - 24);
        const tooltipHeight = tooltip.offsetHeight || 220;
        let left = event.containerPoint.x + 14;
        let top = event.containerPoint.y + 14;

        if (left + tooltipWidth > size.x - 12) {
          left = event.containerPoint.x - tooltipWidth - 14;
        }
        if (left < 12) {
          left = 12;
        }
        if (top + tooltipHeight > size.y - 12) {
          top = event.containerPoint.y - tooltipHeight - 14;
        }
        if (top < 12) {
          top = 12;
        }

        tooltip.style.maxWidth = `${tooltipWidth}px`;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
      });
      layer.on('focus', () => renderCountyDetails(metadata));
      layer.on('click', () => renderCountyDetails(metadata));
      layer.on('mouseout', () => {
        tooltip.style.display = 'none';
        details.innerHTML = '<p>Hover a county to see the key short-term-rental rules and buyer considerations.</p>';
      });
    }
  }).addTo(map);

  map.fitBounds(countyLayer.getBounds());
  details.innerHTML = '<p>Hover a county to see the key short-term-rental rules and buyer considerations.</p>';
}

loadNewYorkCounties().catch((error) => {
  console.error('Unable to load county geography', error);
  details.innerHTML = '<p>We could not load the county shapes right now. Please try again later.</p>';
});
