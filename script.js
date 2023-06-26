// CONTAINER TO INCLUDE ALL JQUERY CODE
$(document).ready(function(){
  const jsonText = $.getJSON("https://api.crossref.org/works?query.bibliographic=%22Chinese+Architecture%22&rows=2", function() {
    for (const item of jsonText.responseJSON.message.items) {
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
      $("body").append(newDiv);
    }
  });
})