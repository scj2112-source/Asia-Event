// js/app.js
// Main application controller - wires together the map, charts, UI, and data manager

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Real-time Clock in Header
  function updateClock() {
    const clockEl = document.getElementById('headerClock');
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'medium',
        hour12: false
      });
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 2. Initialize UI Loading State
  UIManager.showLoading(true);

  try {
    // 3. Initialize Map Manager (connect map clicks to UI selection)
    await MapManager.init('map', (countryName) => {
      UIManager.selectCountry(countryName);
    });

    // 4. Initialize Chart Manager
    ChartManager.init('severityChart');

    // 5. Load Initial Data from APIs (ReliefWeb, ExchangeRate, OpenWeather, Google News RSS)
    await DataManager.init();

    // 6. Hook up the UI Manager filters
    UIManager.init((filters) => {
      // Data Query: Fetch events conforming to the filters
      const filteredEvents = DataManager.getEvents(filters);
      
      // Update UI components (sidebar items, lists, and KPI counters)
      UIManager.updateUI(filteredEvents);

      // Redraw charts with filtered datasets
      ChartManager.update(filteredEvents);

      // Redraw map overlays based on filtered threats
      MapManager.updateMap(filters);
      
      console.log(`Filters updated. Active events: ${filteredEvents.length}`);
    });

    // 7. Initial render pass
    const allEvents = DataManager.getEvents({});
    UIManager.updateUI(allEvents);
    ChartManager.update(allEvents);
    MapManager.updateMap({});

    // Update Last Updated Timestamp in Navbar
    const updatedTimeEl = document.getElementById('lastUpdatedTime');
    if (updatedTimeEl) {
      updatedTimeEl.textContent = DataManager.getLastUpdated() || "Just Now";
    }

    // Refresh layout sizing
    setTimeout(() => {
      MapManager.invalidateSize();
    }, 500);

  } catch (error) {
    console.error("Critical error during application initialization:", error);
  } finally {
    // 8. Turn off full-screen loader
    UIManager.showLoading(false);
  }

  // 9. Resize Listener for Leaflet container adjust
  window.addEventListener('resize', () => {
    MapManager.invalidateSize();
  });
});
