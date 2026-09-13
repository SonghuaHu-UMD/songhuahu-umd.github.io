/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
* Local change: items carrying .no-collapse are pinned to the visible bar and
* never move into the overflow dropdown. The language switch uses it -- a reader
* who cannot read the current language should not have to find the hamburger
* first. See _includes/lang-toggle.html.
*/

var $nav = $('#site-nav');
// Direct child only. The bar now also holds the language switch, whose own
// buttons are nested deeper -- a plain '#site-nav button' matches those too and
// hides them along with the overflow toggle.
var $btn = $('#site-nav > button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    var $movable = $vlinks.children(':not(.no-collapse)');

    // Only pinned items left: the overflow cannot be relieved, so stop here.
    // Falling through would push an empty selection and then recur on an
    // unchanged width, which never terminates.
    if($movable.length === 0) {
      return;
    }

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $movable.last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list, ahead of anything pinned so the
      // pinned items stay where the reader last saw them -- at the end
      var $pinned = $vlinks.children('.no-collapse').first();
      if($pinned.length) {
        $hlinks.children().first().insertBefore($pinned);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
