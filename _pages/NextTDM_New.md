---
layout: archive
title: "Next-Generation Travel Demand Modelling"
permalink: /NextTDM/
author_profile: true
---

Traditional travel demand models heavily rely on travel surveys, which are costly, laborious, and suffer from
small-sample and infrequent issues.
My Ph.D. dissertation focuses on building a next-generation travel demand model which is fully big-data-driven.
This includes 1) a normative pipeline for parsing multi-source travel data to derive trip rosters and 
multi-modal OD matrices, 2) a set of spatiotemporal neural networks for forecasting future travel demand, and 3) 
a set of traffic simulation tools for simulating traffic flow at both individual and aggregated level.

### <span style="color: green"> Big-data-driven Travel Demand Estimation </span> 📑📑📑🚩🚩🚩

> <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b"><img style="float: left" src="https://songhuahu-umd.github.io/images/FFF1.png" width="300" hspace="20"></a> 
Fully relying on mobile device location data and using travel survey as a validation, 
we build a pipeline to extract trip rosters for each observed individual. The process includes 
home&work identification, trip identification, mode imputation, population weighting, and result validation. 
These trip rosters are then aggregated at different spatiotemporal units to construct multi-modal OD matrices.
The whole pipeline is employed on AWS EMR and shows the feasibility in timely quantifying large-scale human travel patterns.

> <a href="https://www.sciencedirect.com/science/article/pii/S0965856423001635"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF12.png" width="300" hspace="20"></a>
Using the nationwide census block group-level trip flow derived from mobile device locations as the proxy of travel demand, 
we examine its relations with various factors including socioeconomics, demographics, and land use. 
A host of tree-based machine learning models and interpretation techniques are extensively compared to determine the 
best model architecture and justify interpretation robustness. Pronounced nonlinearities, threshold effects, and interaction effects 
are observed in relations among travel demand and most of its determinants.

---

### <span style="color: green"> Deep-learning-based Travel Demand Forecasting </span> 📈📈📈📉📉📉

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/FF2.png" width="300" hspace="10"></a>
OD flow forecasting is challenging due to complex spatiotemporal dependencies and heterogeneous external
effects. I proposed a Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network ([Multi-ATGCN](https://github.com/SonghuaHu-UMD/MultiSTGraph)),
a general deep learning framework for citywide multi-step OD flow forecasting.
Experiments on two real-world tasks demonstrate its steady performance improvement over state-of-the-art baselines.

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/FF16.gif" width="300" hspace="10"></a>
Compared with aggregated forecasting, individual-level trip itinerary forecasting is more challenging 
because of highly-random spatiotemporal patterns of individual travels, multi-structure forecasting tasks, and imbalanced distributions of places and activities.
I propose a hierarchical activity-based framework for simultaneously predicting the activity, time, and location of
the next trip for each device. Meanwhile, loss functions in the semantic segmentation domain are introduced to address the imbalanced classification issue.
The whole framework was applied on a county-level dataset covering 2-month trips from over 18,000 devices and showed acceptable prediction accuracy.
---

### <span style="color: green"> Multi-dimensional Traffic Simulation </span>🚦🚦🚦🚗🚗🚗

> <a href="https://senseable.mit.edu/"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF62.gif" width="300" hspace="10"></a>

> <a href="https://senseable.mit.edu/"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF61.gif" width="300" hspace="10"></a>
