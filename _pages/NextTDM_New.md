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
The 21st century witnessed the wide spread of mobile phones with positioning sensors.
Mobile phone location data contain massive spatiotemporal information on individual travel. 
Compared with traditional surveys and static sensors, mobile phone data have 
high penetration rate, wide spatiotemporal coverage, and real-time update frequency. 
My research demonstrates its strong capability in modelling travel demand, disease transmission, 
accessibility, and social equity:

> <a href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b"><img style="float: left" src="https://songhuahu-umd.github.io/images/FFF1.png" width="300" hspace="20"></a> 
In my PhD dissertation, I build a pipeline to extract multimodal OD matrix from mobile device location data, including 
home&work identification, trip identification, mode imputation, population weighting, and result validation. 

> <a href="https://www.sciencedirect.com/science/article/pii/S0965856423001635"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF12.png" width="300" hspace="20"></a>
Using the nationwide census block group (CBG)-level trip flow derived from mobile device locations as the proxy of travel demand, 
we examine its relations with various factors including socioeconomics, demographics, land use, and CBG attributes. 
A host of tree-based machine learning models and interpretation techniques are extensively compared to determine the 
best model architecture and justify interpretation robustness. Pronounced nonlinearities, threshold effects, and interaction effects 
are observed in relations among travel demand and most of its determinants
---

### <span style="color: green"> Deep-learning-based Travel Demand Forecasting </span> 📈📈📈📉📉📉
Traffic cameras play a crucial role in traffic flow monitoring and traffic violation capture. 
These cameras contain continuous ground-truth visual information on vehicles, pedestrians, and road infrastructure. 
My research leverages them for traffic flow monitoring, traffic emission estimation, and environmental justice analysis：

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/FF2.png" width="300" hspace="10"></a>
By scraping camera footage from ~ 800 traffic cameras in New York, we reconstruct a citywide emission model to quantify pedestrian exposure to traffic emission considering environmental justice.
Via cutting-edge object detection, tracking, and segmentation method, we extract real-time traffic flow, 
pedestrian volume, and > 3000 vehicle modes from camera footage, providing more accurate and detailed inputs for traffic emission models.

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/FF16.gif" width="300" hspace="10"></a>
Most traffic cameras installed in the urban area only provide low-FPS footage to the public. 
We propose a unified framework capable of extract traffic flow from videos of varying quality, 
covering super-low FPS (< 1/5), low FPS (1/5 - 1), and high FPS (>1). 
Our approach integrates fundamental diagram, distance-based tracking, and ByteTrack methods, tailored to the respective FPS types. 
We also develop an entirely automated traffic detector generator that leverages vanishing point detection and road segmentation techniques.

---

### <span style="color: green"> Multi-dimensional Traffic Simulation </span>🚦🚦🚦🚗🚗🚗
Social media comments provide a rich source of text data containing population attitudes, sentiments and perceptions.
Harnessing Large Language Model (LLM), my research focuses on extracting human sentiments regarding topics related to urban planning and travel, 
such as parking issues, accessibility challenges, and fast-growing food delivery services. 
I also fuse them with mobile phone location data to track how individuals respond to natural disasters.

> <a href="https://senseable.mit.edu/"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF62.gif" width="300" hspace="10"></a>
The surge in food delivery services is reshaping lifestyles and urban form.
Through an analysis of customer reviews of food delivery services extracted from nationwide Google Reviews, 
we examine how people's attitudes to food delivery change over time and identify the key related factors. 
By fusing with mobile phone location data, we further infer whether the growth of delivery services would decrease in-person visit to restaurants.

> <a href="https://senseable.mit.edu/"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF61.gif" width="300" hspace="10"></a>
The surge in food delivery services is reshaping lifestyles and urban form.
Through an analysis of customer reviews of food delivery services extracted from nationwide Google Reviews,
we examine how people's attitudes to food delivery change over time and identify the key related factors.
By fusing with mobile phone location data, we further infer whether the growth of delivery services would decrease in-person visit to restaurants.
