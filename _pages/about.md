---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from:

  - /about/
  - /about.html

---

Greetings! I'm <span style="color: #2c3e50; font-weight: bold;">Songhua Hu</span> (胡松华), an <span style="color: #e67e22;">Assistant Professor of Transportation Engineering</span> at the
Department of Architecture and Civil Engineering, [City University of Hong Kong](https://www.cityu.edu.hk/).
Previously, I was a Postdoctoral Research Fellow at [MIT Senseable City Lab](https://senseable.mit.edu/).
I received my <span style="color: #2980b9;">Ph.D.</span> (2023) from the University of Maryland, College Park, <span style="color: #2980b9;">M.S.</span> (2019) from Tongji University (同济大学), and <span style="color: #2980b9;">B.S.</span> (2016) from Huazhong University of Science and Technology (华中科技大学), all in <span style="color: #2980b9;">Transportation Engineering</span>.
My research leverages <span style="color: #e67e22;">crowdsourced data mining</span>, <span style="color: #e67e22;">spatiotemporal AI</span>, <span style="color: #e67e22;">network analysis</span>, and <span style="color: #e67e22;">advanced statistics</span>
to advance <span style="color: #27ae60;">smart, sustainable, resilient, and equitable mobility systems</span>.
I have published **over 40** journal papers (**21** first-authored) in _Nature Sustainability_, _PNAS_, _Transportation Research Part A/C/D/E_, etc.,
and have contributed to research projects funded by <span style="color: #8e44ad;">USDOT, NIH, NSF, FHWA, and USDOE</span>.
I serve as a reviewer for **over 60** journals including _Nature Cities_, _Nature Communications_, _Transportation Research Part A/B/C/D/E_, among others.

<img src="/images/research_interests.svg" alt="Research interests" loading="lazy" decoding="async" style="width: 100%; max-width: 1100px; display: block; margin: 1em auto;" />

---

News
======

* **[04/2026]** New paper in [**_Nature Sustainability_**](https://www.nature.com/articles/s41893-026-01797-9): Ubiquitous data-driven framework for traffic emission estimation and policy evaluation!
* **[04/2026]** Our research featured on [**MIT NEWS**](https://news.mit.edu/2026/mit-researchers-measure-traffic-emissions-block-real-time-0402) and [**Anthropocene**](https://www.anthropocenemagazine.org/2026/04/tracking-traffic-pollution-in-real-time-could-transform-city-climate-policy/)!
* **[09/2025]** Joined [**_CityUHK_**](https://scholars.cityu.edu.hk/en/persons/songhua-hu) as a tenure-track Assistant Professor!
* **[05/2025]** Invited job talk at **_UCL CEGE_** on Agentic AI in Human Mobility Simulation!
* **[02/2025]** Invited [job talk](https://acee.princeton.edu/events/towards-sustainable-urban-systems-with-human-centered-big-data-mining/) at **_Princeton University ACEE_**!
* **[01/2025]** Invited job talk at **_University of Alberta CEE_**!
* **[10/2023]** Received [**COTA Best Dissertation Award**](https://cee.umd.edu/news/story/hu-receives-cota-best-dissertation-award)!
* **[05/2023]** Received [**UMD CEE Best Doctoral Research Award**](https://cee.umd.edu/news/story/hu-waters-win-thesis-awards)!


***

Publications
======

Over 40 journal papers (<span style="color: green">**21** First-Author</span>, <span style="color: orange">**4** Corresponding</span>) including
_Nature Sustainability_ (**1**, <span style="color: green">**1**F</span> <span style="color: orange">**1**C</span>),
_Proceedings of the National Academy of Sciences_ (**1**),
_Transportation Research Part A_ (**5**, <span style="color: green">**3**F</span>),
_Transportation Research Part C_ (**5**, <span style="color: green">**3**F</span>),
_Transportation Research Part D_ (**3**, <span style="color: green">**3**F</span>),
_Transportation Research Part E_ (**1**),
_Computers, Environment and Urban Systems_ (**3**, <span style="color: green">**1**F</span>),
_Journal of Transport Geography_ (**3**, <span style="color: green">**2**F</span>),
_Cities_ (**1**, <span style="color: green">**1**F</span>),
_Sustainable Cities and Society_ (**1**, <span style="color: green">**1**F</span>),
_Journal of the Royal Society Interface_ (**1**),
_Journal of Planning Education and Research_ (**1**),
among others. **>30** presentations at TRB, IEEE ITSC, NetMob, INFORMS, AGU, etc.

<div style="display: flex; gap: 1em; flex-wrap: wrap; align-items: stretch; margin: 1.2em 0;">
  <div style="flex: 1 1 320px;">
    <img src="/images/citations.svg" alt="Google Scholar cumulative citations" loading="lazy" decoding="async" style="width: 100%; height: auto; display: block;" />
    <div style="font-size: 0.85em; color: #666; text-align: center; margin-top: 0.4em;">Cumulative citations (Google Scholar)</div>
  </div>
  <div style="flex: 1 1 320px;">
    <div id="coauthor-network" style="width: 100%; height: 380px; border: 1px solid #eee; border-radius: 8px; background: #fafbfc; position: relative; overflow: hidden;">
      <div style="padding: 1em; color: #999; font-size: 0.9em;">Loading network…</div>
    </div>
    <div style="font-size: 0.85em; color: #666; text-align: center; margin-top: 0.4em;">Co-authorship network (OpenAlex)</div>
  </div>
</div>

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
<script>
(function () {
  var container = document.getElementById('coauthor-network');
  if (!container || !window.d3) return;

  fetch('/assets/coauthor_network.json').then(function (r) { return r.json(); }).then(function (data) {
    container.innerHTML = '';
    var w = container.clientWidth;
    var h = container.clientHeight;
    var maxW = Math.max.apply(null, data.links.map(function (l) { return l.weight; }));
    var radius = function (d) { return 3 + Math.sqrt(d.count) * 3.2; };
    var color = function (d) {
      if (d.isSelf) return '#c0392b';
      if (d.count >= 5) return '#2980b9';
      return '#7a8e9e';
    };

    var tooltip = d3.select('body').append('div').attr('class', 'cn-tooltip');

    var svg = d3.select(container).append('svg')
      .attr('viewBox', '0 0 ' + w + ' ' + h)
      .attr('width', '100%').attr('height', '100%');

    var g = svg.append('g');

    var sim = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(function (d) { return d.id; })
        .distance(function (l) { return 50 / Math.sqrt(l.weight); }).strength(0.4))
      .force('charge', d3.forceManyBody().strength(-90))
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('collide', d3.forceCollide().radius(function (d) { return radius(d) + 3; }));

    var link = g.append('g').attr('stroke', '#cbd5dc').attr('fill', 'none')
      .selectAll('line').data(data.links).join('line')
      .attr('stroke-width', function (d) { return 0.4 + (d.weight / maxW) * 1.6; })
      .attr('stroke-opacity', function (d) { return 0.25 + (d.weight / maxW) * 0.5; });

    var node = g.append('g').selectAll('circle').data(data.nodes).join('circle')
      .attr('r', radius).attr('fill', color).attr('stroke', 'white').attr('stroke-width', 1.2)
      .style('cursor', 'pointer')
      .on('mouseover', function (e, d) {
        tooltip.style('opacity', 1).html('<strong>' + d.name + '</strong> &middot; ' + d.count + ' paper' + (d.count > 1 ? 's' : ''));
      })
      .on('mousemove', function (e) {
        tooltip.style('left', (e.pageX + 12) + 'px').style('top', (e.pageY + 12) + 'px');
      })
      .on('mouseout', function () { tooltip.style('opacity', 0); })
      .call(d3.drag()
        .on('start', function (e) { if (!e.active) sim.alphaTarget(0.3).restart(); e.subject.fx = e.subject.x; e.subject.fy = e.subject.y; })
        .on('drag', function (e) { e.subject.fx = e.x; e.subject.fy = e.y; })
        .on('end', function (e) { if (!e.active) sim.alphaTarget(0); e.subject.fx = null; e.subject.fy = null; }));

    var labelData = data.nodes.filter(function (d) { return d.isSelf || d.count > 3; });
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
  }).catch(function (err) {
    container.innerHTML = '<div style="padding: 1em; color: #c0392b;">Network failed to load: ' + err.message + '</div>';
  });
})();
</script>

<span style="color: purple">**Full publication list: [Google Scholar](https://scholar.google.com/citations?user=uVIbQyAAAAAJ&hl=en)**</span>

