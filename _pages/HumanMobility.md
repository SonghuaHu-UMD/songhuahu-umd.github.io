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
This includes 1) a unified pipeline for parsing multi-source travel data to derive trip rosters, 2) a set of 
spatiotemporal AI models for forecasting future travel demand, and 3)
a set of traffic simulation tools for simulating traffic flow at both individual and aggregated level.

### <span style="color: green"> Unified Pipeline for Data-driven Travel Demand Modeling </span> 🚦🚦🚦🚗🚗🚗

<div style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;">
  <div style="flex: 0 0 40%; text-align: left; margin-right: 20px;">
    <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b">
        <img src="https://songhuahu-umd.github.io/images/OD2T3.png" alt="Figure" style="width: 100%;" />
    </a>
  </div>


  <div style="flex: 1; text-align: left; margin-right: 20px;">
    <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b"><b><span style="color: purple;">[PhD Dissertation]</span></b></a> 
    Fully relying on mobile device location data, 
    we build a pipeline to extract individual trip rosters. The process includes 
    home&work identification, trip identification, mode imputation, population weighting, and result validation. 
    These trip rosters are then aggregated at different spatiotemporal units to construct multi-modal OD matrices.
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
    Large-scale validation is lacking to assess whether mobile device 
    OD data reliably generates road traffic flow distributions. 
    We developed an end-to-end pipeline to map mobile OD matrices onto road networks using dynamic traffic assignment, 
    applied across 35 metropolitan areas in Mexico, Colombia, Indonesia, and India. 
    Results show that the model fails to capture traffic flow accurately in regions with low mobile phone penetration, 
    where high rates of zero-flow links and unrealistically low traffic volumes persist, even after population weighting.
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
    Mobile device location data provide detailed individual travel information, which is more compatible with dynamic, behavior-oriented, agent-based simulators. 
    My ongoing research focuses on meshing the forecasted trip itinerary with micro (Vissim, SUMO), meso (DTALite), 
    or agent-based simulators (MATSim) to achieve fine-grained citywide simulation. 
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
    OD flow forecasting is challenging due to complex spatiotemporal dependencies and heterogeneous external
    effects. We propose a Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network (<a href="https://github.com/SonghuaHu-UMD/MultiSTGraph">Multi-ATGCN</a>),
    a general deep learning framework for citywide multi-step OD flow forecasting.
    Experiments on two real-world tasks demonstrate its steady performance improvement over state-of-the-art baselines.
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
    Individual mobility forecasting is more challenging because of high randomness of individual travels, 
    multi-structure forecasting tasks, and imbalanced distributions of places and activities.
    We propose a hierarchical activity-based framework for simultaneously predicting the activity, time, and location of
    the next trip for each device. Meanwhile, loss functions in the semantic segmentation domain are introduced to address the imbalanced classification issue.
    The whole framework is applied on a county-level dataset covering over 18,000 residents and shows acceptable prediction accuracy.
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
    Using nationwide CBG-level trip flow derived from mobile devices as the proxy of travel demand, 
    We examine its relations with socioeconomics, demographics, and land use. 
    Over 48 explainable machine learning models and interpretation techniques are compared to determine the 
    best model for demand forecasting and justify interpretation robustness. 
    Pronounced nonlinearities, threshold effects, and interaction effects are observed.
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
    Human mobility is highly sensitive to different events (weather conditions, traffic incidents, and social gatherings). 
    We collected over 40 different types of events from multiple social media platforms and to forecast human mobility change under these events.
    Leveraging LLMs, we focused on forecasting changes in both road traffic conditions and community travel demand.
    Results show that even a Vanilla GPT4o with some in-context learning can achieve 15.12% of MAPE.
  </div>
</div>

---