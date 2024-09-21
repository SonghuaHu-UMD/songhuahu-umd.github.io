---
layout: archive
title: "Sustainable Mobility"
permalink: /SusMobility/
author_profile: true
---


### <span style="color: green"> Data-driven Emission Inventory Estimation </span> 📹📹📹🚘🚘🚘
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/Cartype.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[Ongoing]</span></b>
    MOtor Vehicle Emission Simulator (MOVES), the primary regulatory model for vehicle emission modeling in the US, includes 13 car types (aka source type). 
    Such a high-detailed and unique car classification scheme makes the preparation of fleet composition inputs quite challenging. 
    Here we constructed a world-first customized car-type dataset containing a total of 10,000 images that align with the MOVES source types.
    All images are cropped from the traffic video surveillance collected from ~ 800 traffic cameras in New York, and labeled by human and GPT4o. We tested a total of 10 image classifiers, 
    with ConvNeXt achieving the best accuracy (92.9%) and efficiency.
  </div>
</div>


<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/Signal.png" alt="Figure" style="width: 400px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <b><span style="color: purple;">[Ongoing]</span></b>
    Traffic signal control, particularly in urban areas, contributes to a large number of stops-and-goes and significantly impacts vehicle emissions.
    We developed a signal processing algorithm to infer the directional signal timing from the traffic flow time series extracted from camera videos.
    The signal timing is then applied to the link-level 1-minute-average speed profiles to convert them to second-by-second driving cycles.
    We found a significant increase in operation modes 1 (Idle) and 12 (acceleration) can be documented after applying the signal control enrichment.
    In addition, PM shows on average 60% increase if considering the signal timing.
  </div>
</div>

Traffic cameras play a crucial role in traffic flow monitoring and traffic violation capture. 
These cameras contain continuous ground-truth visual information on vehicles, pedestrians, and road infrastructure. 
My research leverages them for traffic flow monitoring, traffic emission estimation, and environmental justice analysis：

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/Camera0.png" width="300" hspace="10"></a>
By scraping camera footage from ~ 800 traffic cameras in New York, we reconstruct a citywide emission model to quantify pedestrian exposure to traffic emission considering environmental justice.
Via cutting-edge object detection, tracking, and segmentation methods, we extract real-time traffic flow, 
pedestrian volume, and > 3000 vehicle modes from camera footage, providing more accurate and detailed inputs for traffic emission models.

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/camera0.gif" width="300" hspace="10"></a>
Most traffic cameras installed in the urban area only store low-FPS footage. 
We propose a unified framework capable of extracting traffic flow from videos of varying quality, 
covering super-low FPS, low FPS, and high FPS. 
Our approach integrates fundamental diagram, distance-based tracking, and ByteTrack, tailored to the respective FPS. 
We also develop an entirely automated traffic detector generator based on vanishing points and road segmentation.

### <span style="color: green"> Vehicle Electrification </span> 📹📹📹🚘🚘🚘

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
    This study aims to employ data-driven approaches to understand users’ decision-making when selecting electric shared vehicles.
    Over five million transactions from EVCARD – the biggest EV sharing company in Shanghai is collected and analyzed.
    We found users are less likely to choose vehicles with greater ages, fewer seats, higher rental prices, and smaller battery ranges. State of charge (SoC) significantly affect users’ preferences on vehicles and users tend to be ‘greedy’ on the SoC.
    Results also showed the range anxiety varied over users with different features. Users with shorter real
    trip distances presented less anxiety towards the SoC.
    
  </div>
</div>

---


