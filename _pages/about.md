---
layout: archive
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from:

  - /about/
  - /about.html

---

{% comment %}
  Publication counts, recounted monthly from the Google Scholar profile by
  .github/workflows/refresh-scholar-metrics.yml. Assigned once up here because two places
  render from it: the intro sentence just below, and the Publications section further down.
  Keeping one assign is the point -- those two used to be typed separately and had drifted
  apart before this existed.
{% endcomment %}
{% assign pubs = site.data.scholar_publications %}

{% comment %}
  Bilingual page. Each pair below is one block of prose in English followed by
  the same block in Chinese; _sass/_i18n.scss hides whichever the reader is not
  using. markdown="1" is what keeps kramdown parsing the contents of these divs
  -- without it the markdown inside is emitted verbatim.

  Only the prose is duplicated. Anything language-neutral -- the figures, the
  dates leading each news item, every number rendered from `pubs` -- stays
  written once and shared, which is what stops the two halves drifting apart.
{% endcomment %}

<div class="lang-en" markdown="1">
Greetings! I'm <span style="color: #2c3e50; font-weight: bold;">Songhua Hu</span> (胡松华), an [<span style="color: #e67e22;">Assistant Professor of Transportation Engineering</span>](https://scholars.cityu.edu.hk/en/persons/songhuhu/) at the
Department of Architecture and Civil Engineering, City University of Hong Kong.
Previously, I was a Postdoctoral Researcher at [MIT Senseable City Lab](https://senseable.mit.edu/).
I received my <span style="color: #2980b9;">Ph.D.</span> (2023) from the University of Maryland, College Park,
<span style="color: #2980b9;">M.S.</span> (2019) from Tongji University (同济大学),
and <span style="color: #2980b9;">B.S.</span> (2016) from Huazhong University of Science and Technology (华中科技大学启明学院).

My research leverages <span style="color: #e67e22;">spatiotemporal data mining</span>, <span style="color: #e67e22;">network science</span>, <span style="color: #e67e22;">artificial intelligence</span>, <span style="color: #e67e22;">transportation modeling</span>, and <span style="color: #e67e22;">advanced statistics</span>
to advance <span style="color: #27ae60;">smart, sustainable, resilient, and equitable mobility systems</span>.
I have published **over {{ pubs.journal_papers_rounded | default: 40 }}** journal papers (**{{ pubs.first_author | default: 21 }}** first-authored) in _Nature Sustainability_, _PNAS_, _Transportation Research Part A/C/D/E_, etc.
I have secured funding from <span style="color: #8e44ad;">**HK RGC ECS (PI)**</span>, <span style="color: #8e44ad;">**TRS (Co-PI)**</span>, and <span style="color: #8e44ad;">**NSFC (PI)**</span>, and contributed to projects funded by <span style="color: #8e44ad;">USDOT, NIH, NSF, FHWA, USDOE, the City of Stockholm, and Toyota Woven City</span>.
I serve as a reviewer for **over 60** journals including _Nature Cities_, _Nature Communications_, _Transportation Research Part A-E_, among others.
</div>

<div class="lang-zh" markdown="1">
您好！我是<span style="color: #2c3e50; font-weight: bold;">胡松华</span>（Songhua Hu），香港城市大学建筑学及土木工程学系[<span style="color: #e67e22;">交通工程助理教授</span>](https://scholars.cityu.edu.hk/en/persons/songhuhu/)。
此前在 [MIT Senseable City Lab](https://senseable.mit.edu/) 从事博士后研究。
<span style="color: #2980b9;">博士</span>（2023）毕业于美国马里兰大学帕克分校，
<span style="color: #2980b9;">硕士</span>（2019）毕业于同济大学，
<span style="color: #2980b9;">学士</span>（2016）毕业于华中科技大学启明学院。

我的研究综合运用<span style="color: #e67e22;">时空数据挖掘</span>、<span style="color: #e67e22;">网络科学</span>、<span style="color: #e67e22;">人工智能</span>、<span style="color: #e67e22;">交通建模</span>与<span style="color: #e67e22;">高级统计方法</span>，
致力于推动<span style="color: #27ae60;">智能、可持续、有韧性且公平的交通出行系统</span>。
已在 _Nature Sustainability_、_PNAS_、_Transportation Research Part A/C/D/E_ 等期刊发表期刊论文 **{{ pubs.journal_papers_rounded | default: 40 }} 余篇**（其中第一作者 **{{ pubs.first_author | default: 21 }}** 篇）。
主持<span style="color: #8e44ad;">**香港研资局杰出青年学者计划（ECS）**</span>与<span style="color: #8e44ad;">**国家自然科学基金（NSFC）**</span>，共同主持<span style="color: #8e44ad;">**香港研资局主题研究计划（TRS）**</span>，并参与<span style="color: #8e44ad;">美国交通部、NIH、NSF、FHWA、美国能源部、斯德哥尔摩市政府及丰田 Woven City</span> 资助的多项课题。
现担任 _Nature Cities_、_Nature Communications_、_Transportation Research Part A-E_ 等 **60 余**本期刊审稿人。
</div>

<img src="/images/research_interests.svg" alt="Research interests" loading="lazy" decoding="async" style="width: 100%; max-width: 1100px; display: block; margin: 1em auto;" />


---

<span class="lang-en">News</span><span class="lang-zh">最新动态</span>
======

{% comment %}
  The bracketed date opens each line in both languages, so it is written once
  and only the sentence after it is paired. Keeping the list itself shared also
  keeps the two languages in the same order, with no way to add an item to one
  and forget the other.
{% endcomment %}
* **[08/2026]** <span class="lang-en">My project on _<span style="color: #2980b9;">Data-Driven Human Exposure Modeling</span>_ is funded by **NSFC Young Scientists Fund C** <span style="color: #8e44ad;">**(PI)**</span>!</span><span class="lang-zh">课题《<span style="color: #2980b9;">数据驱动的人群暴露建模</span>》获**国家自然科学基金青年科学基金项目（C 类）**资助<span style="color: #8e44ad;">**（主持）**</span>！</span>
* **[08/2026]** <span class="lang-en">Our project on _<span style="color: #2980b9;">AI-Driven Urban Emergency Response and Rescue</span>_ is funded by the **HK RGC Theme-based Research Scheme** <span style="color: #8e44ad;">**(Co-PI)**</span>!</span><span class="lang-zh">课题《<span style="color: #2980b9;">AI 驱动的城市应急响应与救援</span>》获**香港研资局主题研究计划（TRS）**资助<span style="color: #8e44ad;">**（共同主持）**</span>！</span>
* **[06/2026]** <span class="lang-en">Welcoming **four new Ph.D. students** joining our group in Summer/Fall 2026!</span><span class="lang-zh">欢迎**四位新博士生**于 2026 年夏/秋季加入课题组！</span>
* **[06/2026]** <span class="lang-en">My project on _<span style="color: #2980b9;">AI-Driven Mobility Chain Inference</span>_ is funded by the **HK RGC Early Career Scheme** <span style="color: #8e44ad;">**(PI)**</span>!</span><span class="lang-zh">课题《<span style="color: #2980b9;">AI 驱动的出行链推断</span>》获**香港研资局杰出青年学者计划（ECS）**资助<span style="color: #8e44ad;">**（主持）**</span>！</span>
* **[04/2026]** <span class="lang-en">Our research featured on [**MIT NEWS**](https://news.mit.edu/2026/mit-researchers-measure-traffic-emissions-block-real-time-0402) and [**NS Research Briefing**](https://www.nature.com/articles/s41893-026-01798-8)!</span><span class="lang-zh">研究成果获 [**MIT NEWS**](https://news.mit.edu/2026/mit-researchers-measure-traffic-emissions-block-real-time-0402) 与 [**Nature Sustainability 研究简报**](https://www.nature.com/articles/s41893-026-01798-8) 报道！</span>
* **[04/2026]** <span class="lang-en">New paper in [**_Nature Sustainability_**](https://www.nature.com/articles/s41893-026-01797-9)! See the visualization [**HERE**](https://senseable.mit.edu/fleeting-emissions/).</span><span class="lang-zh">新论文发表于 [**_Nature Sustainability_**](https://www.nature.com/articles/s41893-026-01797-9)！可视化展示见[**此处**](https://senseable.mit.edu/fleeting-emissions/)。</span>
* **[09/2025]** <span class="lang-en">My project on _<span style="color: #2980b9;">Agentic AI Activity-Based Modeling</span>_ is funded by the **CityUHK Startup Grant** <span style="color: #8e44ad;">**(PI)**</span>!</span><span class="lang-zh">课题《<span style="color: #2980b9;">智能体 AI 驱动的活动链建模</span>》获**香港城市大学启动基金**资助<span style="color: #8e44ad;">**（主持）**</span>！</span>
* **[09/2025]** <span class="lang-en">Joined [**_CityUHK_**](https://scholars.cityu.edu.hk/en/persons/songhuhu/) as a tenure-track Assistant Professor!</span><span class="lang-zh">加入[**香港城市大学**](https://scholars.cityu.edu.hk/en/persons/songhuhu/)，任终身教轨助理教授！</span>
* **[05/2025]** <span class="lang-en">Invited job talk at **_UCL CEGE_** on Agentic AI in Human Mobility Simulation!</span><span class="lang-zh">受邀在**伦敦大学学院（UCL）土木、环境与地理工程系**作求职报告，主题为智能体 AI 与人类出行仿真！</span>
* **[02/2025]** <span class="lang-en">Invited [job talk](https://acee.princeton.edu/events/towards-sustainable-urban-systems-with-human-centered-big-data-mining/) at **_Princeton University ACEE_**!</span><span class="lang-zh">受邀在**普林斯顿大学安德林格能源与环境中心（ACEE）**作[求职报告](https://acee.princeton.edu/events/towards-sustainable-urban-systems-with-human-centered-big-data-mining/)！</span>
* **[01/2025]** <span class="lang-en">Invited job talk at **_University of Alberta CEE_**!</span><span class="lang-zh">受邀在**阿尔伯塔大学土木与环境工程系**作求职报告！</span>
* **[10/2023]** <span class="lang-en">Received [**COTA Best Dissertation Award**](https://cee.umd.edu/news/story/hu-receives-cota-best-dissertation-award)!</span><span class="lang-zh">获 [**COTA 最佳博士论文奖**](https://cee.umd.edu/news/story/hu-receives-cota-best-dissertation-award)！</span>
* **[05/2023]** <span class="lang-en">Received [**UMD CEE Best Doctoral Research Award**](https://cee.umd.edu/news/story/hu-waters-win-thesis-awards)!</span><span class="lang-zh">获[**马里兰大学土木与环境工程系最佳博士研究奖**](https://cee.umd.edu/news/story/hu-waters-win-thesis-awards)！</span>


***

<span class="lang-en">Publications</span><span class="lang-zh">论文发表</span>
======

<!-- Every count here comes from `pubs`, assigned at the top of this file: recounted each
     month from the Google Scholar profile and landing in _data/scholar_publications.json.
     Nothing in this paragraph is typed by hand any more. The F and C figures come from the
     † and * markers on the profile's own author lines, so correcting one means editing the
     profile, not this file. What the profile cannot say -- which records count as journal
     papers, what each venue is called in one line of prose, and the presentation count --
     lives in scripts/publication-rules.js. Rendered by Liquid rather than fetched in the
     browser, for the same reasons as the metrics line below. The guard keeps the page
     building if the data file is ever missing; the intro sentence up top uses `default:`
     filters for the same reason, since it cannot be skipped without breaking a sentence. -->
{% if pubs and pubs.journal_papers %}
<div class="lang-en" markdown="1">
Over {{ pubs.journal_papers_rounded }} journal papers (<span style="color: green">**{{ pubs.first_author }}** First-Author</span>{% if pubs.corresponding > 0 %}, <span style="color: orange">**{{ pubs.corresponding }}** Corresponding</span>{% endif %}) including
{% for v in pubs.featured %}_{{ v.display }}_ (**{{ v.count }}**{% if v.first > 0 %}, <span style="color: green">**{{ v.first }}**F</span>{% endif %}{% if v.corresponding > 0 %} <span style="color: orange">**{{ v.corresponding }}**C</span>{% endif %}),
{% endfor %}among others. **>{{ pubs.presentations }}** presentations at TRB, IEEE ITSC, NetMob, INFORMS, AGU, etc.
</div>
<div class="lang-zh" markdown="1">
期刊论文 {{ pubs.journal_papers_rounded }} 余篇（<span style="color: green">第一作者 **{{ pubs.first_author }}** 篇</span>{% if pubs.corresponding > 0 %}，<span style="color: orange">通讯作者 **{{ pubs.corresponding }}** 篇</span>{% endif %}），其中
{% for v in pubs.featured %}_{{ v.display }}_（**{{ v.count }}**{% if v.first > 0 %}，<span style="color: green">**{{ v.first }}** 篇一作</span>{% endif %}{% if v.corresponding > 0 %} <span style="color: orange">**{{ v.corresponding }}** 篇通讯</span>{% endif %}），
{% endfor %}等。在 TRB、IEEE ITSC、NetMob、INFORMS、AGU 等会议作报告 **{{ pubs.presentations }} 次以上**。
</div>
{% endif %}

<div style="margin: 1.2em 0;">
  <div id="coauthor-network" style="width: 100%; max-width: 1100px; height: 360px; margin: 0 auto; position: relative; overflow: hidden;">
    <div style="padding: 1em; color: #999; font-size: 0.9em;"><span class="lang-en">Loading network…</span><span class="lang-zh">正在加载合作者网络…</span></div>
  </div>
  <div style="font-size: 0.85em; color: #666; text-align: center; margin-top: 0.4em;"><span class="lang-en">Co-authorship network (OpenAlex)</span><span class="lang-zh">合作者网络（数据来源：OpenAlex）</span></div>
</div>

<!-- Citation metrics. The figures live in _data/scholar_metrics.json, refreshed monthly by
     .github/workflows/refresh-scholar-metrics.yml, and are rendered here by Liquid rather
     than fetched in the browser: no empty strip while JS runs, and the numbers survive JS
     being off. The guard keeps the page building if that data file is ever missing. -->
{% assign gs = site.data.scholar_metrics %}
{% if gs and gs.citations %}
<style>
/* One caption-weight line rather than a bordered panel: it sits under the network caption,
   so matching that weight keeps the section from carrying two competing headline blocks.
   Only the figures themselves are emphasised. */
.gs-stats { max-width: 1100px; margin: 0 auto 1em; text-align: center; font-size: 0.8em; color: #666; }
.gs-stats strong { color: #2c3e50; font-weight: 700; }
.gs-stats a { color: #2980b9; }
</style>

<div class="gs-stats"><span class="lang-en"><strong>{{ gs.citations_display | default: gs.citations }}</strong> citations · <strong>{{ gs.h_index }}</strong> h-index · <strong>{{ gs.i10_index }}</strong> i10-index · <a href="{{ gs.profile_url }}">Google Scholar</a>, updated {{ gs.generated }}</span><span class="lang-zh">被引 <strong>{{ gs.citations_display | default: gs.citations }}</strong> 次 · h 指数 <strong>{{ gs.h_index }}</strong> · i10 指数 <strong>{{ gs.i10_index }}</strong> · <a href="{{ gs.profile_url }}">谷歌学术</a>，更新于 {{ gs.generated }}</span></div>
{% endif %}

{% comment %}
  Research Topics panel, hidden for now.

  To bring it back, delete this comment tag and its matching end tag, and do the same for the
  second pair further down that wraps the topic-evolution script. Both halves are needed --
  the markup alone renders a permanent "Loading per-year terms…".

  A Liquid comment rather than an HTML one on purpose: this is removed at build time, so the
  hidden markup and its ~8KB of drawing code are not shipped to every visitor as dead bytes.

  Nothing needs rebuilding first. build-coauthor-network.js still refreshes
  assets/topic_evolution.json every week, so the data stays current while the panel is hidden.

***

Research Topics
======

<div id="topic-evolution" style="width: 100%; max-width: 1100px; height: 320px; margin: 1em auto 0.4em; position: relative; overflow-x: auto; overflow-y: hidden;">
  <div style="padding: 1em; color: #999; font-size: 0.9em;">Loading per-year terms…</div>
</div>
<div style="font-size: 0.85em; color: #666; text-align: center; max-width: 1100px; margin: 0 auto 1em;">Each panel below highlights a set of <span style="color: #e67e22; font-weight: 600;">dominant themes</span> varying by year. Themes are <span style="color: #8e44ad; font-weight: 600;">AI-synthesized</span> by reading my papers from (<a href="https://openalex.org/" style="color: #2980b9;">OpenAlex</a>).
</div>
{% endcomment %}

<style>
.cn-tooltip {
  position: absolute;
  pointer-events: none;
  background: rgba(44, 62, 80, 0.95);
  color: white;
  padding: 0.4em 0.7em;
  border-radius: 4px;
  font-size: 0.78em;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.12s;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
#coauthor-network svg { display: block; cursor: grab; }
#coauthor-network svg:active { cursor: grabbing; }
#coauthor-network text { user-select: none; }
</style>

<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>

{% comment %} Second half of the hidden Research Topics panel -- see the note above. {% endcomment %}
{% comment %}
<script>
(function () {
  var container = document.getElementById('topic-evolution');
  if (!container || !window.d3) return;

  fetch('/assets/topic_evolution.json').then(function (r) { return r.json(); }).then(function (data) {
    container.innerHTML = '';
    /* Force a minimum drawing width so columns stay readable on narrow screens;
       the container has overflow-x:auto, so mobile viewers swipe horizontally. */
    var MIN_W = 900;
    var W = Math.max(container.clientWidth, MIN_W);
    var H = container.clientHeight;
    var margin = { top: 8, right: 6, bottom: 4, left: 6 };
    var iw = W - margin.left - margin.right;
    var ih = H - margin.top - margin.bottom;

    var svg = d3.select(container).append('svg')
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('width', W).attr('height', H)
      .style('display', 'block')
      .style('font-family', "'Segoe UI', 'Helvetica Neue', Arial, sans-serif");

    var years = data.years;
    var N = years.length;
    var colW = iw / N;
    var headerH = 54;
    var pillsTop = margin.top + headerH;
    var pillsArea = ih - headerH - 4;

    var yrExtent = d3.extent(years, function (y) { return y.year; });
    var color = d3.scaleSequential(d3.interpolateRdYlBu).domain([yrExtent[1], yrExtent[0]]);

    years.forEach(function (yr, i) {
      var x0 = margin.left + i * colW;
      var cx = x0 + colW / 2;
      var heat = color(yr.year);

      /* Year header */
      svg.append('text').attr('x', cx).attr('y', margin.top + 16).attr('text-anchor', 'middle')
        .attr('font-size', 13).attr('font-weight', 700).attr('fill', heat).text(yr.label || yr.year);
      if (yr.institution) {
        svg.append('text').attr('x', cx).attr('y', margin.top + 32).attr('text-anchor', 'middle')
          .attr('font-size', 11).attr('font-weight', 600).attr('fill', '#444').text(yr.institution);
      }
      svg.append('text').attr('x', cx).attr('y', margin.top + 46).attr('text-anchor', 'middle')
        .attr('font-size', 10).attr('fill', '#999').text(yr.papers + (yr.papers === 1 ? ' paper' : ' papers'));

      /* Phrase pills, stacked vertically */
      var n = yr.phrases.length;
      if (!n) return;
      var maxCount = yr.phrases[0].count;
      var pillH = Math.min(46, (pillsArea - (n - 1) * 4) / n);
      var pillW = colW - 8;

      yr.phrases.forEach(function (p, idx) {
        var y = pillsTop + idx * (pillH + 4);
        var op = 0.18 + 0.32 * (p.count / maxCount);
        svg.append('rect').attr('x', x0 + 4).attr('y', y)
          .attr('width', pillW).attr('height', pillH).attr('rx', 5)
          .attr('fill', heat).attr('opacity', op);
        var fontPx = Math.min(14, Math.max(11, pillH * 0.32));
        /* foreignObject lets CSS handle real text wrapping (multi-line for long phrases). */
        var fo = svg.append('foreignObject')
          .attr('x', x0 + 4).attr('y', y)
          .attr('width', pillW).attr('height', pillH);
        fo.append('xhtml:div')
          .attr('xmlns', 'http://www.w3.org/1999/xhtml')
          .style('width', '100%').style('height', '100%')
          .style('display', 'flex').style('align-items', 'center').style('justify-content', 'center')
          .style('text-align', 'center')
          .style('padding', '2px 6px').style('box-sizing', 'border-box')
          .style('font-size', fontPx + 'px')
          .style('font-weight', 600)
          .style('line-height', '1.15')
          .style('color', '#2c3e50')
          .style('font-family', "'Segoe UI', 'Helvetica Neue', Arial, sans-serif")
          .style('overflow-wrap', 'break-word').style('word-break', 'normal')
          .text(p.phrase);
        if (p.count > 1) {
          svg.append('text').attr('x', x0 + 4 + pillW - 4).attr('y', y + 10)
            .attr('text-anchor', 'end').attr('font-size', 8.5)
            .attr('fill', '#7a8e9e').attr('font-weight', 600)
            .text('×' + p.count);
        }
      });

      /* Light vertical separator */
      if (i > 0) {
        svg.append('line').attr('x1', x0).attr('x2', x0)
          .attr('y1', margin.top + 4).attr('y2', H - margin.bottom)
          .attr('stroke', '#eee').attr('stroke-width', 1);
      }
    });
  }).catch(function (err) {
    container.innerHTML = '<div style="padding: 1em; color: #c0392b;">Per-year phrases failed to load: ' + err.message + '</div>';
  });
})();
</script>
{% endcomment %}

<script>
(function () {
  var container = document.getElementById('coauthor-network');
  if (!container || !window.d3) return;

  fetch('/assets/coauthor_network.json').then(function (r) { return r.json(); }).then(function (data) {
    container.innerHTML = '';
    var w = container.clientWidth || 900;
    var h = container.clientHeight || 360;
    var maxW = Math.max.apply(null, data.links.map(function (l) { return l.weight; }));
    var radius = function (d) {
      if (d.isSelf) return 12;
      return 3 + Math.sqrt(d.count) * 3.2;
    };
    var INST_COLORS = {
      'UMD':       '#4e79a7',
      'MIT':       '#f28e2c',
      'USF':       '#edc949',
      'Tongji':    '#af7aa1',
      'Villanova': '#76b7b2',
      'Other':     '#bbbbbb',
    };
    var color = function (d) {
      if (d.isSelf) return '#c0392b';
      return INST_COLORS[d.instGroup] || '#bbbbbb';
    };

    /* Written by script, so out of reach of the stylesheet: picked at call time
       instead. The tooltip is rebuilt on every hover, so it needs no redraw on a
       language switch -- the error message below is a one-off and does. */
    function t(en, zh) {
      return document.documentElement.getAttribute('data-lang') === 'zh' ? zh : en;
    }

    var tooltip = d3.select('body').append('div').attr('class', 'cn-tooltip');

    var svg = d3.select(container).append('svg')
      .attr('viewBox', '0 0 ' + w + ' ' + h)
      .attr('width', '100%').attr('height', '100%');

    var g = svg.append('g');

    var sim = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(function (d) { return d.id; })
        .distance(function (l) { return 60 / Math.sqrt(l.weight); }).strength(0.35))
      .force('charge', d3.forceManyBody().strength(-210))
      .force('x', d3.forceX(w / 2).strength(0.07))
      .force('y', d3.forceY(h / 2).strength(0.13))
      .force('collide', d3.forceCollide().radius(function (d) { return radius(d) + 4; }));

    var link = g.append('g').attr('stroke', '#cbd5dc').attr('fill', 'none')
      .selectAll('line').data(data.links).join('line')
      .attr('stroke-width', function (d) { return 0.4 + (d.weight / maxW) * 1.6; })
      .attr('stroke-opacity', function (d) { return 0.25 + (d.weight / maxW) * 0.5; });

    var node = g.append('g').selectAll('circle').data(data.nodes).join('circle')
      .attr('r', radius).attr('fill', color).attr('stroke', 'white').attr('stroke-width', 1.2)
      .style('cursor', 'pointer')
      .on('mouseover', function (e, d) {
        tooltip.style('opacity', 1).html('<strong>' + d.name + '</strong> &middot; ' + t(d.count + ' paper' + (d.count > 1 ? 's' : ''), d.count + ' 篇合作论文'));
      })
      .on('mousemove', function (e) {
        tooltip.style('left', (e.pageX + 12) + 'px').style('top', (e.pageY + 12) + 'px');
      })
      .on('mouseout', function () { tooltip.style('opacity', 0); })
      .call(d3.drag()
        .on('start', function (e) { if (!e.active) sim.alphaTarget(0.3).restart(); e.subject.fx = e.subject.x; e.subject.fy = e.subject.y; })
        .on('drag', function (e) { e.subject.fx = e.x; e.subject.fy = e.y; })
        .on('end', function (e) { if (!e.active) sim.alphaTarget(0); e.subject.fx = null; e.subject.fy = null; }));

    var HIDE_LABELS = new Set(['yingrui zhao', 'yuan jiang']);
    var labelData = data.nodes.filter(function (d) {
      if (HIDE_LABELS.has(d.name.toLowerCase())) return false;
      return d.isSelf || d.count >= 3;
    });
    var label = g.append('g').selectAll('text').data(labelData).join('text')
      .text(function (d) { return d.name; })
      .attr('text-anchor', 'middle')
      .attr('font-size', function (d) { return d.isSelf ? 12 : 9.5; })
      .attr('font-weight', function (d) { return d.isSelf ? 700 : 500; })
      .attr('fill', '#2c3e50')
      .style('pointer-events', 'none')
      .style('font-family', "'Segoe UI', 'Helvetica Neue', Arial, sans-serif");

    sim.on('tick', function () {
      link.attr('x1', function (d) { return d.source.x; }).attr('y1', function (d) { return d.source.y; })
          .attr('x2', function (d) { return d.target.x; }).attr('y2', function (d) { return d.target.y; });
      node.attr('cx', function (d) { return d.x; }).attr('cy', function (d) { return d.y; });
      label.attr('x', function (d) { return d.x; })
           .attr('y', function (d) { return d.y + radius(d) + (d.isSelf ? 14 : 11); });
    });

    svg.call(d3.zoom().scaleExtent([0.4, 4]).on('zoom', function (e) { g.attr('transform', e.transform); }));

    /* Legend for institution colors (top-right corner, fixed position inside SVG, ignored by zoom). */
    var legendItems = ['UMD', 'MIT', 'USF', 'Tongji', 'Villanova', 'Other'];
    var legend = svg.append('g').attr('transform', 'translate(' + (w - 78) + ',6)');
    legendItems.forEach(function (key, i) {
      var row = legend.append('g').attr('transform', 'translate(0,' + (i * 13) + ')');
      row.append('circle').attr('cx', 5).attr('cy', 5).attr('r', 4).attr('fill', INST_COLORS[key]);
      row.append('text').attr('x', 13).attr('y', 8).attr('font-size', 9.5).attr('fill', '#444').text(key);
    });
  }).catch(function (err) {
    container.innerHTML = '<div style="padding: 1em; color: #c0392b;">' +
      (document.documentElement.getAttribute('data-lang') === 'zh' ? '合作者网络加载失败：' : 'Network failed to load: ') +
      err.message + '</div>';
  });
})();
</script>


