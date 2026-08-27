/*
 * Curated rules for scripts/fetch-scholar-publications.js.
 *
 * Everything a Google Scholar profile cannot tell us lives here, and nothing else does.
 * Scholar knows the venue, the year and the author order of every record; it does not know
 * whether a record is a journal paper, what a venue should be called in one line of prose,
 * or which papers carry a corresponding-author or shared-first-author credit. Those are
 * judgements, so they are written down by hand and reviewed, rather than guessed weekly.
 *
 * A .js file rather than .json purely so these notes can sit next to the values they explain.
 * It is still just data -- no logic, no imports.
 */
module.exports = {
  /* How the profile spells his own name in an author line. Each entry is matched against a
     whole comma-separated token with its markers stripped, so it has to be the full form
     Scholar prints -- not a prefix of it. Every spelling Scholar has ever used belongs here;
     a missing one costs a first-author credit and both markers on that paper. */
  selfPrefixes: ['S Hu', 'Songhua Hu', 'SH Hu'],

  /* The markers typed onto the author line by hand, and what they mean. Listed rather than
     hardcoded so the convention can change without touching the parser -- and so a second
     symbol can be added if one paper ever uses ‡ for a third co-first author. */
  coFirstMarkers: ['†'],        /* † shared first authorship */
  correspondingMarkers: ['*'],       /* * corresponding author   */

  /* A profile is a filing cabinet, not a publication list: it also holds preprints, the
     PhD thesis, conference papers, tech reports and the one-page Nature Sustainability
     research briefing that accompanies the full article. Anything matching one of these --
     or carrying no venue at all -- is not counted as a journal paper.

     Deliberately absent: a bare /proceedings/, which would swallow PNAS. */
  nonJournalPatterns: [
    /arxiv/i,
    /\bssrn\b/i,
    /\bpreprint\b/i,
    /annual meeting/i,
    /\bconference\b/i,
    /\bworkshop\b/i,
    /\bsymposium\b/i,
    /\bAGU\s*\d/i,
    /research briefing/i,
    /\bthes[ie]s\b|\bdissertation\b/i,
    /\btechnical report\b/i,
    /university of maryland/i,
  ],

  /* The venues named individually in the Publications paragraph, in the order they appear
     there. Prestige order is a judgement Scholar cannot make, so it is fixed here rather
     than sorted by count.

     `match` is compared against the venue with its volume/issue/pages stripped, lowercased,
     using startsWith -- not includes. That distinction is load-bearing: 'cities' as a
     substring would also claim every Sustainable Cities and Society paper, while as a
     prefix it claims only Cities. It also means a prefix is enough for the long ones, which
     is what makes 'Transportation research part A: policy and practice' (Scholar stores that
     record in sentence case) land in the same bucket as the title-cased spelling. */
  featuredVenues: [
    { match: 'nature sustainability',                        display: 'Nature Sustainability' },
    { match: 'proceedings of the national academy of sciences', display: 'Proceedings of the National Academy of Sciences' },
    { match: 'transportation research part a',               display: 'TR Part A' },
    { match: 'transportation research part c',               display: 'TR Part C' },
    { match: 'transportation research part d',               display: 'TR Part D' },
    { match: 'transportation research part e',               display: 'TR Part E' },
    { match: 'computers, environment and urban systems',     display: 'Computers, Environment and Urban Systems' },
    { match: 'journal of transport geography',               display: 'Journal of Transport Geography' },
    { match: 'cities',                                       display: 'Cities' },
    { match: 'sustainable cities and society',               display: 'Sustainable Cities and Society' },
    { match: 'journal of the royal society interface',       display: 'Journal of the Royal Society Interface' },
    { match: 'journal of planning education and research',   display: 'Journal of Planning Education and Research' },
  ],

  /* Per-paper overrides on top of the markers, keyed by any distinctive fragment of the title
     (case-insensitive substring; the shortest unambiguous phrase is the best choice, since
     Scholar occasionally re-cases or re-punctuates a title). A fragment matching no paper is
     reported by the script rather than ignored, so a typo or a retitled record shows up as a
     warning instead of a quiet miscount.

     Expect these to stay empty. Marking the profile is the fix for everything they could do,
     and a line the profile list truncates is no longer an exception -- the script reopens
     that paper's own record, which carries the author line in full. What is left is a marker
     that is wrong, or a record that will not open at all; the run log names those.

     coFirst            counts the paper as first-authored, as on a CV
     corresponding      counts it as corresponding, whatever the line says
     notCorresponding   the other direction, and it wins over both the marker and coFirst */
  coFirst: [
  ],
  corresponding: [
  ],
  notCorresponding: [
  ],

  /* Conference presentations are counted off the CV, not the profile: Scholar indexes a
     paper when it is published, never a talk that was given. Rendered as ">N". */
  presentations: 30,
};
