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

### Mobile Phone Location
The 21st century witnessed the wide spread of mobile phones with positioning sensors.
Mobile phone location data contain massive spatiotemporal information on individual travel. 
Compared with traditional surveys and static sensors, mobile phone location data have 
high penetration rate, wide spatiotemporal coverage, and near-real-time update frequency. 
My research demonstrates its strong capability in travel demand modelling, infectious disease control, 
accessibility analysis, and social equity assessment:

<a href="https://journals.sagepub.com/doi/full/10.1177/03611981211043813"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF11.png" width="300" hspace="20"></a>
> Using location data of over 150 million monthly active mobile devices in the US, 
we successfully measures how human mobility change during the COVID-19 pandemic using three metrics: 
average trips per person, average person-miles traveled, and percentage of residents staying home. Date are updated daily 
and made publicly available via an [online platform](https://data.covid.umd.edu/).

---

### Traffic Camera Footage
Traffic cameras, deployed by local government worldwide, play a crucial role in traffic flow monitoring and traffic violation capture. 
These cameras contain continuous ground-truth visual information on vehicles, pedestrians, and road infrastructure. 
My research leverages them for tasks such as traffic flow monitoring, traffic emission estimation, and environmental justice analysis：

<img style="float: left" src="https://songhuahu-umd.github.io/images/camera0.gif" width="300" hspace="10">

> By scraping traffic footage from over 800 cameras in New York, we reconstruct a citywide
bottom-up emission model to quantify pedestrian exposure to traffic emission considering potential environmental justice.
Via cutting-edge object detection, tracking, and segmentation method, we extract detailed traffic flow, 
pedestrian volume, and over 3000 vehicle modes from camera footage. 
Extracted information provide more accurate and detailed inputs for both micro and macro traffic emission models.

---

### Social Media Text
Social media comments provide a rich source of text data containing population attitudes, sentiments and perceptions.
My research centers on extracting human sentiments regarding topics related to urban planning and travel from Google Reviews, 
such as parking challenges in dense city center and fast-growing food delivery services. 
I also fuse them with mobile phone location data to track how individuals respond to natural disasters. 
I leverage the Large Language Model (LLM) to enhance the efficiency and accuracy of text mining.

<img style="float: left" src="https://songhuahu-umd.github.io/images/social_media.jpg" width="300" hspace="10">

> The surge in food delivery services is reshaping lifestyles and urban form.
Through an analysis of customer reviews of food delivery services extracted from a nationwide Google Reviews dataset since 2019, 
we aim to examine how people's attitudes to food delivery services change before and after the pandemic, 
and to identify the key factors related to customer sentiments in this context.
