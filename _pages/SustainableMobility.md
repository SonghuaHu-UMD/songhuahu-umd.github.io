---
layout: archive
title: "Sustainable Mobility"
permalink: /SusMobility/
author_profile: true
---

The commitment to decarbonization is driving city decision-makers to leverage emerging techniques to promote sustainability. 
Transport emissions, particularly exhaust emissions from road traffic, remain a major source of greenhouse gases and air pollutants.
Advancing our understanding and developing the tools needed to reduce these emissions is essential to fostering cleaner, more efficient mobility systems.

My research focuses on three key areas: 1) developing cost-effective data and methods to accurately and efficiently monitor and predict large-scale, 
high-resolution traffic emissions; 2) exploring how vehicle electrification can contribute to transport decarbonization, 
while identifying key strategies for optimizing EV operations and charging facility planning; and 3)
modeling the impact of various policies—such as CAV sharing, travel demand management, active travel modes, and ZONE 30—on transport decarbonization.

### <span style="color: green"> Data-driven Emission Inventory Estimation </span> 🌱🌱🌱🌎🌎🌎
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/camera0.gif" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[Under Review]</span></b>
    The car classification scheme of MOVES includes 13 car types, making the preparation of fleet composition inputs challenging. 
    We constructed a world-first customized car-type dataset containing a total of 10,000 images that align with the MOVES source types.
    All images are cropped from the traffic video surveillance collected from ~ 800 traffic cameras in New York, and labeled by GPT4o and validated by human. 
    We then trained a total of 10 image classifiers based on the dataset, with ConvNeXt achieving the best accuracy (92.9%) and efficiency.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/Signal.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[Under Review]</span></b>
    Traffic signal control, particularly in urban areas, contributes to a large number of stops-and-goes and significantly impacts vehicle emissions.
    We developed a signal processing algorithm to infer the directional signal timing from the traffic flow time series extracted from camera videos.
    The signal timing is then applied to the link-level speed profiles to convert them to second-by-second driving cycles.
    We found a significant increase in operation modes 1 (Idle) and 12 (acceleration) after applying the signal control enrichment.
    In addition, PM and NOx shows on average 40-60% increase if considering the signal timing.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/ZONE30.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[Under Review]</span></b>
    The impact of 30 km/h speed limit (ZONE 30) on traffic emissions remain uncertain. 
    We propose a big-data approach to estimate the effects of city-wide Zone 30 on traffic emissions in Milan, Italy, analyzing data collected from over 3.4 million driving trips. 
    Results show that the overall impact of Zone 30 on emissions is modest -- in the most extensive scenario, a 0.61% to 2.73% increase is observed in different emissions. 
    However, these impacts vary significantly across spaces and times, with the most notable increases observed during peak hours and in cross-region travels. 
  </div>
</div>


---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/GEMINI.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[Under Review]</span></b>
    We introduce the design and demonstration of a Digital Twin (DT) platform 
    for road traffic emission nowcasting and forecasting. By integrating multi-source data collected from online repositories and IoT sensors, 
    the platform provides a comprehensive, near-real-time view of road traffic emissions with high spatio-temporal resolution. 
    A streamlined technology backend that connects various data mining and traffic simulation techniques is designed to 
    facilitate forecasting future emissions under different policy interventions.
The DT platform is demonstrated for Kista, Stockholm, through a 3D interactive visualization platform.
  </div>
</div>

<hr style="border:1px solid gray">

### <span style="color: green"> Vehicle Electrification </span> 🔋🔋🔋🚃🚃🚃

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S1361920919311058">
        <img src="https://songhuahu-umd.github.io/images/SharedEV.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[TR Part D]</span></b> 
    Limited battery capacity remains a major obstacle for large-scale adoption of Shared electric vehicles (SEVs), 
    and greatly undermines their popularity. 
    In this study, we employed a discrete-event simulation approach estimate 
    how battery capacity affects the performance of a carsharing program. Results show that limited battery capacity lowered user satisfaction and vehicle utilization in the program. 
    Increased charging speed, maximum range, and vehicle-to-trip ratio help mitigate these negative effects.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X">
        <img src="https://songhuahu-umd.github.io/images/EVBus.jpg" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[TR Part C]</span></b> 
    To address the battery-related shortcomings of battery electric buses (BEBs), dynamic wireless charging (DWC) technology that allows BEBs to charge while in motion has emerged.
    To resolve the DWS planning problem, we propose a (higher-level) strategic planning model that optimizes the deployment of DWC facilities and battery capacity of BEBs, 
    and then establishes a (lower-level) tactical planning model of optimal charging scheduling under the time-of-use (TOU) tariff mechanism considering the interdependence between infrastructure design and charging activities of BEBs. 
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041">
        <img src="https://songhuahu-umd.github.io/images/Escooter.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[JPER]</span></b> 
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
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://ieeexplore.ieee.org/abstract/document/9034087">
        <img src="https://songhuahu-umd.github.io/images/EVCARD.jpg" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[IEEE ITSM]</span></b> 
    We aim to understand users’ decision-making when selecting electric shared vehicles by analyzing over 
    five million transactions from EVCARD – the biggest EV sharing company in Shanghai.
    We found users are less likely to choose vehicles with greater ages, fewer seats, higher rental prices, and smaller battery ranges. 
    State of charge (SoC) significantly affect users’ preferences on vehicles and users tend to be ‘greedy’ on the SoC, although users 
    with shorter real trip distances presented less range anxiety.
    
  </div>
</div>

---


