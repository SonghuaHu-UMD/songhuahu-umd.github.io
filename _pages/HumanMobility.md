---
layout: archive
title: "Human Mobility Modeling in Transportation"
permalink: /HumanMobility/
author_profile: true
---

Mobile devices (cellphones, connected vehicles, and wearable sensors) generate vast amounts of spatiotemporal data on individual travel.
Compared to traditional surveys and static sensors, these data offer higher penetration rates, broader spatiotemporal coverage, and near-real-time updates.

My research focuses on integrating these emerging data sources with established travel demand modeling frameworks.
This includes: 1) a unified pipeline for parsing multi-source travel data into trip rosters; 2) a suite of spatiotemporal AI models for forecasting future travel demand; and 3) traffic simulation tools for modeling flow at both individual and aggregated levels.

### <span style="color: green"> Unified Pipeline for Data-driven Travel Demand Modeling </span> 🚦🚦🚦🚗🚗🚗

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b">
        <img src="https://songhuahu-umd.github.io/images/OD2T3.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>


  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b"><b><span style="color: purple;">[PhD Dissertation]</span></b></a> 
    Using mobile device location data as the sole input, 
    we built an end-to-end pipeline to extract individual trip rosters. The process encompasses 
    home/work identification, trip detection, mode imputation, population weighting, and validation. 
    Trip rosters are then aggregated at various spatiotemporal resolutions to construct multi-modal OD matrices.
  </div>
</div>


---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/ODFLOW.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[NetMob 2024]</span></b></a> 
    Can mobile-device-derived OD data reliably reproduce road-level traffic flow distributions? 
    We developed an end-to-end pipeline that maps mobile OD matrices onto road networks via dynamic traffic assignment 
    and validated it across 35 metropolitan areas in Mexico, Colombia, Indonesia, and India. 
    Results reveal that the model underperforms in regions with low mobile phone penetration, 
    where zero-flow links and unrealistically low volumes persist even after population weighting.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 20%; text-align: left; margin-right: 5px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/FF61.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 0 0 20%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/FF62.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>

  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[Ongoing]</span></b> </a>
    Mobile device location data capture rich individual travel patterns that are well-suited for dynamic, behavior-oriented simulators. 
    My ongoing work integrates forecasted trip itineraries with micro (Vissim, SUMO), meso (DTALite), 
    and agent-based simulators (MATSim) to enable fine-grained citywide traffic simulation. 
  </div>
</div>


<hr style="border:1px solid gray">

### <span style="color: green"> AI in Human Mobility Forecasting and Reasoning </span> 📈📈📈📉📉📉

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://github.com/SonghuaHu-UMD/MultiSTGraph">
        <img src="https://songhuahu-umd.github.io/images/FF2.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://github.com/SonghuaHu-UMD/MultiSTGraph"><b><span style="color: purple;">[PhD Dissertation]</span></b></a> 
    OD flow forecasting is challenging due to intricate spatiotemporal dependencies and heterogeneous external factors. We propose <a href="https://github.com/SonghuaHu-UMD/MultiSTGraph">Multi-ATGCN</a>,
    a Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network for citywide multi-step OD flow prediction.
    Experiments on two real-world datasets show consistent improvements over state-of-the-art baselines.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758">
        <img src="https://songhuahu-umd.github.io/images/FF16.gif" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758"><b><span style="color: purple;">[TR Part C]</span></b></a> 
    Individual mobility prediction poses unique challenges: high behavioral randomness, multi-task output structures, and severely imbalanced activity distributions.
    We propose a hierarchical activity-based framework that simultaneously predicts the activity, time, and location of each device's next trip, incorporating loss functions from semantic segmentation to handle class imbalance.
    Applied to a county-level dataset of 18,000+ residents, the framework achieves competitive prediction accuracy.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856423001635">
        <img src="https://songhuahu-umd.github.io/images/FF12.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://www.sciencedirect.com/science/article/pii/S0965856423001635"><b><span style="color: purple;">[TR Part A]</span></b></a> 
    Using nationwide CBG-level trip flows from mobile devices as a proxy for travel demand, 
    we examine their relationships with socioeconomic, demographic, and land-use variables. 
    A systematic comparison of 48 explainable ML models and interpretation techniques identifies the best-performing model and validates interpretation robustness. 
    Pronounced nonlinearities, threshold effects, and interaction effects are documented.
  </div>
</div>

---
<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en">
        <img src="https://songhuahu-umd.github.io/images/LLMEvent.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>
  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en"><b><span style="color: purple;">[Ongoing]</span></b></a> 
    Human mobility is highly sensitive to contextual events, including weather, traffic incidents, and social gatherings. 
    We curated over 40 event types from multiple social media platforms to forecast event-driven mobility changes.
    Leveraging LLMs, we predict shifts in both road traffic conditions and community-level travel demand.
    Results show that even a vanilla GPT-4o with in-context learning achieves a MAPE of 15.12%.
  </div>
</div>

---