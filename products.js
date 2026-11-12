/* =====================================================================
   BURLY BOX CO. — PRODUCT LIST
   This is the only file you need to edit to add, remove or change products.

   Each product:
     name     Product name shown on the card
     brand    Brand name (small grey label above the name)
     store    Where the button sends people. "Amazon" shows "Shop on Amazon",
              anything else shows "Shop at <store>"
     cat      Gear | Grooming | Home & Kitchen | Fitness | Tech | Style
              (a category only shows in the menu once it has a product)
     who      Any of: dad, partner, brother, friend, athlete, outdoors, coworker
     tier     1 = Under $50   2 = $50–$100   3 = $100–$200   4 = $200+
     badge    Optional tag on the photo: "Sale", "Top pick", "Founder's pick", etc.
              Remove sale badges when the sale ends.
     why      One line on why it's a good gift
     url      Your affiliate link (Amazon Associates or ShopMy)
     backup   Optional second link (same item at another store). If the main
              link dies, swap it in. The weekly link checker tests both.
     note     Optional small print under the price (e.g. "Final sale")
     founder  Optional quote from you, shown on Founder's picks
     img      Optional photo, e.g. "images/name.jpg" (upload to the images folder).
              Leave out to show the wood tile. Don't copy photos from Amazon pages.
   ===================================================================== */

/* The 8 gifts shown on the home page (match names exactly). Everything else is one click away. */
const HOME_PICKS = [
  "Thirteen-Week Training & Nutrition Journal",
  "CS-8 Digital Video Camcorder",
  "Classic Legendary Bottle, 1.5 qt",
  "Lumi Luxury Aroma Gift Set, Bamboo Forest",
  "Victrola Quincy 6-in-1 Record Player",
  "Classic Easy Fill Wide Mouth Flask, 8 oz",
  "Aeroccino 4 Milk Frother",
  "Pre-Seasoned Cast Iron Skillet, 12 in.",
];

/* Which product appears on the third slide of the banner (match the name exactly) */
const FEATURED = "Victrola Quincy 6-in-1 Record Player";

const PRODUCTS = [
  {name:"Thirteen-Week Training & Nutrition Journal", brand:"Aeilus", store:"Amazon", cat:"Fitness", who:["athlete","partner","brother","friend"], tier:1,
   why:"Thirteen weeks of workouts and meals, tracked on paper. A fresh start he can hold in his hands.",
   url:"https://link.amazon/B07vV6A9b", backup:""},

  {name:"Victrola Quincy 6-in-1 Record Player", brand:"Victrola", store:"Amazon", cat:"Tech", who:["dad","partner"], tier:3, badge:"Sale",
   why:"Records, CDs, tapes and FM radio in one mahogany cabinet. Streams from his phone too.",
   url:"https://link.amazon/B0gYvPyC7", backup:""},

  {name:"Induction Speaker 5-in-1 Phone Stand", brand:"Oresoc", store:"Amazon", cat:"Tech", who:["partner","brother","friend","coworker"], tier:1,
   why:"Set his phone on it and the music gets louder. No pairing needed, plus light-up glow and a cable to charge while it plays.",
   note:"Black or green.",
   url:"https://link.amazon/B005yPuXF", backup:""},

  {name:"Lumi Luxury Aroma Gift Set, Bamboo Forest", brand:"Lumi", store:"Amazon", cat:"Home & Kitchen", who:["partner","coworker","friend"], tier:1, badge:"Founder's pick",
   why:"Makes his place smell like a cabin, not a gym bag. Diffuser, wood-wick candle and room spray, already boxed.",
   founder:"This smells so good. I bought one for myself.",
   url:"https://link.amazon/B09YlV6bs", backup:""},

  {name:"Classic Legendary Bottle, 1.5 qt", img:"images/stanley-bottle.jpg", brand:"Stanley", store:"Stanley", cat:"Gear", who:["dad","outdoors","partner"], tier:1, badge:"Top pick",
   why:"The green thermos his grandfather carried. Hot coffee from first light to quitting time.",
   url:"https://go.shopmy.us/p-102187590", backup:""},

  {name:"Classic Easy Fill Wide Mouth Flask, 8 oz", img:"images/stanley-flask.jpg", brand:"Stanley", store:"Stanley", cat:"Gear", who:["outdoors","dad","friend","brother"], tier:1,
   why:"For the campfire, the stories, and one more round.",
   url:"https://go.shopmy.us/p-102188131", backup:""},

  {name:"Pre-Seasoned Cast Iron Skillet, 12 in.", brand:"Lodge", store:"Amazon", cat:"Home & Kitchen", who:["dad","partner","outdoors"], tier:1, badge:"Bestseller",
   why:"Made in the USA. Goes from the stovetop to the campfire and lasts for generations.",
   url:"https://link.amazon/B0bwwiTQp", backup:""},

  {name:"Instant Cabin Tent", brand:"FanttikOutdoor", store:"Amazon", cat:"Gear", who:["outdoors","dad"], tier:3,
   why:"Camp's up before the fire's lit. Room for the whole crew.",
   url:"https://link.amazon/B0je5nZ54", backup:""},

  {name:"Shawl Collar Cabin Cardigan", brand:"Esobo", store:"Amazon", cat:"Style", who:["dad","partner","outdoors"], tier:1,
   why:"Heavy knit, shawl collar and deep pockets for cold nights by the fire.",
   url:"https://link.amazon/B0eVgfTJg", backup:""},

  {name:"Solar Power Bank, 40000mAh", brand:"MINRISE", store:"Amazon", cat:"Gear", who:["outdoors","partner","dad"], tier:1,
   why:"Charges off the sun. Built-in cables for every phone and a flashlight for when the fire dies down.",
   url:"https://link.amazon/B07QEr3iQ", backup:""},

  {name:"CS-8 Digital Video Camcorder", img:"images/camp-snap-cs8.jpg", brand:"Camp Snap", store:"Camp Snap", cat:"Tech", who:["dad","partner","brother","friend"], tier:3, badge:"Limited stock",
   why:"Super 8-style home movies with no screen, so he films the moment instead of watching it.",
   url:"https://go.shopmy.us/p-102177854", backup:""},

  {name:"Cruiser Plus Portable Record Player", img:"images/crosley-cruiser.jpg", brand:"Crosley", store:"AllModern", cat:"Tech", who:["partner","brother","friend"], tier:2, badge:"Sale",
   why:"A record player that packs up like a suitcase. Take the music to the porch, the garage or the cabin.",
   url:"https://go.shopmy.us/p-102190202", backup:""},

  {name:"39-Piece Cookware Set", brand:"CAROTE", store:"Amazon", cat:"Home & Kitchen", who:["partner","brother","friend"], tier:3,
   why:"A whole kitchen in one box for the guy setting up his own place.",
   url:"https://link.amazon/B02xKyIcO", backup:""},

  {name:"Weighted Vest, Adjustable", brand:"MVRK", store:"Amazon", cat:"Fitness", who:["athlete","partner","brother"], tier:2, badge:"Deal",
   why:"Turns every walk into a workout. Built for rucking and HIIT, and it doesn't bounce.",
   note:"From 25 lb. Price depends on weight.",
   url:"https://link.amazon/B030WK5us", backup:""},

  {name:"Adjustable Dumbbell, up to 55 lb", img:"images/betterme-dumbbell.jpg", brand:"BetterMe", store:"BetterMe", cat:"Fitness", who:["athlete","partner","brother"], tier:4,
   why:"One dumbbell replaces a whole rack. A home gym without taking over the garage.",
   note:"Sold as a single dumbbell. HSA/FSA eligible.",
   url:"https://go.shopmy.us/p-102190920", backup:""},

  {name:"Aeroccino 4 Milk Frother", img:"images/nespresso-aeroccino.jpg", brand:"Nespresso", store:"Dillard's", cat:"Home & Kitchen", who:["dad","partner","coworker"], tier:3,
   why:"Café-style lattes at home with one button. For the guy who spends too much at the coffee shop.",
   url:"https://go.shopmy.us/p-102186701", backup:""},

  {name:"Bamboo Sheet Set", img:"images/cozy-earth-sheets.jpg", brand:"Cozy Earth", store:"Cozy Earth", cat:"Home & Kitchen", who:["partner","dad"], tier:4, badge:"Sale",
   why:"The sheets he'll never admit he loves. Over 10,000 reviews.",
   url:"https://go.shopmy.us/p-68588756", backup:""},

  {name:"Percale Quilted Down Alternative Comforter", img:"images/boll-branch-comforter.jpg", brand:"Boll & Branch", store:"Boll & Branch", cat:"Home & Kitchen", who:["partner","dad"], tier:4,
   why:"Made for the guy who runs hot at night. Crisp, cooling percale.",
   note:"Price varies by size.",
   url:"https://go.shopmy.us/p-68588401", backup:""},

  {name:"Velvet Blackout Curtain", img:"images/velvet-curtain.jpg", brand:"Legends Luxury", store:"The Company Store", cat:"Home & Kitchen", who:["partner","brother"], tier:3, badge:"50% off",
   why:"For the guy who sleeps in, works nights, or just got his own place.",
   note:"Final sale. No returns.",
   url:"https://go.shopmy.us/p-68592434", backup:""},

  {name:"Shoe Care Kit", img:"images/travismathew-shoe-kit.jpg", brand:"TravisMathew", store:"TravisMathew", cat:"Style", who:["partner","brother","friend","coworker"], tier:1,
   why:"For the guy who's particular about his shoes. Cleaner, protector, brush and towel, already in a gift box.",
   url:"https://go.shopmy.us/p-68592733", backup:""},

  {name:"Sound + Light Sleep Machine", img:"images/nanit-sound-light.jpg", brand:"Nanit", store:"Bloomingdale's", cat:"Tech", who:["dad"], tier:2, badge:"New dads",
   why:"Helps the baby sleep, so Dad finally does too.",
   url:"https://go.shopmy.us/p-68590329", backup:""},
];
