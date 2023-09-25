---
layout: archive
title: "Urban Mobility Sensing and Computing"
permalink: /Human Mobility New/
author_profile: true
---

Nowadays, advanced wireless communication, unobtrusive positioning technologies, ubiquitous camera surveillance system, 
and large-scale big data infrastructures have generated extensive volumes of transportation data,
revolutionizing the approach to monitoring, quantifying, and modeling human travel. 
My research aims to fuse these emerging data sources to make urban transportation systems more senseable, intelligent, and efficient.

### <span style="color: green"> Mobile Phone Location </span> 📱📱📱🚶🚶🚶
The 21st century witnessed the wide spread of mobile phones with positioning sensors.
Mobile phone location data contain massive spatiotemporal information on individual travel. 
Compared with traditional surveys and static sensors, mobile phone data have 
high penetration rate, wide spatiotemporal coverage, and real-time update frequency. 
My research demonstrates its strong capability in modelling travel demand, disease transmission, 
accessibility, and social equity:

> <a href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF11.png" width="300" hspace="20"></a> 
Using location data of over 150 million monthly active mobile devices in the US, 
we successfully measures how human mobility change during the COVID-19 pandemic using three metrics: 
average trips per person, average person-miles traveled, and percentage of residents staying home. Date are updated daily 
and made publicly available via an [online platform](https://data.covid.umd.edu/).

> <a href="https://journals.sagepub.com/doi/full/10.1177/03611981211043813"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF3.png" width="300" hspace="20"></a>
By analyzing the mobile device location data during the pandemic, we find a spontaneous mobility reduction that occurred 
regardless of government actions and a ‘floor’ phenomenon, where human mobility reached a lower bound and 
stopped decreasing soon after each state announced the stay-at-home order.
We also document that the states' stay-at-home policies have only led to about a 5% reduction in average human mobility.

---

### <span style="color: green"> Traffic Camera Footage </span> 📹📹📹🚘🚘🚘
Traffic cameras play a crucial role in traffic flow monitoring and traffic violation capture. 
These cameras contain continuous ground-truth visual information on vehicles, pedestrians, and road infrastructure. 
My research leverages them for traffic flow monitoring, traffic emission estimation, and environmental justice analysis：

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/Camera0.png" width="300" hspace="10"></a>
By scraping camera footage from ~ 800 traffic cameras in New York, we reconstruct a citywide emission model to quantify pedestrian exposure to traffic emission considering environmental justice.
Via cutting-edge object detection, tracking, and segmentation method, we extract real-time traffic flow, 
pedestrian volume, and > 3000 vehicle modes from camera footage, providing more accurate and detailed inputs for traffic emission models.

> <a href="https://senseable.mit.edu/"><img style="float: right" src="https://songhuahu-umd.github.io/images/camera0.gif" width="300" hspace="10"></a>
Most traffic cameras installed in the urban area only store low-FPS footage. 
We propose a unified framework capable of extract traffic flow from videos of varying quality, 
covering super-low FPS, low FPS, and high FPS. 
Our approach integrates fundamental diagram, distance-based tracking, and ByteTrack, tailored to the respective FPS. 
We also develop an entirely automated traffic detector generator base on vanishing points and road segmentation.

---


### <span style="color: green"> Social Media Text </span>💬💬💬👥👥👥
Social media comments provide a rich source of text data containing population attitudes, sentiments and perceptions.
Harnessing Large Language Model (LLM), my research focuses on extracting human sentiments regarding topics related to urban planning and travel, 
such as parking issues, accessibility challenges, and fast-growing food delivery services. 
I also fuse them with mobile phone location data to track how individuals respond to natural disasters.

> <a href="https://senseable.mit.edu/"><img style="float: left" src="https://songhuahu-umd.github.io/images/social_media.jpg" width="300" hspace="10"></a>
The surge in food delivery services is reshaping lifestyles and urban form.
Through an analysis of customer reviews of food delivery services extracted from nationwide Google Reviews, 
we examine how people's attitudes to food delivery change over time and identify the key related factors. 
By fusing with mobile phone location data, we further infer whether the growth of delivery services would decrease in-person visit to restaurants.
