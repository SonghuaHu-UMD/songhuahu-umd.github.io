---
layout: archive
title: "Co-authorship Network"
permalink: /network/
author_profile: true
---

<style>
.network-wrap {
  margin: 1em 0 2em;
  border: 1px solid #ececec;
  border-radius: 10px;
  overflow: hidden;
  background: #fafbfc;
}
.network-wrap img { display: block; width: 100%; height: auto; }
.network-meta {
  color: #666;
  font-size: 0.95em;
  line-height: 1.65;
  margin-bottom: 1.5em;
}
.network-meta strong { color: #2c3e50; }
.network-meta a { color: #2980b9; }
</style>

<p class="network-meta">
A force-directed graph of every co-author across <strong>77+</strong> papers, derived from the <a href="https://openalex.org/">OpenAlex</a> open scholarly graph.
Node size scales with the number of joint papers; edge thickness scales with how often two co-authors appear together.
The red node in the center is me; <span style="color: #2980b9; font-weight: 600;">blue</span> nodes are frequent collaborators (5+ joint papers); other ties are shown in gray.
</p>

<div class="network-wrap">
  <img src="/images/coauthor_network.svg" alt="Co-authorship network derived from OpenAlex" loading="lazy" decoding="async" />
</div>

<p class="network-meta">
<em>Last regenerated: {{ "now" | date: "%B %Y" }}. Snapshot only — re-run <code>node scripts/build-coauthor-network.js</code> to refresh after new publications.</em>
</p>
