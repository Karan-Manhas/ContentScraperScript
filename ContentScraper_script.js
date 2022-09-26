// Content Scraper Plan

/*
1. Identify html element path
2. Extract values and push to dataLayer object
*/


//promotion impressions event example
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'view_promotion',
  ecommerce: {
    items: [{
      promotion_id: 'sc2021',
      promotion_name: 'summer_campaign_2021',
      creative_name: 'family_in_bathing_suits_1',
      creative_slot: 'featured_items',
      location_id: 'hero_banner'
    },{
      promotion_id: 'wc2020',
      promotion_name: 'winter_campaign_2020',
      creative_name: 'family_in_winter_clothes_1',
      creative_slot: 'featured_items_2',
      location_id: 'hero_banner'
    }]
  }
});

// promotion clicks  event example
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'select_promotion',
  ecommerce: {
    items: [{
      promotion_id: 'sc2021',
      promotion_name: 'summer_campaign_2021',
      creative_name: 'family_in_bathing_suits_1',
      creative_slot: 'featured_items',
      location_id: 'hero_banner'
    }]
  }
});

// code to see the entire DOM path for any clicked element.
document.addEventListener('click', function(e) {
    console.log(e);
});

//code to print all h2 elements 
var data = document.getElementsByTagName('h2');
Array.from(data).forEach(x=>console.log(x.innerText));

//Locations from the click event
target.innerText = promotion_name
path[17].localStorage.snapinsPage_13 = promotion_id
 path[17].localStorage.snapinsPage_11 = creative_name 
 path[0].__reactProps$ujh44cliuil.src = Creative_slot_image 

// Click Event locations from the click event function

target.__reactProps$rj4fjm5nlbg.src = creative_name
target.__reactFiber$rj4fjm5nlbg.alternate.alternate.alternate.alternate.alternate.alternate.alternate.alternate.alternate.alternate = creative_slot 


// Plan was to get promotion_id off of the tag name. Code Below
var data = document.getElementsByTagName('h3');
Array.from(data).forEach(x=>console.log(x.innerText));

