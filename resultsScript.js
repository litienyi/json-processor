$(document).ready(function() {
  let userQuery = window.location.search.split(/\?userQuery=/g)[1];
  ajaxCall (userQuery);
});

function ajaxCall (userQuery, propertyFilter) {
  window.CrossRefResponse;
  CrossRefResponseTEMP = $.getJSON(`https://api.crossref.org/works?query.bibliographic=${userQuery}&rows=10`, function () {
    CrossRefResponse = CrossRefResponseTEMP["responseJSON"]["message"]["items"];
    showProperties (CrossRefResponse);
    countResults (CrossRefResponse, propertyFilter);
    showResults(CrossRefResponse, propertyFilter);
  });
}

function showProperties (CrossRefResponse) {
  let propertiesContent = "";
  let propertiesList = [];
  for (const item of CrossRefResponse) {
    for (const property of Object.keys(item)) {
      if (!propertiesList.includes(property)) {
        propertiesList.push(property);
      };
    }
  }
  for (const property of propertiesList) {
    propertiesContent += `<div><input class="filter-checkbox" type="checkbox" name="property" value="${property}">${property}</div>`
  }
  $(".properties-div").html(propertiesContent);
  document.getElementById("filterProperties").addEventListener("click", filterResults);
}

function countResults (CrossRefResponse, propertyFilterList) {
  if (propertyFilterList !== undefined) {
    for (object of CrossRefResponse) {
      for (property of Object.keys(object)) {
        if (!propertyFilterList.includes(property)) {
          delete object[property];
        }
      }
      for (property of propertyFilterList) {
        if (!Object.keys(object).includes(property)) {
          object["property"] = "undefined";
        }
      }
  }};
  $(".query-summary").html(
  `<p>Number of results: ${CrossRefResponse.length}</p>`);
}

function showResults(CrossRefResponse, propertyFilterList) {
  if (propertyFilterList !== undefined) {
    for (object of CrossRefResponse) {
      for (property of Object.keys(object)) {
        if (!propertyFilterList.includes(property)) {
          delete object[property];
        }
      }
      for (property of propertyFilterList) {
        if (!Object.keys(object).includes(property)) {
          object[property] = "undefined";;
        }
      }
  }};
  if (CrossRefResponse.length < 100) {
    let DivContent = "";
    for (const item of CrossRefResponse) {
      // CREATE DIV ELEMENT
      let newDiv = "<div class='newDiv'>"
        for (const [key, value] of Object.entries(item)) {
          valueString = JSON.stringify(value);
          let newP = `<div class='newP'><p class='objProperty'>${key}</p><p>${valueString}</p></div>`;
          newDiv += newP;
        }
      newDiv += "</div>"
      DivContent += newDiv
    }
    $(".results-details").html(DivContent);
  } else {$(".results-details").html("<p>Your query returned more than 100 results. Results are hidden to prevent crashing.</p>");
  }
}

function filterResults () {
  let propertyFilterDOM = document.querySelectorAll('.filter-checkbox:checked');
  let propertyFilterList = [];
  for (propertyFilter of propertyFilterDOM) {
    propertyFilterList.push(propertyFilter.value)
  }
  // propertyFilter = String(propertyFilterList);

  let userQuery = window.location.search.split(/\?userQuery=/g)[1];

  ajaxCall(userQuery, propertyFilterList);
}