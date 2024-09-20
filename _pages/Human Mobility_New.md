---
layout: archive
title: "Urban Mobility Sensing and Computing"
permalink: /CrowdSensing/
author_profile: true
---

Nowadays, ubiquitous mobile positioning, camera surveillance, and social media have generated vast amounts of human mobility data,
revolutionizing the approach to monitoring and modeling large-scale human travel. 
My work focuses on extracting useful information from these raw big data and applying them to address various mobility challenges.

### <span style="color: green"> Mobile Device Location </span> 📱📱📱🚶🚶🚶
Mobile devices (cellphones, connected vehicles) with positioning sensors are ubiquitous.
These devices generate vast amounts of spatiotemporal data on individual travel. 
Compared to traditional surveys and static sensors, mobile device location data offer higher penetration rates, broader spatiotemporal coverage, and real-time updates. 
My research showcases their powerful capability in modeling travel demand, vehicle emissions, disease transmission, and network resilience.

> <a href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF11.png" width="300" hspace="20"></a> 
Using location data of over 150 million monthly active mobile devices in the US, 
we successfully measure how human mobility changed during the COVID-19 pandemic using three metrics: 
average trips per person, average person-miles traveled, and percentage of residents staying home. Data are updated daily 
and made publicly available via an [online platform](https://data.covid.umd.edu/).



---

### <span style="color: green"> Traffic Camera Footage </span> 📹📹📹🚘🚘🚘
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

---


### <span style="color: green"> Social Media </span>💬💬💬👥👥👥
Social media comments provide a rich source of text data containing public sentiments and perceptions.
By leveraging both traditional text mining techniques and new LLMs, 
I aim to quantify how people feel about various urban services, 
including parking, accessibility, the built environment, health care services, and food delivery.

> <a href="https://arxiv.org/pdf/2407.05104"><img style="float: left" src="https://songhuahu-umd.github.io/images/parking.png" width="300" hspace="10"></a>
By examining 5 million parking-related reviews for 1.1M POIs sourced from Google Maps reviews, 
we investigate public sentiment towards parking across the whole US at a census block group level. 
We link them with local socio-spatial factors and find denser urban areas with lower socioeconomic status 
are more likely to exhibit negative parking sentiment.

> <a href="https://arxiv.org/pdf/2409.08459"><img style="float: left" src="https://songhuahu-umd.github.io/images/access_framework.png" width="300" hspace="10"></a>
Roughly 30.6 million individuals in the US have physical disabilities that affect their ambulatory activities. 
Despite comprehensive civil rights legislation for Americans with disabilities, many city streets and local services remain inaccessible.
We use Google Maps reviews across the US and fine-tune Llama 3 model with the Low-Rank Adaptation technique to analyze public sentiment on accessibility.
We found areas with more elderly, highly-educated residents exhibit more negative sentiment, but no clear link is found between the presence of disabilities and public sentiments.