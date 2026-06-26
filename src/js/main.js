const countyStringency = {
  '36005': { name: 'Bronx', score: 0.95 },
  '36047': { name: 'Kings', score: 0.95 },
  '36061': { name: 'New York', score: 0.95 },
  '36081': { name: 'Queens', score: 0.95 },
  '36085': { name: 'Richmond', score: 0.95 },
  '36059': { name: 'Nassau', score: 0.9 },
  '36103': { name: 'Suffolk', score: 0.85 },
  '36119': { name: 'Westchester', score: 0.8 },
  '36087': { name: 'Rockland', score: 0.75 },
  '36079': { name: 'Putnam', score: 0.7 },
  '36027': { name: 'Dutchess', score: 0.65 },
  '36071': { name: 'Orange', score: 0.6 },
  '36001': { name: 'Albany', score: 0.55 },
  '36029': { name: 'Erie', score: 0.45 },
  '36055': { name: 'Monroe', score: 0.45 },
  '36067': { name: 'Onondaga', score: 0.45 },
  '36083': { name: 'Schenectady', score: 0.4 },
  '36063': { name: 'Niagara', score: 0.35 },
  '36117': { name: 'Wayne', score: 0.3 },
  '36093': { name: 'Sullivan', score: 0.2 },
  '36101': { name: 'Steuben', score: 0.25 },
  '36037': { name: 'Genesee', score: 0.25 },
  '36025': { name: 'Delaware', score: 0.2 },
  '36033': { name: 'Franklin', score: 0.2 },
  '36089': { name: 'St. Lawrence', score: 0.2 },
  '36105': { name: 'Warren', score: 0.2 },
  '36113': { name: 'Washington', score: 0.2 }
};

const details = document.getElementById('details');

function colorForScore(score) {
  const [r1, g1, b1] = [220, 38, 38];
  const [r2, g2, b2] = [22, 163, 74];
  const mix = Math.max(0, Math.min(1, score));
  const r = Math.round(r1 + (r2 - r1) * mix);
  const g = Math.round(g1 + (g2 - g1) * mix);
  const b = Math.round(b1 + (b2 - b1) * mix);
  return `rgb(${r}, ${g}, ${b})`;
}

function describeScore(score) {
  if (score >= 0.8) return 'Very restrictive rules, often with strict permitting and local caps.';
  if (score >= 0.6) return 'Moderately restrictive, with notable local limits and review processes.';
  if (score >= 0.4) return 'Mixed approach with some local limits but more room for operation.';
  return 'Generally more permissive, with fewer barriers to short-term rentals.';
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
      score: entry.score
    };
  }

  return {
    name: getCountyName(feature),
    score: 0.5
  };
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
      layer.on('click', () => {
        details.innerHTML = `
          <h2>${metadata.name}</h2>
          <p><strong>Stringency score:</strong> ${Math.round(metadata.score * 100)}/100</p>
          <p>${describeScore(metadata.score)}</p>
        `;
      });
    }
  }).addTo(map);

  map.fitBounds(countyLayer.getBounds());
  details.innerHTML = '<p>Select a county to view its short-term rental rule profile.</p>';
}

loadNewYorkCounties().catch((error) => {
  console.error('Unable to load county geography', error);
  details.innerHTML = '<p>We could not load the county shapes right now. Please try again later.</p>';
});
