// js/map-manager.js
// Handles map rendering, country boundaries, color codes, pulsing pins, and zoom effects (Korean Localized)

const MapManager = (() => {
  let mapInstance = null;
  let polygonLayers = {}; // Key: countryName, Value: L.polygon/L.geoJSON
  let markerLayers = {};  // Key: countryName, Value: L.marker
  let selectCallback = null;
  
  // Real-world high-fidelity boundaries state
  let worldGeoJson = null;
  const geoJsonUrl = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson';

  // Map risk level to color codes
  function getColorForLevel(level) {
    switch (level) {
      case "Critical Risk": return "#ef4444";     // 🔴
      case "High Impact": return "#f97316";       // 🟠
      case "Medium Impact": return "#eab308";     // 🟡
      case "Opportunity": return "#22c55e";       // 🟢
      default: return "#94a3b8";                  // Gray/None
    }
  }

  // Translate severity levels to Korean for tooltips
  function translateLevel(level) {
    switch (level) {
      case "Critical Risk": return "🔴 심각한 위험 (Critical)";
      case "High Impact": return "🟠 높은 영향 (High)";
      case "Medium Impact": return "🟡 보통 영향 (Medium)";
      case "Opportunity": return "🟢 기회 요인 (Opportunity)";
      default: return "알림 없음 (None)";
    }
  }

  // Get pulse class for custom Leaflet marker
  function getPulseClass(level) {
    switch (level) {
      case "Critical Risk": return "pulse-critical";
      case "High Impact": return "pulse-high";
      case "Medium Impact": return "pulse-medium";
      case "Opportunity": return "pulse-opportunity";
      default: return "";
    }
  }

  // Fetch detailed world map polygons from CDN
  async function loadGeoJson() {
    try {
      const response = await fetch(geoJsonUrl);
      if (!response.ok) throw new Error('GeoJSON fetch failed');
      worldGeoJson = await response.json();
      console.log('Real world country borders successfully loaded.');
    } catch (error) {
      console.warn('Could not load detailed world borders, using fallback simplified vectors:', error);
    }
  }

  // Draw or update a country overlay on the map
  function drawCountry(countryName, countryConf, status, activeFilters) {
    const color = getColorForLevel(status.maxImpact);
    const fillOpacity = status.maxImpact === "None" ? 0.05 : 0.22;

    // 1. Draw Country Boundary Polygons
    if (polygonLayers[countryName]) {
      // Update existing layer style
      polygonLayers[countryName].setStyle({
        fillColor: color,
        fillOpacity: fillOpacity,
        color: status.maxImpact === "None" ? "#cbd5e1" : color
      });
    } else {
      // Try to find matching feature in the high-fidelity world GeoJSON
      let matchingFeature = null;
      if (worldGeoJson && worldGeoJson.features) {
        const engName = countryConf.englishName.toLowerCase();
        matchingFeature = worldGeoJson.features.find(f => {
          const prop = f.properties;
          const name = (prop.name || prop.NAME || prop.admin || prop.ADMIN || "").toLowerCase();
          
          return name === engName || 
                 (engName === "vietnam" && name.includes("viet")) ||
                 (engName === "taiwan" && name.includes("taiwan")) ||
                 (engName === "china" && name === "china") ||
                 (engName === "philippines" && name.includes("philippines")) ||
                 (engName === "singapore" && name.includes("singapore"));
        });
      }

      let boundaryLayer = null;

      if (matchingFeature) {
        // Draw using high-fidelity GeoJSON border
        boundaryLayer = L.geoJSON(matchingFeature, {
          style: {
            fillColor: color,
            fillOpacity: fillOpacity,
            color: status.maxImpact === "None" ? "#cbd5e1" : color,
            weight: 1.5,
            className: 'map-polygon-normal'
          }
        }).addTo(mapInstance);
      } else {
        // Fallback to simplified local coordinates from config
        const boundaryCoords = countryConf.polygon;
        boundaryLayer = L.polygon(boundaryCoords, {
          fillColor: color,
          fillOpacity: fillOpacity,
          color: status.maxImpact === "None" ? "#cbd5e1" : color,
          weight: 1.5,
          className: 'map-polygon-normal'
        }).addTo(mapInstance);
      }

      // Mouse hover and click events
      boundaryLayer.on('mouseover', function (e) {
        this.setStyle({
          fillOpacity: status.maxImpact === "None" ? 0.2 : 0.45,
          weight: 2.5
        });
      });

      boundaryLayer.on('mouseout', function (e) {
        this.setStyle({
          fillOpacity: fillOpacity,
          weight: 1.5
        });
      });

      boundaryLayer.on('click', function () {
        zoomToCountry(countryName);
        if (selectCallback) selectCallback(countryName);
      });

      polygonLayers[countryName] = boundaryLayer;
    }

    // Bind dynamic tooltips in Korean
    const tooltipText = `
      <div style="font-family: var(--font-primary); padding: 4px;">
        <strong style="font-family: var(--font-display); font-size: 13px;">${countryName}</strong><br>
        <span style="color: var(--text-medium); font-size: 11px;">활성 알림 수: <strong>${status.eventsCount}개</strong></span><br>
        <span style="color: ${color}; font-weight: 700; font-size: 11px;">상태: ${translateLevel(status.maxImpact)}</span>
      </div>
    `;
    polygonLayers[countryName].bindTooltip(tooltipText, {
      sticky: true,
      direction: 'top',
      opacity: 0.95
    });

    // 2. Draw Center Pulse Markers
    const markerColor = getColorForLevel(status.maxImpact);
    const pulseClass = getPulseClass(status.maxImpact);
    const centerPoint = countryConf.center;

    // Custom DivIcon representing a pulsing indicator pin
    const pulseIcon = L.divIcon({
      className: `leaflet-pulse-icon ${pulseClass}`,
      html: `<div style="width: 14px; height: 14px; background-color: ${markerColor}; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    if (markerLayers[countryName]) {
      markerLayers[countryName].setLatLng(centerPoint);
      markerLayers[countryName].setIcon(pulseIcon);
    } else {
      const marker = L.marker(centerPoint, { icon: pulseIcon }).addTo(mapInstance);
      
      marker.on('click', function () {
        zoomToCountry(countryName);
        if (selectCallback) selectCallback(countryName);
      });

      marker.bindTooltip(tooltipText, {
        sticky: true,
        direction: 'top',
        opacity: 0.95
      });

      markerLayers[countryName] = marker;
    }
  }

  // Zoom to country bounds or center
  function zoomToCountry(countryName) {
    const countryConf = CONFIG.countries[countryName];
    if (countryConf && mapInstance) {
      const zoomLevel = countryConf.zoom;
      mapInstance.setView(countryConf.center, zoomLevel, {
        animate: true,
        duration: 1.2
      });
    }
  }

  // Reset map view to center on broader Asia Pacific (covering China down to NZ)
  function resetZoom() {
    if (mapInstance) {
      mapInstance.setView([5.0, 115.0], 3, {
        animate: true,
        duration: 1.0
      });
    }
  }

  return {
    init: async (elementId, onCountrySelected) => {
      selectCallback = onCountrySelected;

      // Centered on Asia-Pacific to include China, Australia, and New Zealand
      mapInstance = L.map(elementId, {
        zoomControl: false,
        attributionControl: true
      }).setView([5.0, 115.0], 3);

      L.control.zoom({ position: 'topright' }).addTo(mapInstance);

      // Load CartoDB Positron Light Tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(mapInstance);

      // Async fetch real-world boundaries
      await loadGeoJson();
      
      console.log('MapManager successfully initialized.');
    },

    updateMap: (filters = {}) => {
      if (!mapInstance) return;

      Object.keys(CONFIG.countries).forEach(cName => {
        const countryConf = CONFIG.countries[cName];
        const status = DataManager.getCountryStatus(cName, filters);
        drawCountry(cName, countryConf, status, filters);
      });
    },

    zoomToCountry: (countryName) => {
      zoomToCountry(countryName);
    },

    resetZoom: () => {
      resetZoom();
    },

    invalidateSize: () => {
      if (mapInstance) mapInstance.invalidateSize();
    }
  };
})();
