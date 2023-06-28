function ajaxCall (userQuery) {
    window.CrossRefResponse;
    CrossRefResponse = $.getJSON(`https://api.crossref.org/works?query.bibliographic=${userQuery}&rows=101`, function () {
      countResults (CrossRefResponse);
      showResults(CrossRefResponse);
      console.log("done");
    });
}

$(document).ready(function() {
  let userQuery = window.location.search.split(/\?userQuery=/g)[1];
  ajaxCall (userQuery);
});

function countResults (CrossRefResponse) {
  $(".query-summary").append(
  `<p>Number of results: ${CrossRefResponse.responseJSON.message['total-results']}</p>`);
  console.log("done querySummary")
}

function showResults(CrossRefResponse) {
  if (CrossRefResponse.responseJSON.message.items.length < 100) {
    for (const item of CrossRefResponse.responseJSON.message.items) {
      // CREATE DIV ELEMENT
      let newDiv = "<div class='newDiv'>"
        for (const [key, value] of Object.entries(item)) {
          valueString = JSON.stringify(value);
          console.log(value);
          console.log(typeof value);
          console.log(valueString);
          console.log(typeof valueString);
          let newP = `<div class='newP'><p class='objProperty'>${key}</p><p>${valueString}</p></div>`;
          newDiv += newP;
        }
      newDiv += "</div>"
      $(".results-details").append(newDiv);
    }
  } else {$(".results-details").append("<p>Your query returned more than 100 results. Results are hidden to prevent crashing.</p>");
  console.log("done showResults");
  }
}