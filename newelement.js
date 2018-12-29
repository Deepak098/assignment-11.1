var newelement = document.createElement('p');
undefined
newelement.id = 'para';

newelement.style.color = "purple";

document.body.style.backgroundColor = "grey";

newelement.innerText = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

"The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."
document.body.appendChild(newelement);

var newobject = document.createElement('p');
undefined
newobject.id = 'para2'

newobject.style.color ="red";

newobject.innerText ="A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.";

document.body.appendChild(newobject);
