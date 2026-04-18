---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
.page__content h2[id] {
  scroll-margin-top: 80px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.3em;
  margin-top: 2em;
}
.research-toc {
  margin: 1em 0 2em;
  padding: 0.8em 1em;
  background: #f7f7f7;
  border-left: 4px solid #27ae60;
  font-size: 0.95em;
}
.research-toc a { margin: 0 0.3em; }
</style>

<p class="research-toc">
  <strong>Jump to:</strong>
  <a href="#mobility">Mobility</a> ·
  <a href="#sustainability">Sustainability</a> ·
  <a href="#resilience">Resilience</a> ·
  <a href="#health">Health</a> ·
  <a href="#miscellaneous">Miscellaneous</a>
</p>

<h2 id="mobility">Human Mobility Modeling in Transportation</h2>

Mobile devices (cellphones, connected vehicles, and wearable sensors) generate vast amounts of spatiotemporal data on individual travel.
Compared to traditional surveys and static sensors, these data offer higher penetration rates, broader spatiotemporal coverage, and near-real-time updates.

My research focuses on integrating these emerging data sources with established travel demand modeling frameworks.
This includes: 1) a unified pipeline for parsing multi-source travel data into trip rosters; 2) a suite of spatiotemporal AI models for forecasting future travel demand; and 3) traffic simulation tools for modeling flow at both individual and aggregated levels.

### <span style="color: green"> Unified Pipeline for Data-driven Travel Demand Modeling </span> 🚦🚦🚦🚗🚗🚗

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b">
        <img loading="lazy" decoding="async" src="/images/OD2T3.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b"><b><span style="color: purple;">[PhD Dissertation]</span></b></a> Using mobile device location data as the sole input, we built an end-to-end pipeline to extract individual trip rosters. The process encompasses home/work identification, trip detection, mode imputation, population weighting, and validation. Trip rosters are then aggregated at various spatiotemporal resolutions to construct multi-modal OD matrices.
  </div>
</div>


---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img loading="lazy" decoding="async" src="/images/ODFLOW.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[NetMob 2024]</span></b></a> Can mobile-device-derived OD data reliably reproduce road-level traffic flow distributions? We developed an end-to-end pipeline that maps mobile OD matrices onto road networks via dynamic traffic assignment and validated it across 35 metropolitan areas in Mexico, Colombia, Indonesia, and India. Results reveal that the model underperforms in regions with low mobile phone penetration, where zero-flow links and unrealistically low volumes persist even after population weighting.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 20%; text-align: left; margin-right: 5px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img loading="lazy" decoding="async" src="/images/FF61.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 0 0 20%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img loading="lazy" decoding="async" src="/images/FF62.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[Ongoing]</span></b> </a> Mobile device location data capture rich individual travel patterns that are well-suited for dynamic, behavior-oriented simulators. My ongoing work integrates forecasted trip itineraries with micro (Vissim, SUMO), meso (DTALite), and agent-based simulators (MATSim) to enable fine-grained citywide traffic simulation.
  </div>
</div>


<hr style="border:1px solid gray">

### <span style="color: green"> AI in Human Mobility Forecasting and Reasoning </span> 📈📈📈📉📉📉

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://github.com/SonghuaHu-UMD/MultiSTGraph">
        <img loading="lazy" decoding="async" src="/images/FF2.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://github.com/SonghuaHu-UMD/MultiSTGraph"><b><span style="color: purple;">[PhD Dissertation]</span></b></a> OD flow forecasting is challenging due to intricate spatiotemporal dependencies and heterogeneous external factors. We propose <a href="https://github.com/SonghuaHu-UMD/MultiSTGraph">Multi-ATGCN</a>, a Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network for citywide multi-step OD flow prediction. Experiments on two real-world datasets show consistent improvements over state-of-the-art baselines.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758">
        <img loading="lazy" decoding="async" src="/images/FF16.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758"><b><span style="color: purple;">[TR Part C]</span></b></a> Individual mobility prediction poses unique challenges: high behavioral randomness, multi-task output structures, and severely imbalanced activity distributions. We propose a hierarchical activity-based framework that simultaneously predicts the activity, time, and location of each device's next trip, incorporating loss functions from semantic segmentation to handle class imbalance. Applied to a county-level dataset of 18,000+ residents, the framework achieves competitive prediction accuracy.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856423001635">
        <img loading="lazy" decoding="async" src="/images/FF12.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856423001635"><b><span style="color: purple;">[TR Part A]</span></b></a> Using nationwide CBG-level trip flows from mobile devices as a proxy for travel demand, we examine their relationships with socioeconomic, demographic, and land-use variables. A systematic comparison of 48 explainable ML models and interpretation techniques identifies the best-performing model and validates interpretation robustness. Pronounced nonlinearities, threshold effects, and interaction effects are documented.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img loading="lazy" decoding="async" src="/images/LLMEvent.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[Ongoing]</span></b></a> Human mobility is highly sensitive to contextual events, including weather, traffic incidents, and social gatherings. We curated over 40 event types from multiple social media platforms to forecast event-driven mobility changes. Leveraging LLMs, we predict shifts in both road traffic conditions and community-level travel demand. Results show that even a vanilla GPT-4o with in-context learning achieves a MAPE of 15.12%.
  </div>
</div>

<h2 id="sustainability">Transport Emission Reduction</h2>

Transport emissions remain a major source of greenhouse gases and air pollutants, and the global push for decarbonization demands scalable, data-driven solutions.

My research addresses three key areas: 1) developing cost-effective methods to monitor and predict large-scale, high-resolution traffic emissions using ubiquitous data; 2) advancing vehicle electrification strategies, including optimizing EV operations and charging infrastructure planning; and 3) evaluating the emission impacts of urban policies, such as speed limits (ZONE 30), travel demand management, and active travel promotion.

### <span style="color: green"> Data-driven Emission Inventory Estimation </span> 🌱🌱🌱🌎🌎🌎
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img loading="lazy" decoding="async" src="/images/camera0.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[Under Review]</span></b></a> The MOVES emission model requires fleet composition across 13 vehicle types, a notoriously difficult input to prepare at scale. We constructed the first benchmark dataset of 10,000 vehicle images aligned with MOVES source types, cropped from ~800 traffic cameras in New York and labeled via GPT-4o with human validation. Among 10 image classifiers trained on this dataset, ConvNeXt achieved the best accuracy (92.9%) and efficiency.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.nature.com/articles/s41893-026-01797-9">
        <img loading="lazy" decoding="async" src="/images/Signal.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.nature.com/articles/s41893-026-01797-9"><b><span style="color: purple;">[Nature Sustainability]</span></b></a> We present a ubiquitous data-driven framework for city-scale traffic emission estimation and policy evaluation, leveraging traffic camera videos and mobile phone location data. Urban signal control induces frequent stops-and-goes that significantly affect emissions. We developed a signal processing algorithm to infer directional signal timing from camera-extracted traffic flow time series, then applied it to link-level speed profiles to reconstruct second-by-second driving cycles. Accounting for signal timing reveals substantial increases in idle and acceleration modes, with PM and NOx emissions rising 40--60% on average.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856425000576">
        <img loading="lazy" decoding="async" src="/images/ZONE301.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856425000576"><b><span style="color: purple;">[TR Part A]</span></b></a> The emission impact of 30 km/h speed limits (ZONE 30) remains contested. We propose a big-data approach to quantify city-wide Zone 30 effects in Milan, Italy, analyzing 3.4 million driving trips. Overall emission changes are modest (0.61--2.73% increase in the most extensive scenario), but impacts vary substantially across space and time, with the largest increases during peak hours and for cross-zone trips.
  </div>
</div>


---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079">
        <img loading="lazy" decoding="async" src="/images/GEMINI.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079"><b><span style="color: purple;">[J. Intelligent and Connected Vehicles]</span></b></a> We design and demonstrate a Digital Twin platform for road traffic emission nowcasting and forecasting. Integrating multi-source data from online repositories and IoT sensors, the platform delivers near-real-time, high-resolution emission estimates. A streamlined backend connects data mining and traffic simulation modules to forecast emissions under alternative policy scenarios. The platform is demonstrated for Kista, Stockholm, via a 3D interactive visualization interface.
  </div>
</div>

<hr style="border:1px solid gray">

### <span style="color: green"> Vehicle Electrification and Sharing </span> 🔋🔋🔋🚃🚃🚃

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920919311058">
        <img loading="lazy" decoding="async" src="/images/SharedEV.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920919311058"><b><span style="color: purple;">[TR Part D]</span></b></a> Limited battery capacity remains a key barrier to shared electric vehicle (SEV) adoption. Using discrete-event simulation, we quantify how battery capacity affects carsharing program performance. Results show that constrained capacity lowers both user satisfaction and vehicle utilization, while faster charging, larger battery range, and higher vehicle-to-trip ratios help mitigate these effects.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X">
        <img loading="lazy" decoding="async" src="/images/EVBus.jpg" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X"><b><span style="color: purple;">[TR Part C]</span></b> </a> Dynamic wireless charging (DWC) enables battery electric buses (BEBs) to charge en route, addressing range limitations. We propose a bi-level optimization framework: a strategic model for DWC facility deployment and battery sizing, coupled with a tactical model for charging scheduling under time-of-use tariffs, jointly optimizing infrastructure design and operational charging activities.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041">
        <img loading="lazy" decoding="async" src="/images/Escooter.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041"><b><span style="color: purple;">[JPER]</span></b> </a> The correlation between e-scooter sharing (ESS) and docked bikesharing (DBS) remains ambiguous. This study compared usage patterns between the two modes, aiming to unveil their evolving relationship. To account for nonlinear effects, generalized additive mixed models were employed. The findings indicate that both ESS and DBS programs achieved success in densely populated urban areas, areas with younger and higher-income populations, as well as on university campuses. However, a one-sided competitive relationship emerged, with ESS surpassing DBS.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://ieeexplore.ieee.org/abstract/document/9034087">
        <img loading="lazy" decoding="async" src="/images/EVCARD.jpg" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://ieeexplore.ieee.org/abstract/document/9034087"><b><span style="color: purple;">[IEEE ITSM]</span></b></a> We aim to understand users’ decision-making when selecting electric shared vehicles by analyzing over five million transactions from EVCARD – the biggest EV sharing company in Shanghai. We found users are less likely to choose vehicles with greater ages, fewer seats, higher rental prices, and smaller battery ranges. State of charge (SoC) significantly affect users’ preferences on vehicles and users tend to be ‘greedy’ on the SoC, although users with shorter real trip distances presented less range anxiety.
  </div>
</div>

<h2 id="resilience">Resilient Mobility and Community</h2>

Natural disasters, pandemics, and extreme weather profoundly disrupt human mobility.
My research quantifies the evolving patterns of travel before, during, and after such disruptions,
with particular attention to accessibility inequities and resilience disparities in underserved communities,
providing actionable insights for building more equitable and resilient urban mobility systems.

### <span style="color: green"> Multi-modal Travel Demand Resilience </span> 🚌🚌🚌🚲🚲🚲

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524">
        <img loading="lazy" decoding="async" src="/images/FF11.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524"><b><span style="color: purple;">[TR Part C]</span></b></a> Using location data from over 150 million monthly active mobile devices in the US, we track pandemic-era mobility changes via three metrics: average trips per person, person-miles traveled, and share of residents staying home. Data are updated daily and publicly available through an <a href="https://data.covid.umd.edu/">online platform</a>.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920920308397">
        <img loading="lazy" decoding="async" src="/images/FF33.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920920308397"><b><span style="color: purple;">[TR Part D]</span></b></a> The COVID-19 pandemic triggered an unprecedented decline in transit ridership worldwide. Using 20 years of daily ridership data in Chicago, we apply a Bayesian structural time series model to isolate the pandemic's causal impact, controlling for socioeconomic confounders. Ridership declined most sharply in commercial areas and neighborhoods with higher shares of white, educated, and high-income residents.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0966692321000508">
        <img loading="lazy" decoding="async" src="/images/bikeshare.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0966692321000508"><b><span style="color: purple;">[JTG]</span></b></a> Analyzing two years of bikesharing trips in Chicago, we trace the spatiotemporal evolution of bikesharing usage across the pandemic and benchmark it against transit, driving, and walking. Bikesharing proves more resilient than other modes. However, stark socioeconomic inequities emerge: stations in high-income areas saw the largest pre-pandemic growth but also the steepest pandemic-era decline.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2020.0344">
        <img loading="lazy" decoding="async" src="/images/FF3.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2020.0344"><b><span style="color: purple;">[J. R. Soc. Interface]</span></b></a> Analyzing mobile device location data during the pandemic, we uncover a spontaneous mobility reduction that preceded government mandates and a "floor" effect, where mobility reached a lower bound shortly after stay-at-home orders were issued. Strikingly, state-level stay-at-home policies accounted for only ~5% of the total mobility reduction.
  </div>
</div>


<hr style="border:1px solid gray">

### <span style="color: green"> Road Network Traffic Resilience </span> ❄️❄️❄️🚧🚧🚧

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1366554525006568">
        <img loading="lazy" decoding="async" src="/images/PartE.jpg" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1366554525006568"><b><span style="color: purple;">[TR Part E]</span></b></a> A comprehensive survey of multi-modal urban transportation network resilience spanning modeling, evaluation, and optimization. We review resilience metrics, network modeling approaches, and optimization strategies across road, transit, and shared mobility systems, identifying open challenges and promising directions for next-generation resilient infrastructure.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://ieeexplore.ieee.org/abstract/document/8569639">
        <img loading="lazy" decoding="async" src="/images/Flood.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://ieeexplore.ieee.org/abstract/document/8569639"><b><span style="color: purple;">[IEEE ITSC]</span></b></a> Urban road flooding, exacerbated by poor drainage, demands rapid detection for effective traveler guidance. By fusing social media posts, precipitation data, and traffic flow information, we develop an automatic flooding detection algorithm deployed in Shenzhen, China. The system achieves a 68--90% detection rate with only a 1.5--2% false alarm rate.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S2212420924005168">
        <img loading="lazy" decoding="async" src="/images/weatherroad.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S2212420924005168"><b><span style="color: purple;">[IJDRR]</span></b></a> Crowdsourced data open new avenues for monitoring road traffic during extreme weather. We compare two crowdsourced data types, passively collected location data (PCLD) from mobile devices and actively collected user reports (ACUR) from Waze, to assess the impact of floods, winter storms, and fog on road traffic. A key finding: ACUR underestimates actual impacts during severe events, as few users venture out to serve as active “sensors.”
  </div>
</div>

<h2 id="health">Human Mobility, Epidemiology, and Health Disparity</h2>

The COVID-19 pandemic underscored the tight coupling between human mobility and infectious disease dynamics.
My research builds integrated econometric, epidemiological, and simulation models to disentangle the (causal) relationships
among mobility, public policies, vaccination, and virus transmission, while controlling for socioeconomic confounders.
I am extending this work to broader environmental health contexts, including air pollution exposure, health disparity, and climate-sensitive diseases.

### <span style="color: green"> Human Mobility, Infectious Disease, and Health Disparity</span> 😷 😷 😷 🏃🏃🏃

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2010836117">
        <img loading="lazy" decoding="async" src="/images/FF43.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2010836117"><b><span style="color: purple;">[PNAS]</span></b></a> At the onset of the COVID-19 pandemic, we quantified nationwide changes in mobility inflow and modeled its time-varying relationship with infection rates. Our analysis reveals a dynamic positive association between mobility inflow and infections, which is substantially stronger in partially reopened regions.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S2210670721007721">
        <img loading="lazy" decoding="async" src="/images/racial.jpg" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S2210670721007721"><b><span style="color: purple;">[SCS]</span></b></a> We investigate the socioeconomic roots of COVID-19 health disparities by linking outcomes to demographics, occupation, and partisanship. A stark structural inequality emerges: social distancing is a "privilege" of advantaged groups, while disadvantaged communities bear disproportionate case and death burdens, even with high vaccination rates.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0259803">
        <img loading="lazy" decoding="async" src="/images/raceplos.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0259803"><b><span style="color: purple;">[PLOS]</span></b></a> Using two years of geo-tracking data from ~4.4 million POIs across the contiguous US, we examine county-level racial/ethnic differences in stay-at-home compliance and COVID-19 outcomes. Structural equation modeling reveals that mobility mediates infection rates but not case-fatality ratios, and these mediation effects vary substantially across racial/ethnic compositions.
  </div>
</div>

<hr style="border:1px solid gray">

### <span style="color: green"> Human Mobility and Vaccination </span> 💉💉💉🏃🏃🏃

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0264410X22009471">
        <img loading="lazy" decoding="async" src="/images/FF41.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0264410X22009471"><b><span style="color: purple;">[Vaccine]</span></b></a> Vaccine hesitancy is widely cited as the primary barrier to equitable immunization. We test whether stated hesitancy actually translates into differential vaccination rates. Mediation analysis shows that hesitancy alone cannot fully explain vaccination disparities across the US, challenging the dominant narrative and pointing to structural access barriers as a complementary driver.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0264410X23006175">
        <img loading="lazy" decoding="async" src="/images/FF4.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0264410X23006175"><b><span style="color: purple;">[Vaccine]</span></b></a> Using two years of county-level US data, we investigate the interplay among vaccination, human mobility, and COVID-19 outcomes. Vaccine effectiveness against case rates diminished during the Omicron surge, yet its protective effect on case-fatality rates persisted. This line of work has attracted NIH funding for development into an agent-based mobility-epidemiology model for forecasting spatiotemporal infection dynamics.
  </div>
</div>

<h2 id="miscellaneous">Other Transportation Studies</h2>

Beyond my core research themes, I maintain active interests across broader transportation topics,
including travel demand management, public perception analytics, shared mobility, and multimodal integration.

### <span style="color: green"> Transportation Economics</span> 💰💰💰⛽⛽⛽

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856424001939">
        <img loading="lazy" decoding="async" src="/images/incentrip.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856424001939"><b><span style="color: purple;">[TR Part A]</span></b></a> As technical lead of <a href="https://www.mdot.maryland.gov/tso/pages/Index.aspx?PageId=33">incenTrip</a>, the first nationwide incentive-based travel demand management app, we design personalized, dynamic incentives that encourage sustainable travel choices: mode switching, carpooling, congestion avoidance, and off-peak travel, ultimately reducing congestion, energy use, and emissions.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X21002382">
        <img loading="lazy" decoding="async" src="/images/churn.jpg" alt="Figure" style="width: 400px;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X21002382"><b><span style="color: purple;">[TR Part C]</span></b></a> Customer churn threatens the viability of shared mobility platforms, yet the factors driving it remain poorly understood. We analyze over 4 million coupons longitudinally via an extended Cox proportional hazards model to quantify how personalized incentives affect retention. Coupon effectiveness peaks early and declines after ~130 days. Front-loading incentives for new users maximizes short-term revenue, but raises fairness and privacy concerns.
  </div>
</div>

<hr style="border:1px solid gray">

### <span style="color: green"> Public Perception from Social Media</span>💬💬💬👥👥👥
Crowdsourced reviews encode rich public sentiment about urban services.
By combining traditional NLP with large language models,
we quantify perceptions of parking, accessibility, the built environment, and food delivery at national scale.

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0264275126000983">
        <img loading="lazy" decoding="async" src="/images/parking.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0264275126000983"><b><span style="color: purple;">[Cities]</span></b></a> Analyzing 5 million parking-related Google Maps reviews across 1.1M US POIs, we deploy BERT to classify sentiment and model its socio-spatial determinants. Parking sentiment varies markedly by POI type (restaurants are the most negative) and metro area. Denser, lower-income urban areas consistently exhibit more negative parking perceptions.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0198971525000821">
        <img loading="lazy" decoding="async" src="/images/access_framework.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0198971525000821"><b><span style="color: purple;">[CEUS]</span></b></a> Over 30 million Americans have mobility-affecting disabilities, yet urban accessibility remains uneven. We fine-tune Llama 3 with Low-Rank Adaptation on nationwide Google Maps reviews to measure public accessibility sentiment. Areas with older, more educated populations express more negative sentiment, while, counterintuitively, disability prevalence alone shows no clear association.
  </div>
</div>

<hr style="border:1px solid gray">

### <span style="color: green"> Mobility as a service (MaaS) and Shared Mobility </span> 👫👫👫🚇🚇🚇

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0966692321003240">
        <img loading="lazy" decoding="async" src="/images/FF52.jpg" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0966692321003240"><b><span style="color: purple;">[JTG]</span></b></a> Using comprehensive dockless bikesharing (DBS) data from Shanghai, we evaluate bike-and-ride (BnR) integration with metro via four metrics: trip count, BnR rate, bike utilization, and catchment size. Land-use mix positively correlates with BnR trips only beyond a 1.5 km buffer. Larger DBS operators generate more BnR trips but do not achieve higher per-bike utilization.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920918306448">
        <img loading="lazy" decoding="async" src="/images/evcard.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920918306448"><b><span style="color: purple;">[TR Part D]</span></b></a> Analyzing station-level booking requests and turnover rates, we provide evidence-based guidance for carsharing optimization: operators should target underserved areas; carsharing is most competitive 1.2-2.4 km from bus stops and in areas with limited metro access; and local authorities should adopt geographically differentiated quotas for fleet management.
  </div>
</div>
