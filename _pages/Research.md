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
  margin: 0 -1em 3em;
  padding: 0.8em 1em;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
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
  font-size: 1.25em;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.6em;
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
.card-img img,
.card-img video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.card:hover .card-img img,
.card:hover .card-img video { transform: scale(1.04); }
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

#back-to-top {
  position: fixed;
  bottom: 1.2em;
  right: 1.2em;
  z-index: 100;
  width: 2.6em;
  height: 2.6em;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  color: #444;
  font-size: 1.1em;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease, background 0.15s ease;
}
#back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
#back-to-top:hover { background: #f5f5f5; }
</style>

<script>
  (function () {
    function init() {
      var btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '&#8593;';
      btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.body.appendChild(btn);
      window.addEventListener('scroll', function () {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
      }, { passive: true });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else { init(); }
  })();
</script>

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
  <p class="r-lead">
    Mobile devices generate vast spatiotemporal data on individual travel — far richer than traditional surveys.
    My work integrates these signals with travel-demand modeling: a unified pipeline for trip rosters,
    spatiotemporal AI for forecasting, and traffic simulation for fine-grained flow analysis.
  </p>

  <div class="r-subhead">Data-driven Travel Demand Modeling</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/FF61.mp4" aria-label="Traffic simulation animation"></video></div>
      <div class="card-body">
        <span class="card-venue">Ongoing · 2026</span>
        <p class="card-text">An <strong>LLM-driven</strong> agentic framework that turns forecasted trip itineraries into executable scenarios for micro (Vissim, SUMO), meso (DTALite), and agent-based simulators (MATSim). LLMs orchestrate tool selection, parameter calibration, and behavioral plan generation, enabling fine-grained citywide traffic simulation from mobile location data.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/ODFLOW.png" alt="OD validation across cities"></div>
      <div class="card-body">
        <span class="card-venue">NetMob 2024</span>
        <p class="card-text">Can mobile-device OD data reproduce road-level traffic flow? We map mobile OD onto road networks via dynamic traffic assignment across 35 metros in Mexico, Colombia, Indonesia, and India, finding persistent underperformance in low-penetration regions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/OD2T3.png" alt="End-to-end mobility pipeline"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation · 2023</span>
        <p class="card-text">An end-to-end pipeline turns mobile device location data into individual trip rosters via home/work identification, trip detection, mode imputation, population weighting, and validation. Rosters aggregate into multi-modal OD matrices at flexible spatiotemporal resolutions.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">AI for Mobility Forecasting & Reasoning</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://github.com/SonghuaHu-UMD/MultiSTGraph" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF2.png" alt="Multi-ATGCN architecture"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation · 2023</span>
        <p class="card-text"><strong>Multi-ATGCN</strong>, a Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network for citywide multi-step OD flow prediction, achieves consistent accuracy gains over state-of-the-art baselines on two real-world datasets.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856423001635" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF12.png" alt="Explainable ML comparison"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2023</span>
        <p class="card-text">Treating nationwide CBG-level mobile-device trip flows as a travel-demand proxy, we benchmark 48 explainable ML models and interpretation techniques, documenting strong nonlinearities, threshold effects, and feature interactions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/FF16.mp4" aria-label="Hierarchical activity prediction"></video></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2022</span>
        <p class="card-text">A hierarchical activity-based framework jointly predicts the activity, time, and location of each device's next trip. Loss functions borrowed from semantic segmentation handle severe class imbalance across 18,000+ residents at county scale.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== SUSTAINABILITY ========================================== -->
<section class="r-section" id="sustainability" style="--accent: var(--c-sus);">
  <div class="r-eyebrow">02 / Sustainability</div>
  <p class="r-lead">
    Transport emissions remain a major source of greenhouse gases and air pollutants.
    My work develops cost-effective methods to monitor and predict large-scale emissions,
    advances vehicle electrification, and evaluates urban policies — speed limits, demand management, active travel.
  </p>

  <div class="r-subhead">Data-driven Emission Inventory</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.researchsquare.com/article/rs-7256883/v1" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/camera0.mp4" aria-label="Camera-based vehicular emission estimation"></video></div>
      <div class="card-body">
        <span class="card-venue">Under Review · 2026</span>
        <p class="card-text">Computer vision maps vehicle-level emissions from urban traffic video. A 2.2M-image dataset classifies 4,923 car models, and per-vehicle pollutants are estimated via a modified COPERT factor incorporating velocity and acceleration extracted through vehicle tracking.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.nature.com/articles/s41893-026-01797-9" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/s9-policy.mp4" aria-label="Signal-aware emission framework"></video></div>
      <div class="card-body">
        <span class="card-venue">Nature Sustainability · 2026</span>
        <p class="card-text">A ubiquitous data-driven framework for city-scale traffic emission estimation that fuses camera videos with mobile phone data. Inferring directional signal timing shows PM and NOx emissions rise 40 to 60 percent on average when stop-and-go cycles are properly modeled.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/GEMINI.png" alt="Digital Twin emission platform"></div>
      <div class="card-body">
        <span class="card-venue">J. Intelligent &amp; Connected Vehicles · 2026</span>
        <p class="card-text">A Digital Twin platform for road traffic emission nowcasting and forecasting. Integrating online repositories with IoT sensors enables alternative-policy scenario evaluation, demonstrated for Kista, Stockholm via 3D interactive visualization.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856425000576" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/ZONE301.png" alt="ZONE 30 emission analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2025</span>
        <p class="card-text">Quantifying city-wide effects of 30 km/h speed limits in Milan via 3.4 million driving trips. Aggregate emission changes are modest (0.6 to 2.7 percent) but vary substantially across space and time, peaking during cross-zone trips at rush hour.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Vehicle Electrification & Sharing</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVBus.jpg" alt="Dynamic wireless charging buses"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2023</span>
        <p class="card-text">A bi-level optimization framework for dynamic wireless charging of battery electric buses, jointly handling strategic facility deployment and battery sizing alongside tactical charging scheduling under time-of-use electricity tariffs.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/9034087" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVCARD.jpg" alt="EVCARD vehicle selection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSM · 2020</span>
        <p class="card-text">Five million transactions from EVCARD reveal that users avoid older, smaller, and pricier vehicles. State of charge dominates the choice; users tend to be "greedy," consistently selecting max-SoC vehicles even when their actual trips are short.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920919311058" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/SharedEV.png" alt="Shared EV simulation"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2019</span>
        <p class="card-text">Discrete-event simulation quantifies how battery capacity affects shared electric vehicle adoption. Constrained capacity hurts both user satisfaction and vehicle utilization, while faster charging, larger range, and higher vehicle-to-trip ratios mitigate the impact.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== RESILIENCE ========================================== -->
<section class="r-section" id="resilience" style="--accent: var(--c-res);">
  <div class="r-eyebrow">03 / Resilience</div>
  <p class="r-lead">
    Natural disasters, pandemics, and extreme weather profoundly disrupt human mobility.
    My work quantifies travel patterns before, during, and after such disruptions —
    with particular attention to accessibility inequities and resilience disparities in underserved communities.
  </p>

  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://doi.org/10.1016/j.jtrangeo.2025.104423" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/hurricane_laura.png" alt="Hurricane Laura mobility and COVID spread"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2025</span>
        <p class="card-text">A case study of Hurricane Laura quantifies how compound disruptions reshape human mobility and amplify COVID-19 spread. Evacuation flows redistribute infection risk across counties, with disadvantaged communities bearing both heightened exposure and slower recovery.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://doi.org/10.1016/j.compenvurbsys.2025.102333" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/wildfire_sir.png" alt="Wildfire socio-spatial response analysis"></div>
      <div class="card-body">
        <span class="card-venue">CEUS · 2025</span>
        <p class="card-text">A socio-spatial study of public response to US wildfires combining SIR-style diffusion models with NLP on social-media discourse. The framework captures how concern propagates across regions and which socioeconomic factors shape community reactions to wildfire disasters.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1366554525006568" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/PartE.jpg" alt="Network resilience survey"></div>
      <div class="card-body">
        <span class="card-venue">TR Part E · 2025</span>
        <p class="card-text">A comprehensive survey of multi-modal urban transport network resilience covering modeling, evaluation, and optimization across road, transit, and shared mobility systems, with an outlook on next-generation infrastructure.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2212420924005168" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/weatherroad.png" alt="Weather impact on traffic"></div>
      <div class="card-body">
        <span class="card-venue">IJDRR · 2024</span>
        <p class="card-text">Comparing passively collected mobile location data with actively reported Waze incidents for monitoring extreme weather impact on traffic. Active reports underestimate severity, since fewer users venture out as conditions worsen and become silent sensors.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920920308397" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF33.png" alt="Transit ridership decline"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2021</span>
        <p class="card-text">Twenty years of Chicago transit ridership analyzed via Bayesian structural time series to isolate the pandemic's causal impact while controlling for socioeconomic confounders. Sharpest declines hit commercial areas and white, educated, high-income neighborhoods.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321000508" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/bikeshare.png" alt="Chicago bikesharing patterns"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2021</span>
        <p class="card-text">Chicago bikesharing across the pandemic, benchmarked against transit, driving, and walking. Bikesharing proved the most resilient mode, yet stark socioeconomic inequities surfaced as high-income station catchments saw both the steepest gains and declines.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF11.png" alt="Pandemic mobility tracker"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2020</span>
        <p class="card-text">Tracking US pandemic-era mobility via 150 million monthly active mobile devices, capturing trips per person, person-miles traveled, and share of residents staying home. Updated daily on a public <a href="https://data.covid.umd.edu/">platform</a>.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2020.0344" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF3.png" alt="Stay-at-home mobility floor"></div>
      <div class="card-body">
        <span class="card-venue">J. R. Soc. Interface · 2020</span>
        <p class="card-text">Mobile-device data reveal a spontaneous mobility reduction that preceded government mandates, plus a "floor" effect once stay-at-home orders took hold. State-level policies accounted for only roughly five percent of the total mobility decline.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/8569639" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Flood.png" alt="Urban flood detection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSC · 2018</span>
        <p class="card-text">Fusing social media posts, precipitation records, and traffic flow data to automatically detect urban road flooding in Shenzhen. The system achieves a 68 to 90 percent detection rate with only 1.5 to 2 percent false alarms.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== HEALTH ========================================== -->
<section class="r-section" id="health" style="--accent: var(--c-hea);">
  <div class="r-eyebrow">04 / Health</div>
  <p class="r-lead">
    The COVID-19 pandemic underscored the tight coupling between human mobility and infectious disease dynamics.
    My work integrates econometric, epidemiological, and simulation models to disentangle causal relationships
    among mobility, public policies, vaccination, and virus transmission.
  </p>

  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X23006175" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF4.png" alt="Vaccination Omicron analysis"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine · 2023</span>
        <p class="card-text">Two years of US county data on vaccination, mobility, and outcomes show that vaccine effectiveness against case rates diminished during the Omicron surge, while protection against case-fatality persisted. An NIH-funded agent-based extension is underway.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2210670721007721" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/racial.jpg" alt="Health disparity analysis"></div>
      <div class="card-body">
        <span class="card-venue">SCS · 2022</span>
        <p class="card-text">Linking COVID-19 outcomes to demographics, occupation, and partisanship reveals a structural inequality: social distancing operates as a "privilege" of advantaged groups, while disadvantaged communities bear disproportionate case and death burdens.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X22009471" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF41.png" alt="Vaccine hesitancy study"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine · 2022</span>
        <p class="card-text">Mediation analysis demonstrates that stated vaccine hesitancy alone cannot fully explain US vaccination disparities, challenging the dominant narrative and pointing to structural access barriers as a complementary driver of inequity.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0259803" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/raceplos.png" alt="Mediation analysis"></div>
      <div class="card-body">
        <span class="card-venue">PLOS ONE · 2021</span>
        <p class="card-text">Structural equation modeling on 4.4 million POI geo-tracking records shows that mobility mediates COVID-19 infection rates but not case-fatality ratios, with substantial variation across county-level racial and ethnic compositions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.pnas.org/doi/abs/10.1073/pnas.2010836117" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF43.png" alt="PNAS mobility-infection study"></div>
      <div class="card-body">
        <span class="card-venue">PNAS · 2020</span>
        <p class="card-text">Quantifying nationwide changes in mobility inflow at the pandemic's onset and modeling its time-varying relationship with infection rates, with the dynamic positive association substantially stronger in partially reopened regions.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== BEYOND ========================================== -->
<section class="r-section" id="beyond" style="--accent: var(--c-mis);">
  <div class="r-eyebrow">05 / Beyond</div>
  <p class="r-lead">
    Beyond my core themes, I work across travel demand management, public perception analytics,
    shared mobility, and multimodal integration.
  </p>

  <div class="r-subhead">Transportation Economics</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X25001895" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/partc_2026.jpg" alt="Food delivery choice analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2025</span>
        <p class="card-text">Analyzing 2.7 million food delivery orders in Dubai to explain why customers choose distant restaurants over closer alternatives. Explainable ML reveals that delivery fees, cuisine type, restaurant ratings, and neighborhood socioeconomics shape whether orders stay local.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856424001939" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/incentrip.png" alt="incenTrip platform"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2024</span>
        <p class="card-text">As technical lead of <a href="https://www.mdot.maryland.gov/tso/pages/Index.aspx?PageId=33">incenTrip</a>, the first nationwide incentive-based travel demand management app, we design personalized dynamic incentives for mode switching, carpooling, congestion avoidance, and off-peak travel.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X21002382" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/churn.jpg" alt="Customer churn analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2021</span>
        <p class="card-text">Four million coupons analyzed via extended Cox proportional hazards models. Coupon effectiveness peaks early and declines after roughly 130 days, so front-loading new-user incentives maximizes short-term revenue but raises fairness and privacy concerns.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Public Perception from Social Media</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264275126000983" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/parking.png" alt="Parking sentiment analysis"></div>
      <div class="card-body">
        <span class="card-venue">Cities · 2026</span>
        <p class="card-text">Five million parking-related Google Maps reviews across 1.1 million US POIs are classified with BERT to model socio-spatial sentiment. Restaurants register the most negative scores, while denser and lower-income urban areas show consistently negative perceptions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0198971525000821" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/access_framework.png" alt="Accessibility sentiment"></div>
      <div class="card-body">
        <span class="card-venue">CEUS · 2025</span>
        <p class="card-text">A Llama 3 model with Low-Rank Adaptation fine-tuning measures public accessibility sentiment from nationwide Google Maps reviews. Older and more educated areas express more negativity, while disability prevalence alone shows no clear association with sentiment.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">MaaS & Shared Mobility</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Escooter.png" alt="E-scooter vs bikesharing"></div>
      <div class="card-body">
        <span class="card-venue">JPER · 2024</span>
        <p class="card-text">Comparing e-scooter sharing with docked bikesharing usage via generalized additive mixed models. Both modes succeed in dense, young, higher-income areas, yet a one-sided competitive relationship has emerged with e-scooters surpassing bikes in adoption.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321003240" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF52.jpg" alt="Bike-and-ride integration"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2022</span>
        <p class="card-text">Shanghai dockless bikesharing evaluated for bike-and-ride (BnR) integration with metro across four metrics. Land-use mix correlates with BnR trips only beyond a 1.5 km buffer, and larger operators generate more BnR trips but no higher per-bike utilization.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920918306448" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/evcard.png" alt="Carsharing optimization"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2019</span>
        <p class="card-text">Station-level booking and turnover analysis for carsharing optimization shows that operators should target underserved areas. Carsharing competes best 1.2 to 2.4 km from bus stops, and geographically differentiated quotas help local authorities manage fleets.</p>
      </div>
    </div>

  </div>
</section>

</div>
