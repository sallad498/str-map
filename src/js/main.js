const countyStringency = {
  '36005': { name: 'Bronx', score: 0.95, regulations: ['Strict local permitting and registration requirements.', 'Most short-term uses are heavily restricted by local law.', 'Verify whether a host registration and occupancy cap applies before purchasing.'] },
  '36047': { name: 'Kings', score: 0.95, regulations: ['Very restrictive short-term rental environment.', 'Expect tight local oversight, permit hurdles, and possible enforcement risk.', 'Buyer due diligence should confirm current zoning and host registration requirements.'] },
  '36061': { name: 'New York', score: 0.95, regulations: ['One of the most restrictive markets in the state.', 'Check the building and host registration rules before relying on rental income.', 'Local rules can change quickly, so review current enforcement guidance closely.'] },
  '36081': { name: 'Queens', score: 0.95, regulations: ['Local permitting and registration requirements are significant.', 'Many properties will face extra scrutiny for short-term rentals.', 'Confirm whether the specific building and neighborhood permit short-term stays.'] },
  '36085': { name: 'Richmond', score: 0.95, regulations: ['Expect a challenging approval path for short-term rentals.', 'Host registration and dwelling-use rules should be reviewed carefully.', 'Verify whether transient occupancy is allowed on the parcel or in the building.'] },
  '36059': { name: 'Nassau', score: 0.88, regulations: ['Local rules tend to favor tighter oversight and permit controls.', 'Buyer should confirm whether the property is in an area that limits short-term rentals.', 'Check for minimum-stay or occupancy rules that can affect yield.'] },
  '36103': { name: 'Suffolk', score: 0.84, regulations: ['Expect a mix of local permit rules and neighborhood restrictions.', 'Short-term stays may be limited by specific town-level policy.', 'Review town code before treating a property as a straightforward STR investment.'] },
  '36119': { name: 'Westchester', score: 0.79, regulations: ['County and town rules can be strict around transient occupancy.', 'Host registration and local review processes are common.', 'Confirm whether the municipality requires a permit or imposes other operating limits.'] },
  '36087': { name: 'Rockland', score: 0.72, regulations: ['Restrictions are generally more formal than in upstate markets.', 'Local permitting and zoning compliance should be checked upfront.', 'Expect more scrutiny around occupancy and rental duration.'] },
  '36079': { name: 'Putnam', score: 0.67, regulations: ['Municipal oversight can be meaningful for buyer underwriting.', 'Short-term operation may depend on local zoning and permit rules.', 'A local attorney or broker review is worth doing early.'] },
  '36027': { name: 'Dutchess', score: 0.61, regulations: ['Rules are mixed but investor caution is still advisable.', 'Town-level restrictions can materially affect operating flexibility.', 'Check for permit requirements and possible neighborhood limitations.'] },
  '36071': { name: 'Orange', score: 0.56, regulations: ['The market is more flexible than downstate but still regulated.', 'Buyer should verify town rules, occupancy limits, and any permit requirements.', 'Revenue assumptions should reflect the local approval process.'] },
  '36001': { name: 'Albany', score: 0.5, regulations: ['Rules are generally manageable but still worth reviewing.', 'Local permits and zoning rules can affect the business plan.', 'Confirm the municipality allows the intended rental model.'] },
  '36029': { name: 'Erie', score: 0.47, regulations: ['Short-term rental rules are more permissive than downstate, but not uniform.', 'Check city or town-specific requirements before closing.', 'Operational flexibility may depend on parking, occupancy, and nuisance rules.'] },
  '36055': { name: 'Monroe', score: 0.45, regulations: ['The market is generally more accessible, but local oversight still matters.', 'Buyer should review zoning and permit details at the municipal level.', 'Some areas may impose limits on the number of nights or use type.'] },
  '36067': { name: 'Onondaga', score: 0.43, regulations: ['Rules are moderately permissive, but not always uniform.', 'Local compliance matters more than a single statewide rule.', 'Verify if the specific municipality restricts short-term rental use.'] },
  '36083': { name: 'Schenectady', score: 0.4, regulations: ['The regulatory environment is usually lighter than downstate.', 'Still review local code for zoning and occupancy conditions.', 'A property may be viable, but municipal approval should be confirmed.'] },
  '36063': { name: 'Niagara', score: 0.37, regulations: ['Most markets are more flexible here than in the metro corridor.', 'Host responsibilities still depend on local ordinances.', 'Check whether the municipality has any transient-occupancy or nuisance rules.'] },
  '36117': { name: 'Wayne', score: 0.33, regulations: ['This is a comparatively permissive area for short-term rentals.', 'Expect fewer barriers than in the metro counties.', 'Still review local zoning and property-use restrictions before purchase.'] },
  '36093': { name: 'Sullivan', score: 0.31, regulations: ['The area is often viewed as more permissive for weekend getaways.', 'Local zoning can still influence whether a short-term use is allowed.', 'Review the exact town rules before underwriting rental income.'] },
  '36101': { name: 'Steuben', score: 0.29, regulations: ['Regulation is usually lighter in this region.', 'The main concern is local zoning and any nuisance enforcement history.', 'A compliant operation may still require municipal approval.'] },
  '36037': { name: 'Genesee', score: 0.28, regulations: ['Rules are generally light in this part of the state.', 'Limitations are more likely to come from local zoning than statewide law.', 'Confirm the municipality allows short-term rental operations on the parcel.'] },
  '36025': { name: 'Delaware', score: 0.27, regulations: ['This can be a relatively flexible market for short-term rentals.', 'Local code and homeowner association rules may still matter.', 'Check whether the town treats the use as transient occupancy.'] },
  '36033': { name: 'Franklin', score: 0.25, regulations: ['The regulatory burden is usually lower here than in metro counties.', 'Short-term rental use may be feasible with basic local compliance.', 'Review town rules and any HOA or deed restrictions before purchase.'] },
  '36089': { name: 'St. Lawrence', score: 0.24, regulations: ['Expect a relatively simple approval path in many communities.', 'Local zoning should still be checked to avoid surprises.', 'A strong property-level review matters more than statewide rules.'] },
  '36105': { name: 'Warren', score: 0.23, regulations: ['The market is often favorable for short-term rentals in recreational areas.', 'Hoteliers and local ordinances may still impose restrictions.', 'Check the municipality’s transient occupancy policy before buying.'] },
  '36113': { name: 'Washington', score: 0.22, regulations: ['This region is generally more permissive for short-term stays.', 'Local zoning and deed restrictions remain the main risk factors.', 'Confirm the parcel and building are suitable for the intended rental use.'] }
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
  const entry = countyStringency[fips];
  if (entry) {
    return {
      name: entry.name,
      score: entry.score,
      regulations: entry.regulations || defaultRulesForScore(entry.score)
    };
  }

  const score = 0.5;
  return {
    name: getCountyName(feature),
    score,
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

const map = L.map('map').setView([42.9, -75.5], 7);

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
      layer.bindTooltip(`${metadata.name}: ${Math.round(metadata.score * 100)}/100`);
      layer.on('mouseover', () => renderCountyDetails(metadata));
      layer.on('focus', () => renderCountyDetails(metadata));
      layer.on('click', () => renderCountyDetails(metadata));
      layer.on('mouseout', () => {
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
