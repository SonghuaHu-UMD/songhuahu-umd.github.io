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
  padding: 2em 0 1.2em;
  scroll-margin-top: 80px;
  border-top: 1px solid #eee;
}
.r-section:first-of-type { border-top: none; padding-top: 0.5em; }
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
  line-height: 1.6;
  margin-bottom: 1.4em;
}
.r-subhead {
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: var(--accent);
  margin: 1.6em 0 0.9em;
  padding-left: 0.8em;
  border-left: 3px solid var(--accent);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2em;
  margin-bottom: 0.6em;
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
    Mobile phones, connected vehicles, and wearable sensors generate huge amounts of data on how people move. My work uses this data to estimate travel demand, forecast future flows with AI, and run fine-grained citywide traffic simulations.
  </p>

  <div class="r-subhead">Data-driven Travel Demand Modeling</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/FF61.mp4" aria-label="Traffic simulation animation"></video></div>
      <div class="card-body">
        <span class="card-venue">Ongoing · 2026</span>
        <p class="card-text">An <strong>LLM</strong> agent takes forecasted trips and runs them in mainstream traffic simulators (Vissim, SUMO, DTALite, MATSim). The LLM picks the right tool, sets the parameters, and writes the behavior plans, so citywide simulations can be built directly from mobile location data.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/ODFLOW.png" alt="OD validation across cities"></div>
      <div class="card-body">
        <span class="card-venue">NetMob 2024</span>
        <p class="card-text">Can phone-based origin-destination (OD) data reproduce real road-level traffic? We test this across 35 cities in Mexico, Colombia, Indonesia, and India. The model works well overall but struggles where smartphone use is low.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/OD2T3.png" alt="End-to-end mobility pipeline"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation · 2023</span>
        <p class="card-text">A full pipeline that turns raw phone location data into trip records for each user. It identifies home and work, detects trips, infers travel mode, and reweights to the population. The trips then aggregate into multi-modal OD matrices.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">AI for Mobility Forecasting & Reasoning</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://github.com/SonghuaHu-UMD/MultiSTGraph" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF2.png" alt="Multi-ATGCN architecture"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation · 2023</span>
        <p class="card-text"><strong>Multi-ATGCN</strong> (<em>Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network</em>) forecasts citywide origin-destination flows several steps into the future. It learns the spatial structure from multiple graphs, weighs them with attention, and adapts to real-time conditions, outperforming strong baselines on two real-world datasets.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856423001635" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF12.png" alt="Explainable ML comparison"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2023</span>
        <p class="card-text">Using nationwide phone-derived trip flows as a travel-demand proxy, we benchmark 48 explainable ML models against multiple interpretation techniques. Results reveal strong nonlinear relationships and threshold effects between travel demand and its drivers.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/FF16.mp4" aria-label="Hierarchical activity prediction"></video></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2022</span>
        <p class="card-text">A deep learning framework jointly predicts the activity, time, and location of each user's next trip. We borrow loss functions from image segmentation to handle the highly imbalanced activity distribution across more than 18,000 residents.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== SUSTAINABILITY ========================================== -->
<section class="r-section" id="sustainability" style="--accent: var(--c-sus);">
  <div class="r-eyebrow">02 / Sustainability</div>
  <p class="r-lead">
    Transport remains a major source of greenhouse gases and air pollution. My work develops low-cost methods to monitor and predict emissions at scale, advances vehicle electrification, and evaluates urban policies such as speed limits and demand management.
  </p>

  <div class="r-subhead">Data-driven Emission Inventory</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.researchsquare.com/article/rs-7256883/v1" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/camera0.mp4" aria-label="Camera-based vehicular emission estimation"></video></div>
      <div class="card-body">
        <span class="card-venue">Under Review · 2026</span>
        <p class="card-text">We use computer vision to estimate emissions for each vehicle in traffic camera video. A 2.2-million-image dataset classifies 4,923 car models, and an enhanced COPERT formula adds vehicle speed and acceleration recovered by tracking.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.nature.com/articles/s41893-026-01797-9" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/s9-policy.mp4" aria-label="Signal-aware emission framework"></video></div>
      <div class="card-body">
        <span class="card-venue">Nature Sustainability · 2026</span>
        <p class="card-text">A city-scale traffic emission framework that fuses camera videos with phone location data. By inferring the timing of every traffic signal, we show that real stop-and-go cycles raise PM and NOx emissions 40 to 60 percent above standard methods.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/GEMINI.png" alt="Digital Twin emission platform"></div>
      <div class="card-body">
        <span class="card-venue">J. Intelligent &amp; Connected Vehicles · 2026</span>
        <p class="card-text">A Digital Twin platform that estimates and forecasts road traffic emissions in near real time. By combining open repositories with IoT sensors, it lets users test alternative policy scenarios. Demonstrated for Kista, Stockholm with a 3D interactive interface.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856425000576" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/ZONE301.png" alt="ZONE 30 emission analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2025</span>
        <p class="card-text">Using 3.4 million driving trips, we measure how Milan's 30 km/h speed limit (Zone 30) changes emissions. Citywide changes are small (0.6 to 2.7 percent) but uneven across space and time, with the largest jumps on cross-zone trips at rush hour.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Vehicle Electrification & Sharing</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVBus.jpg" alt="Dynamic wireless charging buses"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2023</span>
        <p class="card-text">A two-level optimization for electric buses with dynamic wireless charging. The upper level decides where to put charging facilities and how big batteries should be; the lower level schedules daily charging under time-of-use electricity prices.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/9034087" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVCARD.jpg" alt="EVCARD vehicle selection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSM · 2020</span>
        <p class="card-text">Five million EVCARD trips show that users avoid older, smaller, and pricier shared electric vehicles. State of charge matters most. Users are "greedy": they pick the most-charged car even when their actual trip is short.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920919311058" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/SharedEV.png" alt="Shared EV simulation"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2019</span>
        <p class="card-text">A simulation shows how limited battery capacity hurts both user satisfaction and fleet utilization in shared electric vehicles. Faster charging, longer range, and a larger fleet-to-trip ratio all help reduce the problem.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== RESILIENCE ========================================== -->
<section class="r-section" id="resilience" style="--accent: var(--c-res);">
  <div class="r-eyebrow">03 / Resilience</div>
  <p class="r-lead">
    Disasters, pandemics, and extreme weather profoundly disrupt how people travel. My work measures travel patterns before, during, and after such events, with a particular focus on which underserved communities recover the slowest.
  </p>

  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://doi.org/10.1016/j.jtrangeo.2025.104423" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/hurricane_laura.png" alt="Hurricane Laura mobility and COVID spread"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2025</span>
        <p class="card-text">A Hurricane Laura case study: when disasters and pandemics overlap, evacuation flows reshape mobility and spread COVID-19 across counties. Disadvantaged communities face both higher exposure and slower recovery.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://doi.org/10.1016/j.compenvurbsys.2025.102333" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/wildfire_sir.png" alt="Wildfire socio-spatial response analysis"></div>
      <div class="card-body">
        <span class="card-venue">CEUS · 2025</span>
        <p class="card-text">We combine SIR-style diffusion models with NLP on social media to study how the US public responds to wildfires. The model captures how concern spreads across regions and which socioeconomic factors shape community reactions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1366554525006568" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/PartE.jpg" alt="Network resilience survey"></div>
      <div class="card-body">
        <span class="card-venue">TR Part E · 2025</span>
        <p class="card-text">A comprehensive review of how to model, measure, and optimize the resilience of multi-modal urban transport networks (road, transit, shared mobility), with a look ahead at next-generation infrastructure.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2212420924005168" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/weatherroad.png" alt="Weather impact on traffic"></div>
      <div class="card-body">
        <span class="card-venue">IJDRR · 2024</span>
        <p class="card-text">We compare passive phone data with active Waze reports for tracking how extreme weather affects road traffic. Active reports underestimate severity because fewer users go outside as conditions worsen, and they stop reporting.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920920308397" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF33.png" alt="Transit ridership decline"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2021</span>
        <p class="card-text">Twenty years of Chicago transit ridership analyzed with Bayesian time series. After controlling for socioeconomic factors, the pandemic-driven decline was sharpest in commercial areas and in white, educated, high-income neighborhoods.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321000508" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/bikeshare.png" alt="Chicago bikesharing patterns"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2021</span>
        <p class="card-text">We track Chicago bikesharing across the pandemic and compare it with transit, driving, and walking. Bikesharing is the most resilient mode, but high-income station areas saw the largest swings, both up and down.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF11.png" alt="Pandemic mobility tracker"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2020</span>
        <p class="card-text">We track pandemic-era US mobility from 150 million phones, summarizing trips per person, person-miles traveled, and share staying home. Daily numbers are public on this <a href="https://data.covid.umd.edu/">platform</a>.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2020.0344" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF3.png" alt="Stay-at-home mobility floor"></div>
      <div class="card-body">
        <span class="card-venue">J. R. Soc. Interface · 2020</span>
        <p class="card-text">Phone data show that Americans cut travel before any stay-at-home orders, then hit a "floor" once orders began. State-level policies explain only about five percent of the total mobility decline.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/8569639" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Flood.png" alt="Urban flood detection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSC · 2018</span>
        <p class="card-text">We combine social media posts, rainfall, and traffic flow data to automatically detect flooded urban roads in Shenzhen. The system catches 68 to 90 percent of floods with only 1.5 to 2 percent false alarms.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== HEALTH ========================================== -->
<section class="r-section" id="health" style="--accent: var(--c-hea);">
  <div class="r-eyebrow">04 / Health</div>
  <p class="r-lead">
    The COVID-19 pandemic showed how tightly human mobility is coupled to disease dynamics. My work combines econometric, epidemiological, and simulation models to disentangle the causal links among mobility, vaccination, public policy, and infection outcomes.
  </p>

  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X23006175" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF4.png" alt="Vaccination Omicron analysis"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine · 2023</span>
        <p class="card-text">Two years of US county data on vaccines, mobility, and outcomes. During the Omicron wave, vaccines became less effective at preventing cases but kept reducing deaths. An NIH-funded agent-based extension is underway.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2210670721007721" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/racial.jpg" alt="Health disparity analysis"></div>
      <div class="card-body">
        <span class="card-venue">SCS · 2022</span>
        <p class="card-text">Linking COVID-19 outcomes to demographics, occupation, and politics, we find a structural inequality. Social distancing was a "privilege" of advantaged groups; disadvantaged communities bore the heaviest case and death burdens.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X22009471" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF41.png" alt="Vaccine hesitancy study"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine · 2022</span>
        <p class="card-text">Mediation analysis shows that self-reported vaccine hesitancy does not fully explain US vaccination gaps. Structural access barriers (e.g., distance, time, distrust of institutions) play an equally important role.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0259803" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/raceplos.png" alt="Mediation analysis"></div>
      <div class="card-body">
        <span class="card-venue">PLOS ONE · 2021</span>
        <p class="card-text">Structural equation modeling on 4.4 million POI tracking records shows that mobility drives COVID-19 case rates but not death rates. The mediation effect varies sharply across racial and ethnic compositions of US counties.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.pnas.org/doi/abs/10.1073/pnas.2010836117" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF43.png" alt="PNAS mobility-infection study"></div>
      <div class="card-body">
        <span class="card-venue">PNAS · 2020</span>
        <p class="card-text">We measure nationwide mobility inflow at the start of the pandemic and model its changing link with infection rates. The relationship is positive and grows much stronger in regions that have partially reopened.</p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== BEYOND ========================================== -->
<section class="r-section" id="beyond" style="--accent: var(--c-mis);">
  <div class="r-eyebrow">05 / Beyond</div>
  <p class="r-lead">
    Beyond the core themes, I work across travel demand incentives, public sentiment analytics, shared mobility, and multimodal integration.
  </p>

  <div class="r-subhead">Transportation Economics</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X25001895" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/partc_2026.jpg" alt="Food delivery choice analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2025</span>
        <p class="card-text">We analyze 2.7 million food delivery orders in Dubai to explain why customers pick distant restaurants over nearby ones. Explainable ML shows that delivery fees, cuisine, ratings, and neighborhood socioeconomics shape whether orders stay local.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856424001939" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/incentrip.png" alt="incenTrip platform"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2024</span>
        <p class="card-text">As technical lead of <a href="https://www.mdot.maryland.gov/tso/pages/Index.aspx?PageId=33">incenTrip</a>, the first nationwide incentive-based travel app, we design personalized rewards that nudge users toward mode switching, carpooling, off-peak travel, and congestion avoidance.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X21002382" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/churn.jpg" alt="Customer churn analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2021</span>
        <p class="card-text">We analyze four million coupons with a Cox survival model. Their effect on user retention peaks early and fades after about 130 days. Front-loading rewards for new users maximizes short-term revenue but raises fairness and privacy concerns.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">Public Perception from Social Media</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264275126000983" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/parking.png" alt="Parking sentiment analysis"></div>
      <div class="card-body">
        <span class="card-venue">Cities · 2026</span>
        <p class="card-text">Five million parking-related Google Maps reviews across 1.1 million US POIs are classified with BERT. Restaurants get the most negative reviews, and denser, lower-income urban areas consistently have worse parking perceptions.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0198971525000821" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/access_framework.png" alt="Accessibility sentiment"></div>
      <div class="card-body">
        <span class="card-venue">CEUS · 2025</span>
        <p class="card-text">We fine-tune Llama 3 with LoRA to measure public sentiment about accessibility from nationwide Google Maps reviews. Older, more educated areas express more negativity, while local disability rates alone show no clear link to sentiment.</p>
      </div>
    </div>

  </div>

  <div class="r-subhead">MaaS & Shared Mobility</div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Escooter.png" alt="E-scooter vs bikesharing"></div>
      <div class="card-body">
        <span class="card-venue">JPER · 2024</span>
        <p class="card-text">We compare e-scooter sharing with docked bikesharing using generalized additive mixed models. Both thrive in dense, young, higher-income areas, but a one-sided competition has emerged: e-scooters are overtaking bikes.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321003240" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF52.jpg" alt="Bike-and-ride integration"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2022</span>
        <p class="card-text">Shanghai dockless bikes are evaluated for bike-and-ride (BnR) integration with metro stations on four metrics. Land-use mix only matters past a 1.5 km buffer, and larger operators get more BnR trips but no higher per-bike utilization.</p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920918306448" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/evcard.png" alt="Carsharing optimization"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2019</span>
        <p class="card-text">Station-level booking and turnover analysis for carsharing optimization shows that operators should target underserved areas. Carsharing is most competitive 1.2 to 2.4 km from bus stops, and geographically differentiated quotas help cities manage fleets.</p>
      </div>
    </div>

  </div>
</section>

</div>
