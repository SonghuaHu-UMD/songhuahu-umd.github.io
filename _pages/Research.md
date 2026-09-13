---
layout: archive
title: "Research"
title_zh: "研究"
permalink: /research/
author_profile: true
---

<style>
.research-page {
  --c-mob: #2980b9;
  --c-sus: #27ae60;
  --c-res: #e67e22;
  --c-hea: #c0392b;
  --c-mis: #8e44ad;
}
.research-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0 -1em 3em;
  padding: 0.8em 1em;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
}
.research-nav a {
  display: inline-block;
  padding: 0.4em 1em;
  border-radius: 999px;
  border: 1px solid #ddd;
  color: #555;
  font-size: 0.85em;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}
.research-nav a:hover {
  color: white;
  background: var(--hover, #2c3e50);
  border-color: var(--hover, #2c3e50);
}

.r-section {
  padding: 2em 0 1.2em;
  scroll-margin-top: 80px;
  border-top: 1px solid #eee;
}
.r-section:first-of-type { border-top: none; padding-top: 0.5em; }
.r-section .r-eyebrow {
  font-size: 1.25em;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.6em;
}
.r-section h2 {
  font-size: 1.6em;
  font-weight: 400;
  letter-spacing: -0.01em;
  margin: 0 0 0.5em;
  color: #2c3e50;
  border: none;
  padding: 0;
}
.r-section .r-lead {
  color: #666;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 1.4em;
}
.r-subhead {
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: var(--accent);
  margin: 1.6em 0 0.9em;
  padding-left: 0.8em;
  border-left: 3px solid var(--accent);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2em;
  margin-bottom: 0.6em;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  color: inherit;
}
.card-link {
  position: absolute;
  inset: 0;
  z-index: 1;
  text-indent: -9999em;
  overflow: hidden;
  white-space: nowrap;
}
.card-body a {
  position: relative;
  z-index: 2;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  border-color: var(--accent);
}
.card-img {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f5f5f5;
}
.card-img img,
.card-img video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.card:hover .card-img img,
.card:hover .card-img video { transform: scale(1.04); }
.card-body {
  padding: 1em 1.2em 1.3em;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.card-venue {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, white);
  padding: 0.25em 0.7em;
  border-radius: 4px;
  margin-bottom: 0.7em;
}
.card-text {
  color: #4a4a4a;
  font-size: 0.92em;
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 900px) {
  .card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 600px) {
  .r-section h2 { font-size: 1.4em; }
  .card-grid { grid-template-columns: 1fr; }
}

#back-to-top {
  position: fixed;
  bottom: 1.2em;
  right: 1.2em;
  z-index: 100;
  width: 2.6em;
  height: 2.6em;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  color: #444;
  font-size: 1.1em;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease, background 0.15s ease;
}
#back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
#back-to-top:hover { background: #f5f5f5; }
</style>

<script>
  (function () {
    function init() {
      var btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '&#8593;';
      btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.body.appendChild(btn);
      window.addEventListener('scroll', function () {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
      }, { passive: true });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else { init(); }
  })();
</script>

<div class="research-page">

<nav class="research-nav">
  <a href="#mobility"        style="--hover: var(--c-mob);"><span class="lang-en">Mobility</span><span class="lang-zh">出行</span></a>
  <a href="#resilience"      style="--hover: var(--c-res);"><span class="lang-en">Resilience</span><span class="lang-zh">韧性</span></a>
  <a href="#sustainability"  style="--hover: var(--c-sus);"><span class="lang-en">Sustainability</span><span class="lang-zh">可持续</span></a>
  <a href="#health"          style="--hover: var(--c-hea);"><span class="lang-en">Health</span><span class="lang-zh">健康</span></a>
  <a href="#beyond"          style="--hover: var(--c-mis);"><span class="lang-en">Beyond</span><span class="lang-zh">其他方向</span></a>
</nav>

<!-- ========================================== MOBILITY ========================================== -->
<section class="r-section" id="mobility" style="--accent: var(--c-mob);">
  <div class="r-eyebrow">01 / <span class="lang-en">Mobility</span><span class="lang-zh">出行</span></div>
  <p class="r-lead">
    <span class="lang-en">Mobile phones, connected vehicles, and wearable sensors generate huge amounts of data on how people move. My work uses this data to estimate travel demand, forecast future flows with AI, and run fine-grained citywide traffic simulations.</span><span class="lang-zh">手机、网联车辆与可穿戴传感器持续产生海量的人员移动数据。我的研究利用这些数据估计出行需求、以人工智能预测未来流量，并开展精细化的全城交通仿真。</span>
  </p>

  <div class="r-subhead"><span class="lang-en">Data-driven Travel Demand Modeling</span><span class="lang-zh">数据驱动的出行需求建模</span></div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/FF61.mp4" aria-label="Traffic simulation animation"></video></div>
      <div class="card-body">
        <span class="card-venue">Ongoing · 2026</span>
        <p class="card-text"><span class="lang-en">An <strong>LLM</strong> agent takes forecasted trips and runs them in mainstream traffic simulators (Vissim, SUMO, DTALite, MATSim). The LLM picks the right tool, sets the parameters, and writes the behavior plans, so citywide simulations can be built directly from mobile location data.</span><span class="lang-zh">一个 <strong>LLM</strong> 智能体接收预测出行需求，并在主流交通仿真器（Vissim、SUMO、DTALite、MATSim）中运行。该智能体自行选择工具、设定参数并编写行为计划，使全城仿真可以直接由手机定位数据构建。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/ODFLOW.png" alt="OD validation across cities"></div>
      <div class="card-body">
        <span class="card-venue">NetMob 2024</span>
        <p class="card-text"><span class="lang-en">Can phone-based origin-destination (OD) data reproduce real road-level traffic? We test this across 35 cities in Mexico, Colombia, Indonesia, and India. The model works well overall but struggles where smartphone use is low.</span><span class="lang-zh">基于手机的起讫点（OD）数据能否复现真实的路段级交通？我们在墨西哥、哥伦比亚、印度尼西亚与印度的 35 个城市开展验证。模型整体表现良好，但在智能手机普及率偏低的地区效果欠佳。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://drum.lib.umd.edu/items/4be96816-0aaf-4d4d-a1f0-11593c284d8b" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/OD2T3.png" alt="End-to-end mobility pipeline"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation · 2023</span>
        <p class="card-text"><span class="lang-en">A full pipeline that turns raw phone location data into trip records for each user. It identifies home and work, detects trips, infers travel mode, and reweights to the population. The trips then aggregate into multi-modal OD matrices.</span><span class="lang-zh">一套将原始手机定位数据转化为逐用户出行记录的完整流程：识别居住地与工作地、检测出行、推断出行方式，并按人口加权还原。这些出行最终汇总为多方式 OD 矩阵。</span></p>
      </div>
    </div>

  </div>

  <div class="r-subhead"><span class="lang-en">AI for Mobility Forecasting & Reasoning</span><span class="lang-zh">面向出行预测与推理的人工智能</span></div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://github.com/SonghuaHu-UMD/MultiSTGraph" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF2.png" alt="Multi-ATGCN architecture"></div>
      <div class="card-body">
        <span class="card-venue">PhD Dissertation · 2023</span>
        <p class="card-text"><span class="lang-en"><strong>Multi-ATGCN</strong> (<em>Multi-graph Multi-head Adaptive Temporal Graph Convolutional Network</em>) forecasts citywide origin-destination flows in the future. It learns the spatial structure from multiple graphs and adapts to real-time conditions, outperforming strong baselines on several datasets.</span><span class="lang-zh"><strong>Multi-ATGCN</strong>（<em>多图多头自适应时空图卷积网络</em>）用于预测未来的全城起讫点流量。模型从多个图中学习空间结构并自适应实时状况，在多个数据集上优于强基线方法。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856423001635" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/image39.mp4" aria-label="Explainable ML comparison"></video></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2023</span>
        <p class="card-text"><span class="lang-en">Using nationwide phone-derived trip flows as a travel-demand proxy, we benchmark 48 explainable ML models against multiple interpretation techniques. Results reveal strong nonlinear relationships and threshold effects between travel demand and its drivers.</span><span class="lang-zh">以全国范围手机推断的出行流量作为出行需求的代理变量，我们对 48 个可解释机器学习模型与多种解释方法进行基准比较。结果揭示了出行需求与其影响因素之间显著的非线性关系与阈值效应。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X22003758" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/FF16.mp4" aria-label="Hierarchical activity prediction"></video></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2022</span>
        <p class="card-text"><span class="lang-en">A deep learning framework jointly predicts the activity, time, and location of each user's next trip. We borrow loss functions from image segmentation to handle the highly imbalanced activity distribution across more than 18,000 residents.</span><span class="lang-zh">一个深度学习框架，联合预测每位用户下一次出行的活动类型、时间与地点。我们借鉴图像分割中的损失函数，以应对 18,000 余名居民中高度不平衡的活动分布。</span></p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== RESILIENCE ========================================== -->
<section class="r-section" id="resilience" style="--accent: var(--c-res);">
  <div class="r-eyebrow">02 / <span class="lang-en">Resilience</span><span class="lang-zh">韧性</span></div>
  <p class="r-lead">
    <span class="lang-en">Disasters, pandemics, and extreme weather profoundly disrupt how people travel. My work measures travel patterns before, during, and after such events, with a particular focus on which underserved communities recover the slowest.</span><span class="lang-zh">灾害、疫情与极端天气会深刻扰动人们的出行。我的研究刻画此类事件发生前、发生中与发生后的出行模式，并特别关注哪些弱势社区恢复得最慢。</span>
  </p>

  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://doi.org/10.1016/j.jtrangeo.2025.104423" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/hurricane_laura.png" alt="Hurricane Laura mobility and COVID spread"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2025</span>
        <p class="card-text"><span class="lang-en">A Hurricane Laura case study: when disasters and pandemics overlap, evacuation flows reshape mobility and spread COVID-19 across counties. Disadvantaged communities face both higher exposure and slower recovery.</span><span class="lang-zh">以飓风 Laura 为例：当灾害与疫情叠加，疏散流会重塑出行格局并将新冠疫情扩散至各县。弱势社区同时面临更高的暴露风险与更慢的恢复速度。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://doi.org/10.1016/j.compenvurbsys.2025.102333" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/wildfire_sir.png" alt="Wildfire socio-spatial response analysis"></div>
      <div class="card-body">
        <span class="card-venue">CEUS · 2025</span>
        <p class="card-text"><span class="lang-en">We combine SIR-style diffusion models with NLP on social media to study how the US public responds to wildfires. The model captures how concern spreads across regions and which socioeconomic factors shape community reactions.</span><span class="lang-zh">我们将 SIR 类扩散模型与社交媒体自然语言处理相结合，研究美国公众对野火的反应。模型刻画了关注度如何跨区域扩散，以及哪些社会经济因素塑造了社区的反应。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1366554525006568" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/PartE.jpg" alt="Network resilience survey"></div>
      <div class="card-body">
        <span class="card-venue">TR Part E · 2025</span>
        <p class="card-text"><span class="lang-en">A comprehensive review of how to model, measure, and optimize the resilience of multi-modal urban transport networks (road, transit, shared mobility), with a look ahead at next-generation infrastructure.</span><span class="lang-zh">对多方式城市交通网络（道路、公共交通、共享出行）韧性的建模、度量与优化方法进行系统综述，并展望下一代基础设施。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2212420924005168" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/weatherroad.png" alt="Weather impact on traffic"></div>
      <div class="card-body">
        <span class="card-venue">IJDRR · 2024</span>
        <p class="card-text"><span class="lang-en">We compare passive phone data with active Waze reports for tracking how extreme weather affects road traffic. Active reports underestimate severity because fewer users go outside as conditions worsen, and they stop reporting.</span><span class="lang-zh">我们比较被动式手机数据与主动式 Waze 上报数据在追踪极端天气对道路交通影响时的表现。主动上报会低估严重程度：天气越恶劣，外出的用户越少，上报也随之停止。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920920308397" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF33.png" alt="Transit ridership decline"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2021</span>
        <p class="card-text"><span class="lang-en">Twenty years of Chicago transit ridership analyzed with Bayesian time series. After controlling for socioeconomic factors, the pandemic-driven decline was sharpest in commercial areas and in white, educated, high-income neighborhoods.</span><span class="lang-zh">用贝叶斯时间序列分析芝加哥二十年的公共交通客流。在控制社会经济因素后，疫情导致的下降在商业区以及白人、高学历、高收入社区最为显著。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321000508" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/bikeshare.png" alt="Chicago bikesharing patterns"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2021</span>
        <p class="card-text"><span class="lang-en">We track Chicago bikesharing across the pandemic and compare it with transit, driving, and walking. Bikesharing is the most resilient mode, but high-income station areas saw the largest swings, both up and down.</span><span class="lang-zh">我们追踪疫情期间芝加哥的共享单车使用，并与公共交通、驾车和步行对比。共享单车是韧性最强的方式，但高收入站点周边的波动（无论上升还是下降）也最大。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X20308524" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF11.png" alt="Pandemic mobility tracker"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2020</span>
        <p class="card-text"><span class="lang-en">We track pandemic-era US mobility from 150 million phones, summarizing trips per person, person-miles traveled, and share staying home. Daily numbers are public on this <a href="https://data.covid.umd.edu/">platform</a>.</span><span class="lang-zh">我们基于 1.5 亿部手机刻画美国疫情期间的出行，汇总人均出行次数、人均出行里程与居家比例。每日数据公开于该<a href="https://data.covid.umd.edu/">平台</a>。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2020.0344" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF3.png" alt="Stay-at-home mobility floor"></div>
      <div class="card-body">
        <span class="card-venue">J. R. Soc. Interface · 2020</span>
        <p class="card-text"><span class="lang-en">Phone data show that Americans cut travel before any stay-at-home orders, then hit a "floor" once orders began. State-level policies explain only about five percent of the total mobility decline.</span><span class="lang-zh">手机数据显示，美国人在任何居家令出台之前就已减少出行，并在居家令实施后触及"地板"。州级政策仅能解释出行总体下降的约 5%。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/8569639" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Flood.png" alt="Urban flood detection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSC · 2018</span>
        <p class="card-text"><span class="lang-en">We combine social media posts, rainfall, and traffic flow data to automatically detect flooded urban roads in Shenzhen. The system catches 68 to 90 percent of floods with only 1.5 to 2 percent false alarms.</span><span class="lang-zh">我们结合社交媒体发文、降雨与交通流数据，自动识别深圳的城市道路积水路段。系统可捕捉 68% 至 90% 的积水事件，误报率仅 1.5% 至 2%。</span></p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== SUSTAINABILITY ========================================== -->
<section class="r-section" id="sustainability" style="--accent: var(--c-sus);">
  <div class="r-eyebrow">03 / <span class="lang-en">Sustainability</span><span class="lang-zh">可持续</span></div>
  <p class="r-lead">
    <span class="lang-en">Transport remains a major source of greenhouse gases and air pollution. My work develops low-cost methods to monitor and predict emissions at scale, advances vehicle electrification, and evaluates urban policies such as speed limits and demand management.</span><span class="lang-zh">交通至今仍是温室气体与空气污染的主要来源之一。我的研究开发可大规模部署的低成本排放监测与预测方法，推动车辆电动化，并评估限速、需求管理等城市政策。</span>
  </p>

  <div class="r-subhead"><span class="lang-en">Data-driven Emission Inventory</span><span class="lang-zh">数据驱动的排放清单</span></div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.researchsquare.com/article/rs-7256883/v1" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/camera0.mp4" aria-label="Camera-based vehicular emission estimation"></video></div>
      <div class="card-body">
        <span class="card-venue">Under Review · 2026</span>
        <p class="card-text"><span class="lang-en">We use computer vision to estimate emissions for each vehicle in traffic camera video. A 2.2-million-image dataset classifies 4,923 car models, and an enhanced COPERT formula adds vehicle speed and acceleration recovered by tracking.</span><span class="lang-zh">我们用计算机视觉为交通摄像头视频中的每一辆车估算排放。一个 220 万张图像的数据集可识别 4,923 种车型；改进的 COPERT 公式进一步纳入由目标跟踪还原的车速与加速度。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.nature.com/articles/s41893-026-01797-9" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/s9-policy.mp4" aria-label="Signal-aware emission framework"></video></div>
      <div class="card-body">
        <span class="card-venue">Nature Sustainability · 2026</span>
        <p class="card-text"><span class="lang-en">A city-scale traffic emission framework that fuses camera videos with phone location data. By inferring the timing of every traffic signal, we show that real stop-and-go cycles raise PM and NOx emissions 40 to 60 percent above standard methods.</span><span class="lang-zh">一个融合摄像头视频与手机定位数据的城市尺度交通排放框架。通过推断每个信号灯的配时，我们发现真实的走停循环会使 PM 与 NOx 排放比标准方法高出 40% 至 60%。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciopen.com/article/10.26599/JICV.2026.9210079" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/s1-hero.mp4" aria-label="Digital Twin emission platform"></video></div>
      <div class="card-body">
        <span class="card-venue">J. Intelligent &amp; Connected Vehicles · 2026</span>
        <p class="card-text"><span class="lang-en">A Digital Twin platform that estimates and forecasts road traffic emissions in near real time. By combining open repositories with IoT sensors, it lets users test alternative policy scenarios. Demonstrated for Kista, Stockholm with a 3D interactive interface.</span><span class="lang-zh">一个近实时估算与预测道路交通排放的数字孪生平台。它将开放数据仓库与物联网传感器结合，支持用户测试不同政策情景，并在斯德哥尔摩 Kista 地区以三维交互界面进行了演示。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856425003386" aria-label="Read more"></a>
      <div class="card-img"><video autoplay loop muted playsinline preload="metadata" src="/images/zone_30.mp4" aria-label="Zone 30 emission analysis"></video></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2025</span>
        <p class="card-text"><span class="lang-en">Using 3.4 million driving trips, we measure how Milan's Zone 30 changes emissions. Citywide changes are small (0.6 to 2.7 percent) but uneven across space and time, with the largest jumps on cross-zone trips at rush hour.</span><span class="lang-zh">基于 340 万次驾车出行，我们测量了米兰 Zone 30 限速区对排放的影响。全市层面的变化幅度不大（0.6% 至 2.7%），但在时空上分布不均，高峰时段的跨区出行变化最大。</span></p>
      </div>
    </div>

  </div>

  <div class="r-subhead"><span class="lang-en">Vehicle Electrification & Sharing</span><span class="lang-zh">车辆电动化与共享</span></div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X2300459X" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVBus.jpg" alt="Dynamic wireless charging buses"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2023</span>
        <p class="card-text"><span class="lang-en">A two-level optimization for electric buses with dynamic wireless charging. The upper level decides where to put charging facilities and how big batteries should be; the lower level schedules daily charging under time-of-use electricity prices.</span><span class="lang-zh">面向动态无线充电电动公交的双层优化。上层决定充电设施选址与电池容量，下层在分时电价下编排每日充电计划。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://ieeexplore.ieee.org/abstract/document/9034087" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/EVCARD.jpg" alt="EVCARD vehicle selection"></div>
      <div class="card-body">
        <span class="card-venue">IEEE ITSM · 2020</span>
        <p class="card-text"><span class="lang-en">Five million EVCARD trips show that users avoid older, smaller, and pricier shared electric vehicles. State of charge matters most. Users are "greedy": they pick the most-charged car even when their actual trip is short.</span><span class="lang-zh">500 万次 EVCARD 出行显示，用户会回避较旧、较小、价格较高的共享电动汽车，其中电量是最关键的因素。用户是"贪心"的：即便实际行程很短，也倾向于选择电量最满的车。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920919311058" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/SharedEV.png" alt="Shared EV simulation"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2019</span>
        <p class="card-text"><span class="lang-en">A simulation shows how limited battery capacity hurts both user satisfaction and fleet utilization in shared electric vehicles. Faster charging, longer range, and a larger fleet-to-trip ratio all help reduce the problem.</span><span class="lang-zh">仿真表明，有限的电池容量会同时损害共享电动汽车的用户满意度与车队利用率。更快的充电、更长的续航以及更高的车辆与出行比，都有助于缓解该问题。</span></p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== HEALTH ========================================== -->
<section class="r-section" id="health" style="--accent: var(--c-hea);">
  <div class="r-eyebrow">04 / <span class="lang-en">Health</span><span class="lang-zh">健康</span></div>
  <p class="r-lead">
    <span class="lang-en">The COVID-19 pandemic showed how tightly human mobility is coupled to disease dynamics. My work combines econometric, epidemiological, and simulation models to disentangle the causal links among mobility, vaccination, public policy, and infection outcomes.</span><span class="lang-zh">新冠疫情表明，人类出行与疾病传播动力学紧密耦合。我的研究综合运用计量经济、流行病学与仿真模型，厘清出行、疫苗接种、公共政策与感染结果之间的因果联系。</span>
  </p>

  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X23006175" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF4.png" alt="Vaccination Omicron analysis"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine · 2023</span>
        <p class="card-text"><span class="lang-en">Two years of US county data on vaccines, mobility, and outcomes. During the Omicron wave, vaccines became less effective at preventing cases but kept reducing deaths. An NIH-funded agent-based extension is underway.</span><span class="lang-zh">两年的美国县级疫苗、出行与健康结果数据。在奥密克戎流行期间，疫苗预防感染的效果下降，但仍持续降低死亡。由 NIH 资助的基于智能体的拓展研究正在进行中。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S2210670721007721" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/racial.jpg" alt="Health disparity analysis"></div>
      <div class="card-body">
        <span class="card-venue">SCS · 2022</span>
        <p class="card-text"><span class="lang-en">Linking COVID-19 outcomes to demographics, occupation, and politics, we find a structural inequality. Social distancing was a "privilege" of advantaged groups; disadvantaged communities bore the heaviest case and death burdens.</span><span class="lang-zh">将新冠结果与人口结构、职业与政治倾向关联，我们发现了结构性的不平等：保持社交距离是优势群体的"特权"，而弱势社区承担了最重的感染与死亡负担。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264410X22009471" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF41.png" alt="Vaccine hesitancy study"></div>
      <div class="card-body">
        <span class="card-venue">Vaccine · 2022</span>
        <p class="card-text"><span class="lang-en">Mediation analysis shows that self-reported vaccine hesitancy does not fully explain US vaccination gaps. Structural access barriers (e.g., distance, time, distrust of institutions) play an equally important role.</span><span class="lang-zh">中介分析表明，自述的疫苗犹豫并不能完全解释美国的接种差距。结构性的可及性障碍（如距离、时间、对机构的不信任）同样重要。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0259803" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/raceplos.png" alt="Mediation analysis"></div>
      <div class="card-body">
        <span class="card-venue">PLOS ONE · 2021</span>
        <p class="card-text"><span class="lang-en">Structural equation modeling on 4.4 million POI tracking records shows that mobility drives COVID-19 case rates but not death rates. The mediation effect varies sharply across racial and ethnic compositions of US counties.</span><span class="lang-zh">基于 440 万条 POI 追踪记录的结构方程模型显示，出行推高了新冠感染率，但并未推高死亡率。该中介效应在不同种族与族裔构成的美国各县之间差异显著。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.pnas.org/doi/abs/10.1073/pnas.2010836117" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF43.png" alt="PNAS mobility-infection study"></div>
      <div class="card-body">
        <span class="card-venue">PNAS · 2020</span>
        <p class="card-text"><span class="lang-en">We measure nationwide mobility inflow at the start of the pandemic and model its changing link with infection rates. The relationship is positive and grows much stronger in regions that have partially reopened.</span><span class="lang-zh">我们测量疫情初期全国范围的出行流入量，并建模其与感染率之间随时间变化的关系。两者呈正相关，且在已部分复工复市的地区显著增强。</span></p>
      </div>
    </div>

  </div>
</section>

<!-- ========================================== BEYOND ========================================== -->
<section class="r-section" id="beyond" style="--accent: var(--c-mis);">
  <div class="r-eyebrow">05 / <span class="lang-en">Beyond</span><span class="lang-zh">其他方向</span></div>
  <p class="r-lead">
    <span class="lang-en">Beyond the core themes, I work across travel demand incentives, public sentiment analytics, shared mobility, and multimodal integration.</span><span class="lang-zh">在上述核心主题之外，我的研究还涉及出行需求激励、公众情感分析、共享出行与多方式联运整合。</span>
  </p>

  <div class="r-subhead"><span class="lang-en">Transportation Economics</span><span class="lang-zh">交通经济</span></div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X25001895" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/partc_2026.jpg" alt="Food delivery choice analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2025</span>
        <p class="card-text"><span class="lang-en">We analyze 2.7 million food delivery orders in Dubai to explain why customers pick distant restaurants over nearby ones. Explainable ML shows that delivery fees, cuisine, ratings, and neighborhood socioeconomics shape whether orders stay local.</span><span class="lang-zh">我们分析迪拜 270 万份外卖订单，解释顾客为何舍近求远。可解释机器学习显示，配送费、菜系、评分与社区社会经济状况共同决定订单是否就近下单。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0965856424001939" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/incentrip.png" alt="incenTrip platform"></div>
      <div class="card-body">
        <span class="card-venue">TR Part A · 2024</span>
        <p class="card-text"><span class="lang-en">As technical lead of <a href="https://www.mdot.maryland.gov/tso/pages/Index.aspx?PageId=33">incenTrip</a>, the first nationwide incentive-based travel app, we design personalized rewards that nudge users toward mode switching, carpooling, off-peak travel, and congestion avoidance.</span><span class="lang-zh">作为全美首个基于激励的出行应用 <a href="https://www.mdot.maryland.gov/tso/pages/Index.aspx?PageId=33">incenTrip</a> 的技术负责人，我们设计个性化奖励，引导用户转换出行方式、拼车、错峰出行并规避拥堵。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0968090X21002382" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/churn.jpg" alt="Customer churn analysis"></div>
      <div class="card-body">
        <span class="card-venue">TR Part C · 2021</span>
        <p class="card-text"><span class="lang-en">We analyze four million coupons with a Cox survival model. Their effect on user retention peaks early and fades after about 130 days. Front-loading rewards for new users maximizes short-term revenue but raises fairness and privacy concerns.</span><span class="lang-zh">我们用 Cox 生存模型分析 400 万张优惠券。其对用户留存的作用在早期达到峰值，约 130 天后衰减。把奖励前置给新用户虽能实现短期收益最大化，却带来公平与隐私方面的隐忧。</span></p>
      </div>
    </div>

  </div>

  <div class="r-subhead"><span class="lang-en">Public Perception from Social Media</span><span class="lang-zh">基于社交媒体的公众感知</span></div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0264275126000983" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/parking.png" alt="Parking sentiment analysis"></div>
      <div class="card-body">
        <span class="card-venue">Cities · 2026</span>
        <p class="card-text"><span class="lang-en">Five million parking-related Google Maps reviews across 1.1 million US POIs are classified with BERT. Restaurants get the most negative reviews, and denser, lower-income urban areas consistently have worse parking perceptions.</span><span class="lang-zh">用 BERT 对覆盖 110 万个美国 POI 的 500 万条停车相关谷歌地图评论进行分类。餐厅收到的负面评价最多；越密集、收入越低的城区，停车体验的评价持续越差。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0198971525000821" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/access_framework.png" alt="Accessibility sentiment"></div>
      <div class="card-body">
        <span class="card-venue">CEUS · 2025</span>
        <p class="card-text"><span class="lang-en">We fine-tune Llama 3 with LoRA to measure public sentiment about accessibility from nationwide Google Maps reviews. Older, more educated areas express more negativity, while local disability rates alone show no clear link to sentiment.</span><span class="lang-zh">我们用 LoRA 微调 Llama 3，从全国范围的谷歌地图评论中测量公众对无障碍设施的情感。年龄偏大、教育程度更高的地区表达出更多负面情绪，而当地残障率本身与情感倾向并无明确关联。</span></p>
      </div>
    </div>

  </div>

  <div class="r-subhead"><span class="lang-en">MaaS & Shared Mobility</span><span class="lang-zh">出行即服务与共享出行</span></div>
  <div class="card-grid">

    <div class="card"><a class="card-link" href="https://journals.sagepub.com/doi/abs/10.1177/0739456X241256041" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/Escooter.png" alt="E-scooter vs bikesharing"></div>
      <div class="card-body">
        <span class="card-venue">JPER · 2024</span>
        <p class="card-text"><span class="lang-en">We compare e-scooter sharing with docked bikesharing using generalized additive mixed models. Both thrive in dense, young, higher-income areas, but a one-sided competition has emerged: e-scooters are overtaking bikes.</span><span class="lang-zh">我们用广义可加混合模型比较共享电动滑板车与有桩共享单车。两者都在高密度、年轻、较高收入的地区表现活跃，但已出现单向竞争：电动滑板车正在取代单车。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S0966692321003240" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/FF52.jpg" alt="Bike-and-ride integration"></div>
      <div class="card-body">
        <span class="card-venue">JTG · 2022</span>
        <p class="card-text"><span class="lang-en">Shanghai dockless bikes are evaluated for bike-and-ride (BnR) integration with metro stations on four metrics. Land-use mix only matters past a 1.5 km buffer, and larger operators get more BnR trips but no higher per-bike utilization.</span><span class="lang-zh">从四项指标评估上海无桩共享单车与地铁站的"单车 + 轨道"（BnR）接驳。土地利用混合度只有在 1.5 公里缓冲区之外才产生影响；规模更大的运营商获得更多 BnR 出行，但单车周转率并未提高。</span></p>
      </div>
    </div>

    <div class="card"><a class="card-link" href="https://www.sciencedirect.com/science/article/pii/S1361920918306448" aria-label="Read more"></a>
      <div class="card-img"><img loading="lazy" decoding="async" src="/images/evcard.png" alt="Carsharing optimization"></div>
      <div class="card-body">
        <span class="card-venue">TR Part D · 2019</span>
        <p class="card-text"><span class="lang-en">Station-level booking and turnover analysis for carsharing optimization shows that operators should target underserved areas. Carsharing is most competitive 1.2 to 2.4 km from bus stops, and geographically differentiated quotas help cities manage fleets.</span><span class="lang-zh">面向汽车共享优化的站点级预订与周转分析表明，运营商应重点投放于服务不足的区域。汽车共享在距公交站 1.2 至 2.4 公里处最具竞争力，分区差异化配额有助于城市管理车队。</span></p>
      </div>
    </div>

  </div>
</section>

</div>
