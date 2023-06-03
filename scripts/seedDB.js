/*
  Remember to replace "mongodb://localhost/inspiration" with your actual 
  MongoDB URI if you're connecting to a remote MongoDB instance.
  */
/*
 Remember that the paths in seedDB.js are not filesystem paths, but URLs that 
 the running application will use to serve these (image) files over the web. 
 This is why the paths are relative to the 'public' directory which 
 is the directory from which Express serves static files.
 */

/*
 As for seeding my database, the most direct method would be to use the MongoDB Node.js driver or 
 Mongoose in my Node.js application. My seedDB.js script is already set up to use Mongoose to connect to 
 MongoDB and seed the data. I would need to run this script from your terminal using Node.js, like so: node seedDB.js

Given that I'm building a MERN stack application and my seed script is written in Node.js, 
the MongoDB drivers are the most relevant. 
The other options (Compass, Shell, VSCode extension) can be useful for exploring and understanding my data, but 
the actual application will interact with MongoDB through the drivers.
 */

/*
In the command line terminal, navigate to the directory containing seedDB.js and run node seedDB.js. 
This will execute the script, which connects to the MongoDB database and seeds the MongoDB database with the following data.
*/

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Inspiration collection and inserts the inspirations below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inspiration",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) console.error("Error while connecting to MongoDB: ", error);
    console.log("Connected successfully to MongoDB.");
  }
);

const inspirationSeed = [
  {
    title: "Acknowledgment",
    author: "Featuring: Rose",
    poem: `In the garden of life, please take note,
      — Acknowledgment — that message we promote;
      Like a rose which does bloom, in life's anecdote,
      Its fragrance on the breeze, amid all we dote.
      `,
    image: "/img/rose-108x178.png",
  },
  {
    title: "Inclusion",
    author: "Featuring: Hyacinth",
    poem: `Hyacinth in early spring, a sight of — inclusion —
      Its clusters of blossoms, bringing joy in profusion;
      Like them may we find our unique superfusion,
      In a world where love is the ultimate conclusion.
      `,
    image: "/img/hyacinth-108x120.png",
  },
  {
    title: "Commencement",
    author: "Featuring: Sunflower",
    poem: `Sunflower tall, against summer's bright sky,
      Symbol of—commencement — ambitions held high;
      Not unlike it — may we grow — let our golden-hearts sigh,
      And our dreams within reach, whenever we try.
      `,
    image: "/img/sunflower-125x153.png",
  },
  {
    title: "Genesis",
    author: "Featuring: Daisy",
    poem: `Daisy's — genesis — each spring such delight,
      In fields and in meadows, a beautiful sight;
      Like them start anew and for our hopes we'll fight,
      And bloom where we are planted, during both day and night.
      `,
    image: "/img/daisy-107x168.png",
  },
  {
    title: "Exploration",
    author: "Featuring: Orchid",
    poem: `An orchid's journey is one of mystery,
      Its blooming requires the seeker's transit key;
      Not unlike it may we dare to breathe beyond each consistory,
      Through — exploration — and discovery, we build a new history.
      `,
    image: "/img/orchid-110x84.png",
  },
  {
    title: "Discovery",
    author: "Featuring: Daffodil",
    poem: `Daffodils in spring, a — discovery — begun,
      Bravely facing the beckoning sun;
      In life like them we yearn for fun,
      With boundless hope, we'll fearlessly run.
      `,
    image: "/img/daffodil-106x120.png",
  },
  {
    title: "Brilliance",
    author: "Featuring: Lily",
    poem: `The lily, in its — brilliance — unfolds,
      In silence, its beauty silently holds;
      Not unlike it — let our light shine ever so bright,
      Reflecting the wisdom of our souls — it beholds!
      `,
    image: "/img/lily-109x111.png",
  },
  {
    title: "Luminescence",
    author: "Featuring: Iris",
    poem: `Iris, in — luminescence — finds its place,
      Radiating beauty, elegance, and grace;
      Like them, we're unique, let our true selves speak,
      In every season, our brilliance shall  embrace.
      `,
    image: "/img/iris-101x278.png",
  },
  {
    title: "Trust",
    author: "Featuring: Lilac",
    poem: `A lilac, in bloom, trusts the spring's tune,
      In — trust — and confidence, it will flourish soon;
      With heart open wide, and fears set aside,
      Like it, may you dance to life's ever-changing rune.
      `,
    image: "/img/lilac-111x153.png",
  },
  {
    title: "Confidence",
    author: "Featuring: Dahlia",
    poem: `The dahlia stands tall, in the summer's thrall,
      Its — confidence — evident, making us enthralled;
      May you, too, stand strong, where you truly belong,
      In the garden of life, may you never feel small.
      `,
    image: "/img/dahlia-108x172.png",
  },
  {
    title: "Fortitude",
    author: "Featuring: Chrysanthemum",
    poem: `Chrysanthemum, in fall's cool embrace,
      Shows — fortitude — in every trace;
      Like it, may you show, a resilience glow,
      And greet each challenge with grace.
      `,
    image: "/img/chrysanthemum-109x126.png",
  },
  {
    title: "Achievement",
    author: "Featuring: Gladiolus",
    poem: `Gladiolus spikes upward, aiming for the skies,
      In — achievement — it boldly, endlessly strives;
      May you, like it, rise, meet your own prize,
      Every day, a new height, your spirit contrives.
      `,
    image: "/img/gladiolus-124x228.png",
  },
  {
    title: "Kindness",
    author: "Featuring: Lotus",
    poem: `Lotus blooms amidst murky depths,
      With — kindness — it rises, taking steady steps;
      May you, too, rise above strife,
      And bring forth kindness in life.
    `,
    image: "/img/lotus-106x83.png",
  },
  {
    title: "Empathy",
    author: "Featuring: Jasmine",
    poem: `In the cool night air, Jasmine exudes her sweet care,
      Her empathy abundant, beyond compare;
      May you spread warmth like her fragrance in the night,
      Your — empathy — a beacon, shining bright.
      `,
    image: "/img/jasmine-108x92.png",
  },
  {
    title: "Elegance",
    author: "Featuring: Magnolia",
    poem: `Magnolia, elegant in her bloom,
      Even in silence, she can fill a room;
      Like her, may you hold your space,
      Moving through life with — elegance — and grace.
      `,
    image: "/img/magnolia-112x159.png",
  },
  {
    title: "Grace",
    author: "Featuring: Marigold",
    poem: `Marigold, a graceful sight, in the daylight bright,
      An inspiring spectacle, to ignite our light;
      May you, like it, display — grace — in your stance,
      In the dance of life, may you joyously prance.
      `,
    image: "/img/marigold-108x107.png",
  },
  {
    title: "Zeal",
    author: "Featuring: Tulip",
    poem: `Tulips rise with the sun, full of — zeal —
      Bursting forth from winter's seal;
      May you awaken each day with their same delight,
      Eager to face the day, from morning to night.
      `,
    image: "/img/tulip-107x175.png",
  },
  {
    title: "Delight",
    author: "Featuring: Carnation",
    poem: `Carnation's blooms are a cheerful sight,
      Radiating joy, banishing night;
      May your spirit, like them, burn bright,
      Spreading zeal and — delight — in every light.
      `,
    image: "/img/carnation-106x185.png",
  },
  {
    title: "Attention",
    author: "Featuring: Zinnia",
    poem: `Zinnia stands tall, in vibrant concentration,
      A beacon of focus in nature's creation;
      May your efforts, like its bloom, rise and sway,
      Giving full — attention — to the challenges of the day.
      `,
    image: "/img/zinnia-109x127.png",
  },
  {
    title: "Concentration",
    author: "Featuring: Bellflower",
    poem: `Bellflower tolls the hours, its blue bells chime,
      An emblem of care, of attention to time;
      Like the bellflower, may you attend to your quest,
      With — concentration — that never rests.
      `,
    image: "/img/bellflower-113x174.png",
  },
  {
    title: "Satisfaction",
    author: "Featuring: Camellia",
    poem: `Camellia, blooming in winter's desolation,
      A symbol of enjoyment and vivid fascination;
      May you find joy in every season's presentation,
      And take — satisfaction — in life's every creation.
      `,
    image: "/img/camilliar-108x144.png",
  },
  {
    title: "Enjoyment",
    author: "Featuring: Peony",
    poem: `Peony, in spring, spreads wide its petals' expanse,
      Its charm invites us into a delicate dance;
      May your heart bloom with equal satisfaction,
      Finding — enjoyment — in every interaction.
      `,
    image: "/img/peony-110x192.png",
  },
  {
    title: "Evolving",
    author: "Featuring: Agapanthus",
    poem: `Agapanthus — evolving — from bud to burst,
      Shows us that growth starts with quenching thirst;
      May you evolve like the bloom, with a vibrant trust,
      In every phase of life, adaptable and just.
      `,
    image: "/img/agapanthus-109x184.png",
  },
  {
    title: "Progressing",
    author: "Featuring: Crocus",
    poem: `Crocus, the first to greet the spring,
      Evolving from bulb to a blossoming thing;
      May you, like the crocus, rise and thrive,
      — Progressing — and growing, as long as you're alive.
      `,
    image: "/img/crocus-109x115.png",
  },
  {
    title: "Vitality",
    author: "Featuring: Calla Lily",
    poem: `Calla Lily, with her trumpet bloom so bright,
      Inspires — vitality — from morning till night;
      In the movement of seasons, she doesn't tire,
      Steadfastly blooming, setting hearts afire.
      `,
    image: "/img/calla_lily-108x239.png",
  },
  {
    title: "Movement",
    author: "Featuring: Cherry Blossom",
    poem: `Cherry Blossom, in fleeting spring does grace,
      Signifies life's — movement — at a brisk pace;
      May you, like these blossoms, sway and dance,
      Carrying vitality in every glance.
      `,
    image: "/img/cherry_blossom-108x82.png",
  },
  {
    title: "Serenity",
    author: "Featuring: Lavender",
    poem: `Lavender, with fragrance soothing and mild,
      Promotes — serenity — calming the inner child;
      In a bustling world that's seldom still,
      Lavender reminds us of the quiet thrill.
      `,
    image: "/img/lavender-108x191.png",
  },
  {
    title: "Stillness",
    author: "Featuring: Sage",
    poem: `Sage, in summer blooms with silver hue,
      Invokes — stillness — a pause, a moment to renew;
      May you, like sage, stand tall and tranquil,
      Serenity guiding your personality's will.
      `,
    image: "/img/sage-108x194.png",
  },
  {
    title: "Pledge",
    author: "Featuring: Hydrangea",
    poem: `Hydrangea, with clusters vast and wide,
      Speak this — pledges — made with pride;
      In summer's glory, she unfolds her blooms,
      Echoing vows where realization looms.
      `,
    image: "/img/hydrangea-120x155.png",
  },
  {
    title: "Realization",
    author: "Featuring: Freesia",
    poem: `Freesia, with fragrance sweet and clear,
      Whispers promises into the listener's ear;
      May your pledges, like her scents, take flight,
      And — realization — will flower, pure and bright.
      `,
    image: "/img/freesia-108x140.png",
  },
  {
    title: "Minimalism",
    author: "Featuring: Lily of the Valley",
    poem: `Lily of the Valley, petite and pure,
      She champions — minimalism — a simple allure;
      Yet, in her humble form, beauty thrives,
      Teaching plenitude, with simplified lives.
      `,
    image: "/img/lily_of_the_valley-107x91.png",
  },
  {
    title: "Plenitude",
    author: "Featuring: Allium",
    poem: `Allium, with her globe-like clusters grand,
      Stands for — plenitude — in a minimalistic land;
      May you, like these flowers, see the worth,
      In the simplest of pleasures here on earth.
      `,
    image: "/img/allium-110x153.png",
  },
  {
    title: "Direction",
    author: "Featuring: Snapdragons",
    poem: `In gardens wild, Snapdragons rise,
      Their — direction — strong beneath the skies;
      Guiding each petal, stem, and leaf,
      Your management marries your true belief.
      `,
    image: "/img/snapdragon-112x185.png",
  },
  {
    title: "Management",
    author: "Featuring: Morning Glory",
    poem: `Morning Glory, with her swift ascent,
      Teaches — management — with good intent;
      May you chart a course that's very true,
      And manage well in all you do.
      `,
    image: "/img/morning_glory-108x108.png",
  },
  {
    title: "Quintessence",
    author: "Featuring: Echinacea",
    poem: `Echinacea, with petals reaching wide,
      In her core — quintessence — does reside;
      She holds her head with elegant poise,
      Amid a healthy garden's noise.
      `,
    image: "/img/echinacea-108x216.png",
  },
  {
    title: "Poise",
    author: "Featuring: Begonia",
    poem: `Begonia, in the dew-kissed morn, quietly soars,
      In the garden's heart, a symbol of — poise — it implores;
      May you find your strength in its gentle embrace,
      And journey through life with unswerving grace.
      `,
    image: "/img/begonia-108x208.png",
  },
  {
    title: "Insight",
    author: "Featuring: Pansy",
    poem: `Pansy, with her face so true,
      Embodying — insight — in vibrant hues;
      Within each delicate petal's fold,
      Life's verity is told.
      `,
    image: "/img/pansy-114x147.png",
  },
  {
    title: "Verity",
    author: "Featuring: Forget-Me-Not",
    poem: `Forget-Me-Not, in her gentle way,
      Speaks — verity — day by day;
      Seeking insight deep and vast,
      May you find your truths at last.
      `,
    image: "/img/forget_me_not-111x109.png",
  },
  {
    title: "Detoxification",
    author: "Featuring: Poppy",
    poem: `Poppy, with her vibrant bloom,
      Whispers of — detoxification — a natural tune;
      Shedding the old, welcoming the new,
      A path of restoration to pursue.
      `,
    image: "/img/poppy-107x158.png",
  },
  {
    title: "Restoration",
    author: "Featuring: Butterfly Bush",
    poem: `Butterfly Bush, a haven of rebirth,
      Echoes — restoration — and worth;
      May your spirit detoxify and renew,
      Restored, like morning dew.
      `,
    image: "/img/butterfly_bush-110x95.png",
  },
  {
    title: "Gallantry",
    author: "Featuring: Cosmos",
    poem: `Cosmos, a celestial show, radiant and bright,
      Its — gallantry — unmatched, a true knight;
      Blooming boldly in colors so free,
      Reflects your creativity spree.
      `,
    image: "/img/cosmos-110x73.png",
  },
  {
    title: "Creativity",
    author: "Featuring: Geranium",
    poem: `Geranium, with clusters grand,
      Lends life's — creativity — a hand;
      In your heart, may gallantry abide,
      As your creative tides coincide.
      `,
    image: "/img/geranium-108x192.png",
  },
  {
    title: "Concession",
    author: "Featuring: Bird of Paradise",
    poem: `Bird of Paradise, elegant and tall,
      In — concession — we find no fall;
      An enlightened view to embrace,
      In each unfolding grace.
      `,
    image: "/img/bird_of_paradise-108x91.png",
  },
  {
    title: "Enlightenment",
    author: "Featuring: Hibiscus",
    poem: `Hibiscus, with its radiant hue,
      A symbol of — enlightenment — true;
      May concession light your way,
      To an enlightened brighter day.
      `,
    image: "/img/hibiscus-108x108.png",
  },
  {
    title: "Appreciation",
    author: "Featuring: Bluebell",
    poem: `In the forest, the Bluebell's gentle nod,
      Whispers of — appreciation — to the sod;
      Its soft blue hue stirs the heart's abyss,
      A silent sigh of nature's bliss.
      `,
    image: "/img/bluebell-114x173.png",
  },
  {
    title: "Bliss",
    author: "Featuring: Azalea",
    poem: `Azalea, a dazzling spring display,
      An emblem of appreciation, some say;
      May its vibrant colors inspire this,
      A heart full of appreciation and — bliss.
      `,
    image: "/img/azalea-106x136.png",
  },
  {
    title: "Quietude",
    author: "Featuring: Wisteria",
    poem: `Wisteria, hanging like a silent song,
      In its — quietude — conversations belong;
      Its fragrant whispers wafting in the air,
      Encourage hearts to openly share.
      `,
    image: "/img/wisteria-108x108.png",
  },
  {
    title: "Conversation",
    author: "Featuring: Black-Eyed Susan",
    poem: `Black-eyed Susan, with its golden face,
      Inspires a calm, conversation's embrace;
      May its peaceful gaze through the morning light,
      Encourage — conversation — in quietude's delight.
      `,
    image: "/img/black_eyed_susan-108x160.png",
  },
  {
    title: "Phenomena",
    author: "Featuring: Bleeding Heart",
    poem: `Bleeding Heart, with pendulous blooms in a row,
    Reflects life's — phenomena — a personal show;
    From bud to blossom, in its daily start,
    Echoes the rhythms of your personal heart.
    `,
    image: "/img/bleeding_heart-108x160.png",
  },
  {
    title: "Shift",
    author: "Featuring: Canna",
    poem: `Canna, in vivid hue, the seasons transcend,
    Signaling a — shift — as life's lines bend;
    In its bold stance, a powerful view,
    Embrace the change become something anew.
    `,
    image: "/img/canna-112x84.png",
  },
  {
    title: "Autonomy",
    author: "Featuring: Honeysuckle",
    poem: `Honeysuckle, with tendrils freely uncoiled,
    Inspires — autonomy — in soil firmly toiled;
    In its reach for the sun, each new bloom a token,
    Nature thrives when autonomy's unbroken.
      `,
    image: "/img/honeysuckle-108x57.png",
  },
  {
    title: "Motion",
    author: "Featuring: Gardenia",
    poem: `Gardenia, with fragrance rich and wild,
      A solitary bloom, nature's child;
      An emblem of — motion — pure and white,
      In life's garden find your autonomy take flight.`,
    image: "/img/gardenia-108x108.png",
  },
];

db.Inspiration.deleteMany({})
  .then(() => db.Inspiration.collection.insertMany(inspirationSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });

/*
  Remember to replace "mongodb://localhost/inspiration" with your actual 
  MongoDB URI if you're connecting to a remote MongoDB instance.
  */
