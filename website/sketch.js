$(document).ready(function() {
$.getJSON( "things.json", function( json ) {
//function to turn each piece into an element on the dom
let things = []
json.projects.forEach(function(element, index){

  let objecMaker = {
    "title": element.title,
    "description": element.description,
    "category": element.category,
    "link": element.link,
    "documentation": element.documentation,
    "index": index

  }

  things.push(objecMaker)
})


    things.forEach(function(element, index){
  //create dom elements for each part
  let thingHolder = $('<div class = "thingHolder"></div>')
  let thingTitle = $('<div class = "thingTItle">' + element.title + '</div>' )
  let thingDescription = $('<div class = "thingDescription">' + element.description + '</div>' )
  let thingMedia = $('<div class = "thingMedia">' + element.link + '</div>' )

  thingHolder.append(thingTitle)
  thingHolder.append(thingDescription)
  thingHolder.append(thingMedia)
  thingHolder.id= index
  thingHolder.addClass('thingHolder')

//    $('.thingHolder').velocity({

//     p:{
//     scale: .85,
//     width: '+=.5em',
//    margin: '-=.3em'
//    },
//    o:{
//     duration: 10
//    }
// })
  
$('#theGrid').append(thingHolder)
console.log($('.thingHolder'))
  
/* To  Scale append thing to separate grid by thing type */ 
//   thingHolder.velocity({
//   p:{
//     scale: .5,
//    margin: '-=5em'
//  },
//   o: {complete: function(){
//     if (element.category === "portals"){
//     $('#gridPortals').append(thingHolder)
//   }

//     if (element.category === "celestial"){
//       $('#gridCelestial').append(thingHolder)

//     }

//     if (element.category === "temple"){
//       $('#gridTemples').append(thingHolder)

//     }
//      if (element.category === "machines"){
//       $('#gridMachines').append(thingHolder)

//     }
    
//   }}
// })

  



  // if (){

  // }


  console.log(element)

    })

   
}) //end getJson
// veloctiy to shrink things


}) //end document ready
