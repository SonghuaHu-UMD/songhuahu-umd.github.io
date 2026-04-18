---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
.research-page {
  --c-mob: #2980b9;
  --c-sus: #27ae60;
  --c-res: #e67e22;
  --c-hea: #c0392b;
  --c-mis: #8e44ad;
}
.research-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0 0 3em;
  padding: 1em 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.research-nav a {
  display: inline-block;
  padding: 0.4em 1em;
  border-radius: 999px;
  border: 1px solid #ddd;
  color: #555;
  font-size: 0.85em;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}
.research-nav a:hover {
  color: white;
  background: var(--hover, #2c3e50);
  border-color: var(--hover, #2c3e50);
}

.r-section {
  padding: 4em 0 2em;
  scroll-margin-top: 80px;
  border-top: 1px solid #eee;
}
.r-section:first-of-type { border-top: none; padding-top: 1em; }
.r-section .r-eyebrow {
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.5em;
}
.r-section h2 {
  font-size: 1.6em;
  font-weight: 400;
  letter-spacing: -0.01em;
  margin: 0 0 0.5em;
  color: #2c3e50;
  border: none;
  padding: 0;
}
.r-section .r-lead {
  color: #666;
  font-size: 1em;
  line-height: 1.65;
  margin-bottom: 2.5em;
}
.r-subhead {
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: var(--accent);
  margin: 2.5em 0 1.2em;
  padding-left: 0.8em;
  border-left: 3px solid var(--accent);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5em;
  margin-bottom: 1.5em;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  color: inherit;
}
.card-link {
  position: absolute;
  inset: 0;
  z-index: 1;
  text-indent: -9999em;
  overflow: hidden;
  white-space: nowrap;
}
.card-body a {
  position: relative;
  z-index: 2;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  border-color: var(--accent);
}
.card-img {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f5f5f5;
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.card:hover .card-img img { transform: scale(1.04); }
.card-body {
  padding: 1em 1.2em 1.3em;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.card-venue {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, white);
  padding: 0.25em 0.7em;
  border-radius: 4px;
  margin-bottom: 0.7em;
}
.card-text {
  color: #4a4a4a;
  font-size: 0.92em;
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 900px) {
  .card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 600px) {
  .r-section h2 { font-size: 1.4em; }
  .card-grid { grid-template-columns: 1fr; }
}
</style>

<div class="research-page">

<nav class="research-nav">
  <a href="#mobility"        style="--hover: var(--c-mob);">Mobility</a>
  <a href="#sustainability"  style="--hover: var(--c-sus);">Sustainability</a>
  <a href="#resilience"      style="--hover: var(--c-res);">Resilience</a>
  <a href="#health"          style="--hover: var(--c-hea);">Health</a>
  <a href="#beyond"          style="--hover: var(--c-mis);">Beyond</a>
</nav>

<!-- ========================================== MOBILITY ========================================== -->
<section class="r-section" id="mobility" style="--accent: var(--c-mob);">
  <div class="r-eyebrow">01 / Mobility</div>
  <h2>Human Mobility Modeling</h2>
  <p class="r-lead">
    Mobile devices generate vast spatiotemporal data on individual travel — far richer than traditional surveys.
    My work integrates these signals with travel-demand modeling: a unified pipeline for trip rosters,
    spatiotemporal AI for forecasting, and traffic simulation for fine-grained flow analysis.
  </p>

  <div class="r-subhead">Data-driven Travel Demand Modeling</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/OD2T3.png" alt="End-to-end mobility pipeline"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation</span>
        <p class="card-text">An end-to-end pipeline that turns mobile device location data into individual trip rosters — covering home/work identification, trip detection, mode imputation, population weighting, and validation — then aggregates them into multi-modal OD matrices.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/ODFLOW.png" alt="OD validation across cities"></div>
      <div class="card-body">
        <span class="card-venue">NetMob 2024</span>
        <p class="card-text">Can mobile-device OD data reproduce road-level traffic flow? We map mobile OD onto road networks via dynamic traffic assignment across 35 metros in Mexico, Colombia, Indonesia and India. Underperformance persists in low-penetration regions even after weighting.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF61.gif" alt="Traffic simulation animation"></div>
      <div class="card-body">
        <span class="card-venue">Ongoing</span>
        <p class="card-text">Integrating forecasted trip itineraries with micro (Vissim, SUMO), meso (DTALite), and agent-based simulators (MATSim) to enable fine-grained citywide traffic simulation driven by mobile location data.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">AI for Mobility Forecasting & Reasoning</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://github.com/SonghuaHu-UMD/MultiSTGraph" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF2.png" alt="Multi-ATGCN architecture"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation</span>
        <p class="card-text"><strong>Multi-ATGCN</strong> — a Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network for citywide multi-step OD flow prediction, with consistent gains over state-of-the-art baselines.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF16.gif" alt="Hierarchical activity prediction"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C</span>
        <p class="card-text">A hierarchical activity-based framework jointly predicting the activity, time, and location of each device's next trip. Loss functions borrowed from semantic segmentation handle severe class imbalance over 18,000+ residents.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856423001635" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF12.png" alt="Explainable ML comparison"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A</span>
        <p class="card-text">Using nationwide CBG-level mobile-device trip flows as a travel-demand proxy, we compare 48 explainable ML models and interpretation techniques, documenting strong nonlinearities, threshold and interaction effects.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/LLMEvent.png" alt="LLM event-aware prediction"></div>
      <div class="card-body">
        <span class="card-venue">Ongoing</span>
        <p class="card-text">Curating 40+ event types from social media to forecast event-driven mobility shifts. With LLMs (vanilla GPT-4o + in-context learning), we predict road traffic and community travel demand changes at MAPE 15.12%.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== SUSTAINABILITY ========================================== -->
<section class="r-section" id="sustainability" style="--accent: var(--c-sus);">
  <div class="r-eyebrow">02 / Sustainability</div>
  <h2>Transport Emission Reduction</h2>
  <p class="r-lead">
    Transport emissions remain a major source of greenhouse gases and air pollutants.
    My work develops cost-effective methods to monitor and predict large-scale emissions,
    advances vehicle electrification, and evaluates urban policies — speed limits, demand management, active travel.
  </p>

  <div class="r-subhead">Data-driven Emission Inventory</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/camera0.gif" alt="Vehicle classification dataset"></div>
      <div class="card-body">
        <span class="card-venue">Under Review</span>
        <p class="card-text">First benchmark of 10,000 vehicle images aligned with MOVES source types, cropped from ~800 NYC traffic cameras and labeled via GPT-4o + human validation. ConvNeXt achieves 92.9% accuracy among 10 classifiers.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.nature.com/articles/s41893-026-01797-9" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Signal.png" alt="Signal-aware emission framework"></div>
      <div class="card-body">
        <span class="card-venue">Nature Sustainability</span>
        <p class="card-text">A ubiquitous data-driven framework for city-scale traffic emission estimation using camera videos and mobile phone data. Inferring directional signal timing reveals PM and NOx emissions rise 40–60% on average when stops-and-goes are properly modeled.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856425000576" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/ZONE301.png" alt="ZONE 30 emission analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A</span>
        <p class="card-text">Quantifying city-wide effects of 30 km/h speed limits in Milan via 3.4 million driving trips. Aggregate emission changes are modest (0.6–2.7%), but vary substantially across space and time, peaking on cross-zone trips.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/GEMINI.png" alt="Digital Twin emission platform"></div>
      <div class="card-body">
        <span class="card-venue">J. Intelligent &amp; Connected Vehicles</span>
        <p class="card-text">A Digital Twin platform for road traffic emission nowcasting and forecasting. Integrating online repositories with IoT sensors, demonstrated for Kista, Stockholm via 3D interactive visualization.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Vehicle Electrification & Sharing</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920919311058" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/SharedEV.png" alt="Shared EV simulation"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D</span>
        <p class="card-text">Discrete-event simulation quantifies how battery capacity affects shared electric vehicle adoption. Constrained capacity hurts both user satisfaction and vehicle utilization; faster charging and larger range mitigate.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVBus.jpg" alt="Dynamic wireless charging buses"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C</span>
        <p class="card-text">A bi-level optimization for dynamic wireless charging of battery electric buses: strategic facility deployment and battery sizing, plus tactical charging scheduling under time-of-use tariffs.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/9034087" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVCARD.jpg" alt="EVCARD vehicle selection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSM</span>
        <p class="card-text">Five million transactions from EVCARD reveal users avoid older, smaller, pricier vehicles. State of charge dominates: users tend to be "greedy," choosing max-SoC vehicles even for short trips.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== RESILIENCE ========================================== -->
<section class="r-section" id="resilience" style="--accent: var(--c-res);">
  <div class="r-eyebrow">03 / Resilience</div>
  <h2>Resilient Mobility &amp; Community</h2>
  <p class="r-lead">
    Natural disasters, pandemics, and extreme weather profoundly disrupt human mobility.
    My work quantifies travel patterns before, during, and after such disruptions —
    with particular attention to accessibility inequities and resilience disparities in underserved communities.
  </p>

  <div class="r-subhead">Multi-modal Travel Demand Resilience</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF11.png" alt="Pandemic mobility tracker"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C</span>
        <p class="card-text">Tracking US pandemic-era mobility via 150M+ monthly active mobile devices: trips per person, person-miles traveled, share staying home. Updated daily on a public <a href="https://data.covid.umd.edu/">platform</a>.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920920308397" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF33.png" alt="Transit ridership decline"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D</span>
        <p class="card-text">20 years of Chicago transit ridership analyzed via Bayesian structural time series to isolate the pandemic's causal impact. Sharpest declines in commercial areas and white, educated, high-income neighborhoods.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321000508" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/bikeshare.png" alt="Chicago bikesharing patterns"></div>
      <div class="card-body">
        <span class="card-venue">JTG</span>
        <p class="card-text">Chicago bikesharing across the pandemic, benchmarked against transit/driving/walking. Bikesharing was the most resilient mode — yet stark socioeconomic inequities surfaced in high-income station catchments.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2020.0344" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF3.png" alt="Stay-at-home mobility floor"></div>
      <div class="card-body">
        <span class="card-venue">J. R. Soc. Interface</span>
        <p class="card-text">A spontaneous mobility reduction preceded government mandates and a "floor" effect emerged. State-level stay-at-home policies accounted for only ~5% of the total mobility reduction.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Road Network Traffic Resilience</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1366554525006568" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/PartE.jpg" alt="Network resilience survey"></div>
      <div class="card-body">
        <span class="card-venue">TR Part E</span>
        <p class="card-text">A comprehensive survey of multi-modal urban transport network resilience — modeling, evaluation, optimization across road, transit, and shared mobility systems.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/8569639" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Flood.png" alt="Urban flood detection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSC</span>
        <p class="card-text">Fusing social media posts, precipitation, and traffic flow to detect urban road flooding in Shenzhen. Achieves 68–90% detection rate with only 1.5–2% false alarm.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2212420924005168" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/weatherroad.png" alt="Weather impact on traffic"></div>
      <div class="card-body">
        <span class="card-venue">IJDRR</span>
        <p class="card-text">Comparing passive mobile data vs. active Waze reports for monitoring extreme weather impact. Active reports underestimate severity — when conditions worsen, fewer users go out to "sense."</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== HEALTH ========================================== -->
<section class="r-section" id="health" style="--accent: var(--c-hea);">
  <div class="r-eyebrow">04 / Health</div>
  <h2>Mobility, Epidemiology &amp; Health Disparity</h2>
  <p class="r-lead">
    The COVID-19 pandemic underscored the tight coupling between human mobility and infectious disease dynamics.
    My work integrates econometric, epidemiological, and simulation models to disentangle causal relationships
    among mobility, public policies, vaccination, and virus transmission.
  </p>

  <div class="r-subhead">Mobility, Disease & Disparity</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.pnas.org/doi/abs/10.1073/pnas.2010836117" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF43.png" alt="PNAS mobility-infection study"></div>
      <div class="card-body">
        <span class="card-venue">PNAS</span>
        <p class="card-text">Quantifying nationwide changes in mobility inflow at the pandemic's onset, modeling its time-varying relationship with infection rates — substantially stronger in partially reopened regions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2210670721007721" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/racial.jpg" alt="Health disparity analysis"></div>
      <div class="card-body">
        <span class="card-venue">SCS</span>
        <p class="card-text">Linking COVID-19 outcomes to demographics, occupation, and partisanship. A structural inequality emerges: social distancing is a "privilege" of advantaged groups; disadvantaged communities bear disproportionate burdens.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0259803" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/raceplos.png" alt="Mediation analysis"></div>
      <div class="card-body">
        <span class="card-venue">PLOS ONE</span>
        <p class="card-text">SEM on 4.4M POI geo-tracking data: mobility mediates infection rates but not case-fatality, with substantial variation across racial/ethnic compositions.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Mobility & Vaccination</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X22009471" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF41.png" alt="Vaccine hesitancy study"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine</span>
        <p class="card-text">Mediation analysis: stated vaccine hesitancy alone cannot fully explain US vaccination disparities — challenging the dominant narrative and pointing to structural access barriers.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X23006175" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF4.png" alt="Vaccination Omicron analysis"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine</span>
        <p class="card-text">Two years of US county data on vaccination, mobility, and outcomes. Vaccine effectiveness against case rates diminished during Omicron, yet protection on case-fatality persisted. NIH-funded ABM extension underway.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== BEYOND ========================================== -->
<section class="r-section" id="beyond" style="--accent: var(--c-mis);">
  <div class="r-eyebrow">05 / Beyond</div>
  <h2>Other Transportation Studies</h2>
  <p class="r-lead">
    Beyond my core themes, I work across travel demand management, public perception analytics,
    shared mobility, and multimodal integration.
  </p>

  <div class="r-subhead">Transportation Economics</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856424001939" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/incentrip.png" alt="incenTrip platform"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A</span>
        <p class="card-text">As technical lead of <a href="https://www.mdot.maryland.gov/tso/pages/Index.aspx?PageId=33">incenTrip</a> — the first nationwide incentive-based travel demand management app — designing personalized dynamic incentives for mode switching, carpooling, and off-peak travel.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X21002382" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/churn.jpg" alt="Customer churn analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C</span>
        <p class="card-text">4M+ coupons analyzed via extended Cox proportional hazards. Coupon effectiveness peaks early and declines after ~130 days; front-loading new-user incentives maximizes short-term revenue but raises fairness concerns.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Public Perception from Social Media</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264275126000983" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/parking.png" alt="Parking sentiment analysis"></div>
      <div class="card-body">
        <span class="card-venue">Cities</span>
        <p class="card-text">5M parking-related Google Maps reviews across 1.1M US POIs. BERT classifies sentiment: restaurants are most negative; denser, lower-income urban areas show consistently negative perceptions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0198971525000821" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/access_framework.png" alt="Accessibility sentiment"></div>
      <div class="card-body">
        <span class="card-venue">CEUS</span>
        <p class="card-text">Llama 3 with LoRA fine-tuning measures public accessibility sentiment from nationwide Google Maps reviews. Older, more educated areas express more negativity; disability prevalence alone shows no clear association.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">MaaS & Shared Mobility</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321003240" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF52.jpg" alt="Bike-and-ride integration"></div>
      <div class="card-body">
        <span class="card-venue">JTG</span>
        <p class="card-text">Shanghai dockless bikesharing evaluated for bike-and-ride integration with metro. Land-use mix correlates with BnR trips only beyond a 1.5 km buffer; larger operators get more BnR trips but no higher per-bike utilization.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920918306448" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/evcard.png" alt="Carsharing optimization"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D</span>
        <p class="card-text">Station-level booking and turnover analysis for carsharing optimization. Operators should target underserved areas; carsharing competes best 1.2–2.4 km from bus stops; geographically differentiated quotas help fleet management.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Escooter.png" alt="E-scooter vs bikesharing"></div>
      <div class="card-body">
        <span class="card-venue">JPER</span>
        <p class="card-text">Comparing e-scooter sharing vs. docked bikesharing usage with generalized additive mixed models. Both succeed in dense, young, higher-income areas — but a one-sided competitive relationship has emerged, with e-scooters surpassing bikes.</p>
      </div>
    </div>

  </div>
</section>

</div>
