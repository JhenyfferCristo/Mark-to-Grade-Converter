function repeatFooter() {
  var FooterHTML =
    '<footer>' +
    'Copyright 2023. Jhenyffer Cristo Marques. All rights reserved.'+
    '</footer>';
    return FooterHTML;
}
var FooterHTML = repeatFooter();
document.querySelector("footer").innerHTML = FooterHTML;
