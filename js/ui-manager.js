// js/ui-manager.js
// Manages HTML rendering, event listeners, list filters, details panel slides, and settings modal (Korean Localized)

const UIManager = (() => {
  // Active Filter state
  const activeFilters = {
    product: 'All',
    severities: [],
    country: 'All',
    searchQuery: ''
  };

  let selectedCountryName = null;
  let onFilterChangedCallback = null;

  // Translate severity labels
  function translateSeverity(level) {
    switch (level) {
      case "Critical Risk": return "심각한 위험";
      case "High Impact": return "높은 영향";
      case "Medium Impact": return "보통 영향";
      case "Opportunity": return "기회 요인";
      default: return level;
    }
  }

  // Initialize UI hooks
  function initHooks(onFilterChanged) {
    onFilterChangedCallback = onFilterChanged;

    // 1. Hook up Product Category Filters
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', function () {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        activeFilters.product = this.getAttribute('data-product');
        triggerFilterChange();
      });
    });

    // 2. Hook up Severity Button Filters
    document.querySelectorAll('.severity-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const severity = this.getAttribute('data-severity');
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
          activeFilters.severities.push(severity);
        } else {
          activeFilters.severities = activeFilters.severities.filter(s => s !== severity);
        }
        triggerFilterChange();
      });
    });

    // 3. Close Detail Panel Button
    document.querySelector('.detail-close-btn').addEventListener('click', () => {
      closeDetailPanel();
    });

    // 4. Modal Settings toggles
    const settingsModal = document.getElementById('settingsModal');
    const openSettingsBtn = document.getElementById('openSettingsBtn');
    const closeSettingsBtn = document.getElementById('closeSettingsBtn');
    const cancelSettingsBtn = document.getElementById('cancelSettingsBtn');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    
    openSettingsBtn.addEventListener('click', () => {
      document.getElementById('weatherApiKeyInput').value = DataManager.getApiKey();
      document.getElementById('newsProxyInput').checked = DataManager.isNewsProxyEnabled();
      settingsModal.style.display = 'flex';
    });

    const closeModal = () => settingsModal.style.display = 'none';
    closeSettingsBtn.addEventListener('click', closeModal);
    cancelSettingsBtn.addEventListener('click', closeModal);

    saveSettingsBtn.addEventListener('click', async () => {
      const apiKey = document.getElementById('weatherApiKeyInput').value.trim();
      const proxyEnabled = document.getElementById('newsProxyInput').checked;
      
      DataManager.setApiKey(apiKey);
      DataManager.toggleNewsProxy(proxyEnabled);
      closeModal();
      
      showLoading(true);
      await DataManager.reload();
      showLoading(false);
      triggerFilterChange();
    });

    // 5. Search Bar Input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
      activeFilters.searchQuery = this.value.toLowerCase();
      triggerFilterChange();
    });

    // Close modal on background click
    window.addEventListener('click', (e) => {
      if (e.target === settingsModal) closeModal();
    });

    // 6. Reset Zoom Floating Button (Map Legends)
    document.getElementById('resetZoomBtn').addEventListener('click', () => {
      MapManager.resetZoom();
      closeDetailPanel();
    });
  }

  function triggerFilterChange() {
    if (onFilterChangedCallback) {
      onFilterChangedCallback(activeFilters);
    }
  }

  // Update country lists in the left sidebar
  function populateCountryList() {
    const listContainer = document.getElementById('countryList');
    listContainer.innerHTML = '';

    Object.keys(CONFIG.countries).forEach(cName => {
      const countryConf = CONFIG.countries[cName];
      const status = DataManager.getCountryStatus(cName, activeFilters);
      
      const item = document.createElement('div');
      item.className = `country-item ${selectedCountryName === cName ? 'selected' : ''}`;
      item.setAttribute('data-country', cName);

      let colorClass = 'medium';
      if (status.maxImpact === "Critical Risk") colorClass = 'critical';
      else if (status.maxImpact === "High Impact") colorClass = 'high';
      else if (status.maxImpact === "Opportunity") colorClass = 'opportunity';

      const tagClass = countryConf.phase === 1 ? 'tag-phase1' : 'tag-phase2';

      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          ${status.maxImpact !== 'None' ? `<span class="badge-dot ${colorClass}"></span>` : `<span class="badge-dot" style="background-color: #e2e8f0; border: 1px solid var(--border-color)"></span>`}
          <span>${cName}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="country-info-tag ${tagClass}">P${countryConf.phase}</span>
          ${status.eventsCount > 0 ? `<span style="font-weight:700; font-size:11px; background:#f1f5f9; padding: 2px 6px; border-radius:10px;">${status.eventsCount}</span>` : ''}
        </div>
      `;

      item.addEventListener('click', () => {
        selectCountry(cName);
      });

      listContainer.appendChild(item);
    });
  }

  // Handle selected country
  function selectCountry(countryName) {
    selectedCountryName = countryName;
    activeFilters.country = countryName;
    
    document.querySelectorAll('.country-item').forEach(item => {
      if (item.getAttribute('data-country') === countryName) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });

    MapManager.zoomToCountry(countryName);
    openDetailPanel(countryName);
    triggerFilterChange();
  }

  // Slide open Details Panel
  function openDetailPanel(countryName) {
    const panel = document.getElementById('detailPanel');
    const countryConf = CONFIG.countries[countryName];
    const metrics = DataManager.getCountryMetrics(countryName);
    
    // 1. Set Country Metadata Headers
    document.getElementById('detailCountryName').textContent = countryName;
    
    const phaseTag = document.getElementById('detailPhaseTag');
    phaseTag.className = `country-info-tag ${countryConf.phase === 1 ? 'tag-phase1' : 'tag-phase2'}`;
    phaseTag.textContent = `Phase ${countryConf.phase} 국가`;

    document.getElementById('detailCapital').textContent = countryConf.capital;
    document.getElementById('detailManager').textContent = countryConf.regionalManager;
    document.getElementById('detailPort').textContent = countryConf.primaryPort;

    // 2. Weather Display
    const weather = metrics.weather;
    document.getElementById('detailWeatherVal').innerHTML = `${weather.temp}°C, <span style="font-weight:normal; color:var(--text-medium);">${weather.desc}</span>`;
    document.getElementById('detailWeatherStat').textContent = `풍속: ${weather.wind} km/h | 습도: ${weather.humidity}%`;

    // 3. Exchange Rate Display
    const exchange = metrics.exchange;
    const rateText = `1 USD = ${exchange.rate.toLocaleString()} ${countryConf.currencyCode}`;
    const changeColor = parseFloat(exchange.change) < 0 ? 'var(--color-critical)' : 'var(--color-opportunity)';
    const arrow = parseFloat(exchange.change) < 0 ? '↓' : '↑';
    const changeText = `<span style="color: ${changeColor}; font-weight:700; margin-left: 6px;">${arrow} ${Math.abs(exchange.change)}%</span>`;
    document.getElementById('detailRateVal').innerHTML = rateText;
    document.getElementById('detailRateStat').innerHTML = `일일 환율 변동성: ${changeText}`;

    // 4. Render Event Cards
    renderEventCards(countryName);

    panel.classList.add('open');
    setTimeout(() => MapManager.invalidateSize(), 300);
  }

  function closeDetailPanel() {
    const panel = document.getElementById('detailPanel');
    panel.classList.remove('open');
    selectedCountryName = null;
    activeFilters.country = 'All';
    
    document.querySelectorAll('.country-item').forEach(item => item.classList.remove('selected'));
    
    triggerFilterChange();
    setTimeout(() => MapManager.invalidateSize(), 300);
  }

  // Render & Group event cards into 7 distinct sections
  function renderEventCards(countryName) {
    const cardsContainer = document.getElementById('detailCardsContainer');
    cardsContainer.innerHTML = '';

    const countryEvents = DataManager.getEvents(activeFilters).filter(e => e.country === countryName);
    
    const searchFiltered = countryEvents.filter(e => {
      if (!activeFilters.searchQuery) return true;
      return e.title.toLowerCase().includes(activeFilters.searchQuery) ||
             e.summary.toLowerCase().includes(activeFilters.searchQuery) ||
             e.recommendation.toLowerCase().includes(activeFilters.searchQuery) ||
             e.businessImpact.toLowerCase().includes(activeFilters.searchQuery);
    });

    if (searchFiltered.length === 0) {
      cardsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-light); font-size:13px;">
          <i class="fas fa-inbox" style="font-size: 24px; margin-bottom: 8px;"></i><br>
          필터 조건에 부합하는 활성 알림이 없습니다.
        </div>
      `;
      return;
    }

    const categories = [
      { name: "News", displayName: "일반 뉴스 및 업계 동향", icon: "fa-newspaper" },
      { name: "Weather", displayName: "기상 및 기후 통보", icon: "fa-cloud-showers-heavy" },
      { name: "Disaster", displayName: "자연재해 비상 경보", icon: "fa-exclamation-triangle" },
      { name: "Regulation", displayName: "정책 수립 및 규제 법안", icon: "fa-gavel" },
      { name: "Logistics", displayName: "물류 수송 및 통관 적체", icon: "fa-truck" },
      { name: "Currency", displayName: "환율 급변 및 금융 경제", icon: "fa-coins" },
      { name: "Competitor Activities", displayName: "경쟁사 판촉 및 마케팅 활동", icon: "fa-bullhorn" }
    ];

    categories.forEach(cat => {
      const catEvents = searchFiltered.filter(e => e.type === cat.name);
      
      if (catEvents.length > 0) {
        // Section Title in Korean
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'detail-section-title';
        sectionTitle.innerHTML = `<i class="fas ${cat.icon}"></i> ${cat.displayName} (${catEvents.length})`;
        cardsContainer.appendChild(sectionTitle);

        const groupContainer = document.createElement('div');
        groupContainer.className = 'event-cards-container';

        catEvents.forEach(ev => {
          const card = document.createElement('div');
          card.className = 'event-card';
          card.style.cursor = 'pointer';
          
          // Open the related article/link in a new tab on click
          card.addEventListener('click', () => {
            if (ev.link) {
              window.open(ev.link, '_blank');
            }
          });

          let severityClass = 'medium';
          if (ev.impactLevel === 'Critical Risk') severityClass = 'critical';
          else if (ev.impactLevel === 'High Impact') severityClass = 'high';
          else if (ev.impactLevel === 'Opportunity') severityClass = 'opportunity';

          const fridgeBadgeClass = ev.products.includes("Refrigerator") ? 'active' : '';
          const washerBadgeClass = ev.products.includes("Washing Machine") ? 'active' : '';

          card.innerHTML = `
            <div class="event-card-header">
              <div class="event-card-top">
                <span class="event-type-badge">${cat.displayName}</span>
                <span class="event-impact-badge ${severityClass}">${translateSeverity(ev.impactLevel)}</span>
              </div>
              <h4 class="event-card-title">
                ${ev.title}
                <i class="fas fa-external-link-alt" style="font-size: 10px; color: var(--text-light); margin-left: 4px; vertical-align: middle;"></i>
              </h4>
              <div class="event-card-meta">
                <span>출처: ${ev.source}</span>
                <span>작성일: ${ev.date}</span>
              </div>
            </div>
            <div class="event-card-body">
              ${ev.summary}
            </div>
            <hr class="event-card-separator">
            <div class="event-card-footer">
              <div class="product-badges">
                <span class="product-badge ${fridgeBadgeClass}"><i class="fas fa-snowflake"></i> 냉장고</span>
                <span class="product-badge ${washerBadgeClass}"><i class="fas fa-tint"></i> 세탁기</span>
              </div>
              <div class="impact-analysis-box ${severityClass}">
                <div class="impact-analysis-title">비즈니스 영향 분석</div>
                <div>${ev.businessImpact}</div>
              </div>
              <div class="recommendation-box">
                <div class="recommendation-title">영업 조치 대응안</div>
                <div>${ev.recommendation}</div>
              </div>
            </div>
          `;
          groupContainer.appendChild(card);
        });

        cardsContainer.appendChild(groupContainer);
      }
    });
  }

  // Update KPI counters on the left sidebar
  function updateKPIStats(filteredEvents) {
    const totalCount = filteredEvents.length;
    let criticalCount = 0;
    let highCount = 0;
    let opportunityCount = 0;

    filteredEvents.forEach(e => {
      if (e.impactLevel === "Critical Risk") criticalCount++;
      else if (e.impactLevel === "High Impact") highCount++;
      else if (e.impactLevel === "Opportunity") opportunityCount++;
    });

    document.getElementById('kpiTotal').textContent = totalCount + '건';
    document.getElementById('kpiCritical').textContent = criticalCount + '건';
    document.getElementById('kpiHigh').textContent = highCount + '건';
    document.getElementById('kpiOpportunity').textContent = opportunityCount + '건';
    
    const criticalValEl = document.getElementById('kpiCritical');
    if (criticalCount > 0) {
      criticalValEl.style.color = 'var(--color-critical)';
    } else {
      criticalValEl.style.color = 'var(--text-dark)';
    }
  }

  // Toggle spinner overlay
  function showLoading(show) {
    const spinner = document.getElementById('loadingOverlay');
    if (spinner) {
      spinner.style.display = show ? 'flex' : 'none';
    }
  }

  return {
    init: (onFilterChanged) => {
      initHooks(onFilterChanged);
    },
    updateUI: (filteredEvents) => {
      populateCountryList();
      updateKPIStats(filteredEvents);
      
      if (selectedCountryName) {
        renderEventCards(selectedCountryName);
      }
    },
    selectCountry: (countryName) => {
      selectCountry(countryName);
    },
    showLoading: (show) => {
      showLoading(show);
    }
  };
})();
