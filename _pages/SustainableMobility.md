---
layout: archive
title: "Transport Emission Reduction"
permalink: /SusMobility/
author_profile: true
---

Transport emissions remain a major source of greenhouse gases and air pollutants, and the global push for decarbonization demands scalable, data-driven solutions.

My research addresses three key areas: 1) developing cost-effective methods to monitor and predict large-scale, high-resolution traffic emissions using ubiquitous data; 2) advancing vehicle electrification strategies, including optimizing EV operations and charging infrastructure planning; and 3) evaluating the emission impacts of urban policies, such as speed limits (ZONE 30), travel demand management, and active travel promotion.

### <span style="color: green"> Data-driven Emission Inventory Estimation </span> 🌱🌱🌱🌎🌎🌎
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/camera0.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[Under Review]</span></b></a>
    The MOVES emission model requires fleet composition across 13 vehicle types, a notoriously difficult input to prepare at scale. 
    We constructed the first benchmark dataset of 10,000 vehicle images aligned with MOVES source types, 
    cropped from ~800 traffic cameras in New York and labeled via GPT-4o with human validation. 
    Among 10 image classifiers trained on this dataset, ConvNeXt achieved the best accuracy (92.9%) and efficiency.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.nature.com/articles/s41893-026-01797-9">
        <img src="https://songhuahu-umd.github.io/images/Signal.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.nature.com/articles/s41893-026-01797-9"><b><span style="color: purple;">[Nature Sustainability]</span></b></a>
    We present a ubiquitous data-driven framework for city-scale traffic emission estimation and policy evaluation, leveraging traffic camera videos and mobile phone location data.
    Urban signal control induces frequent stops-and-goes that significantly affect emissions. 
    We developed a signal processing algorithm to infer directional signal timing from camera-extracted traffic flow time series, 
    then applied it to link-level speed profiles to reconstruct second-by-second driving cycles.
    Accounting for signal timing reveals substantial increases in idle and acceleration modes, 
    with PM and NOx emissions rising 40--60% on average.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856425000576">
        <img src="https://songhuahu-umd.github.io/images/ZONE301.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856425000576"><b><span style="color: purple;">[TR Part A]</span></b></a>
    The emission impact of 30 km/h speed limits (ZONE 30) remains contested. 
    We propose a big-data approach to quantify city-wide Zone 30 effects in Milan, Italy, analyzing 3.4 million driving trips. 
    Overall emission changes are modest (0.61--2.73% increase in the most extensive scenario), 
    but impacts vary substantially across space and time, with the largest increases during peak hours and for cross-zone trips. 
  </div>
</div>


---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079">
        <img src="https://songhuahu-umd.github.io/images/GEMINI.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079"><b><span style="color: purple;">[J. Intelligent and Connected Vehicles]</span></b></a>
    We design and demonstrate a Digital Twin platform for road traffic emission nowcasting and forecasting. 
    Integrating multi-source data from online repositories and IoT sensors, the platform delivers near-real-time, 
    high-resolution emission estimates. A streamlined backend connects data mining and traffic simulation modules 
    to forecast emissions under alternative policy scenarios. 
    The platform is demonstrated for Kista, Stockholm, via a 3D interactive visualization interface.
  </div>
</div>

<hr style="border:1px solid gray">

### <span style="color: green"> Vehicle Electrification and Sharing </span> 🔋🔋🔋🚃🚃🚃

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920919311058">
        <img src="https://songhuahu-umd.github.io/images/SharedEV.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920919311058"><b><span style="color: purple;">[TR Part D]</span></b></a>
    Limited battery capacity remains a key barrier to shared electric vehicle (SEV) adoption. 
    Using discrete-event simulation, we quantify how battery capacity affects carsharing program performance. 
    Results show that constrained capacity lowers both user satisfaction and vehicle utilization, 
    while faster charging, larger battery range, and higher vehicle-to-trip ratios help mitigate these effects.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X">
        <img src="https://songhuahu-umd.github.io/images/EVBus.jpg" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X"><b><span style="color: purple;">[TR Part C]</span></b> </a>
    Dynamic wireless charging (DWC) enables battery electric buses (BEBs) to charge en route, addressing range limitations. 
    We propose a bi-level optimization framework: a strategic model for DWC facility deployment and battery sizing, 
    coupled with a tactical model for charging scheduling under time-of-use tariffs, 
    jointly optimizing infrastructure design and operational charging activities. 
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041">
        <img src="https://songhuahu-umd.github.io/images/Escooter.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041"><b><span style="color: purple;">[JPER]</span></b> </a>
    The correlation between e-scooter sharing (ESS) and docked bikesharing (DBS) remains ambiguous. 
    This study compared usage patterns between the two modes, aiming to unveil their evolving relationship. 
    To account for nonlinear effects, generalized additive mixed models were employed. 
    The findings indicate that both ESS and DBS programs achieved success in densely populated urban areas, 
    areas with younger and higher-income populations, as well as on university campuses. 
    However, a one-sided competitive relationship emerged, with ESS surpassing DBS.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://ieeexplore.ieee.org/abstract/document/9034087">
        <img src="https://songhuahu-umd.github.io/images/EVCARD.jpg" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://ieeexplore.ieee.org/abstract/document/9034087"><b><span style="color: purple;">[IEEE ITSM]</span></b></a> 
    We aim to understand users’ decision-making when selecting electric shared vehicles by analyzing over 
    five million transactions from EVCARD – the biggest EV sharing company in Shanghai.
    We found users are less likely to choose vehicles with greater ages, fewer seats, higher rental prices, and smaller battery ranges. 
    State of charge (SoC) significantly affect users’ preferences on vehicles and users tend to be ‘greedy’ on the SoC, although users 
    with shorter real trip distances presented less range anxiety.
    
  </div>
</div>

---


