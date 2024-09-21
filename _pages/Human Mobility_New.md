---
layout: archive
title: "Urban Mobility Sensing and Computing"
permalink: /CrowdSensing/
author_profile: true
---

<style>
  .gallery {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: nowrap; /* Ensure all images stay on the same line */
    gap: 10px; /* Adds space between the images */
  }

  .image-container {
    text-align: center;
    flex-shrink: 0; /* Prevent shrinking of images, keeping them the same size */
    width: auto; /* Let the width of the image adjust based on its aspect ratio */
  }

  .image-container img {
    height: 180px;  /* Fixed height for all images */
    width: auto;    /* Flexible width depending on the image's aspect ratio */
    object-fit: cover; /* Ensure aspect ratio is maintained */
  }

  .image-title {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
    white-space: normal; /* Allows title text to wrap automatically */
    word-wrap: break-word; /* Ensure long words break if needed */
  }
</style>

Nowadays, ubiquitous mobile positioning, camera surveillance, and social media have generated vast amounts of human mobility data,
revolutionizing the approach to monitoring and modeling large-scale human travel. 
My work focuses on extracting useful information from these raw big data and applying them to address various mobility challenges.

### <span style="color: green"> Mobile Device Location </span> 📱📱📱🚶🚶🚶
Mobile devices (cellphones, connected vehicles) with positioning sensors are ubiquitous.
These devices generate vast amounts of spatiotemporal data on individual travel. 
Compared to traditional surveys and static sensors, mobile device location data offer higher penetration rates, broader spatiotemporal coverage, and real-time updates. 
My research showcases their powerful capability in modeling travel demand, vehicle emissions, disease transmission, and network resilience.


<div class="gallery">
  <div class="image-container">
    <a href="https://data.covid.umd.edu/" target="_blank">
      <img src="https://songhuahu-umd.github.io/images/FF11.png" alt="Title for Image 1"/>
    </a>
    <div class="image-title">University of Maryland COVID-19 Impact Analysis Platform </div>
  </div>

  <div class="image-container">
    <a href="link_to_page2" target="_blank">
      <img src="https://songhuahu-umd.github.io/images/OD2T2.png" alt="Title for Image 2"/>
    </a>
    <div class="image-title">Title for Image 2</div>
  </div>
</div>

<div class="gallery">
  <div class="image-container">
    <a href="link_to_page3" target="_blank">
      <img src="path_to_image3" alt="Title for Image 3"/>
    </a>
    <div class="image-title">Title for Image 3</div>
  </div>

  <div class="image-container">
    <a href="link_to_page4" target="_blank">
      <img src="path_to_image4" alt="Title for Image 4"/>
    </a>
    <div class="image-title">Title for Image 4</div>
  </div>
</div>


[//]: # (<p align="center">)

[//]: # (    <img src="https://songhuahu-umd.github.io/images/FF11.png" alt="Title for Image 1" width="30%" hspace="5"/>)

[//]: # (    <img src="https://songhuahu-umd.github.io/images/OD2T1.png" alt="Title for Image 2" width="30%" hspace="5"/>)

[//]: # (    <img src="https://songhuahu-umd.github.io/images/FF11.png" alt="Title for Image 3" width="30%" hspace="5"/>)

[//]: # (</p>)

[//]: # ()
[//]: # (<p align="center">)

[//]: # (  <b>Title for Image 1</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)

[//]: # (  <b>Title for Image 2</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)

[//]: # (  <b>Title for Image 3</b>)

[//]: # (</p>)

[//]: # (<a href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524"><img style="float: left" src="https://songhuahu-umd.github.io/images/FF11.png" width="300" hspace="20"></a>)

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