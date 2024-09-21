---
layout: archive
title: "Human Mobility Modeling in Transportation"
permalink: /HumanMobility/
author_profile: true
---

Mobile devices (cellphones, connected vehicles) with positioning sensors are ubiquitous.
These devices generate vast amounts of spatiotemporal data on individual travel.
Compared to traditional surveys and static sensors, mobile device location data offer higher penetration rates, 
broader spatiotemporal coverage, and real-time updates.
My research focus on combining these big data with traditional travel demand model.

### <span style="color: green"> Multi-modal OD Matrix Estimation </span> 📑📑📑🚩🚩🚩

<div style="display: flex; justify-content: center; align-items: center; margin-up: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b">
        <img src="https://songhuahu-umd.github.io/images/FFF1.png" alt="Figure" style="width: 350px;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    Fully relying on mobile device location data, we build a pipeline to extract individual trip rosters. The process includes 
    home&work identification, trip identification, mode imputation, population weighting, and result validation. 
    These trip rosters are then aggregated at different spatiotemporal units to construct multi-modal OD matrices.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-up: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 auto; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856423001635">
        <img src="https://songhuahu-umd.github.io/images/FF12.png" alt="Figure" style="width: 350px;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    Using nationwide CBG-level trip flow derived from mobile devices as the proxy of travel demand, 
    We examine its relations with socioeconomics, demographics, and land use. 
    Over 6*8 machine learning models and interpretation techniques are compared to determine the 
    best model and justify interpretation robustness. 
    Pronounced nonlinearities, threshold effects, and interaction effects are observed.
  </div>
</div>


---

### <span style="color: green"> Deep-learning-based Travel Demand Forecasting </span> 📈📈📈📉📉📉

> <a href="https://github.com/SonghuaHu-UMD/MultiSTGraph"><img style="float: right" src="https://songhuahu-umd.github.io/images/FF2.png" width="300" hspace="10"></a>
OD flow forecasting is challenging due to complex spatiotemporal dependencies and heterogeneous external
effects. We propose a Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network ([Multi-ATGCN](https://github.com/SonghuaHu-UMD/MultiSTGraph)),
a general deep learning framework for citywide multi-step OD flow forecasting.
Experiments on two real-world tasks demonstrate its steady performance improvement over state-of-the-art baselines.

> <a href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758"><img style="float: right" src="https://songhuahu-umd.github.io/images/FF16.gif" width="300" hspace="10"></a>
Individual mobility forecasting is more challenging because of high randomness of individual travels, 
multi-structure forecasting tasks, and imbalanced distributions of places and activities.
We propose a hierarchical activity-based framework for simultaneously predicting the activity, time, and location of
the next trip for each device. Meanwhile, loss functions in the semantic segmentation domain are introduced to address the imbalanced classification issue.
The whole framework is applied on a county-level dataset covering over 18,000 residents and shows acceptable prediction accuracy.

---

### <span style="color: green"> Multi-dimensional Traffic Simulation </span>🚦🚦🚦🚗🚗🚗

> <a href="https://songhuahu-umd.github.io/NextTDM/"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF62.gif" width="300" hspace="10"></a>
Integrating forecasted travel demand with traffic simulators completes the last puzzle of a travel demand model.
At an aggregated level, we feed the predicted OD matrices into a dynamic traffic assignment tool, DTALite, to generate link traffic speed and volume.
Simulated results are compared with field observations collected from roadside sensors to validate the whole data-driven travel demand model.

> <a href="https://songhuahu-umd.github.io/NextTDM/"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF61.gif" width="300" hspace="10"></a>
Mobile device location data provide detailed individual travel information, which is more compatible with behavior-oriented agent-based simulators. 
My ongoing research focuses on meshing the forecasted trip itinerary with micro (Vissim, SUMO) 
or agent-based simulators (MATSim) with high computational efficiency to achieve fine-grained citywide simulation. 