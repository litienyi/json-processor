// CONTAINER TO INCLUDE ALL JQUERY CODE
$(document).ready(function(){
  const jsonText = $.getJSON("https://api.crossref.org/works?query.bibliographic=%22Chinese+Architecture%22&rows=2", function() {
    console.log(jsonText);
    console.log(`type of jsonText is ${typeof jsonText}`);
    console.log(jsonText.responseJSON.message.items);
    console.log(typeof jsonText.responseJSON);
    for (const item of jsonText.responseJSON.message.items) {
      // CREATE DIV ELEMENT
      let newDiv = "<div>"
        for (const [key, value] of Object.entries(item)) {
          let newP = `<div class="newP"><div>${key}</div><div>${value}</div></div>`;
          newDiv += newP;
        }
      newDiv += "</div>"
      $("body").append(newDiv);
    }
  });
})