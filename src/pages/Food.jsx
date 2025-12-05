import React, { useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import DetailModal from "../components/DetailModal";

export default function Food() {
  const [active, setActive] = useState(null);

  const foods = [
    {
      title: "Street Bites",
      subtitle: "Spicy, tangy & iconic snacks",
      color: "#F13C20",
      img: null,
      description:
`India's streets are a living kitchen — alive with steam, spice and conversation. Street Bites include savory chaat, crispy pakoras, piping hot samosas, and regional specialties that tell local stories: the crunchy pani puri of the north, the tangy bhelpuri of the coast, the fiery tawa kebabs of city lanes. Each bite is a cultural snapshot — cheap, instant, and utterly memorable. For a traveler, street food is where the city's true flavor and character reveal themselves. Approach with curiosity, watch how locals eat, and you'll taste a country in a handful of snacks.`
    },
    {
      title: "Festive Sweets",
      subtitle: "Traditional desserts",
      color: "#EFE2BA",
      img: null,
      description:
`Sweets in India are prayers in sugar. From the syrupy gulab jamun and milk-solid peda to the delicate layers of malpua and the fragrant saffron kheer — festivals are incomplete without mithai. Each region keeps its signature treats: kaju katli in celebratory boxes, ladoos at pujas, and halwa during winter gatherings. These desserts are laden with memory, hospitality and ritual — share one and you share a celebration.`
    },
    {
      title: "Village Thali",
      subtitle: "Rustic wholesome meals",
      color: "#8D8741",
      img: null,
      description:
`A village thali is simplicity arranged elegantly: freshly milled rotis, seasonal vegetables, a dal simmered slowly on wood fire, a spoon of pickles, and a dessert of jaggery and ghee. These meals connect you to the land — food that carries the taste of soil, the rhythm of seasons, and recipes passed down across generations. It is comfort, richness and austerity in one wholesome plate.`
    },
    {
      title: "Clay Pot Cooking",
      subtitle: "Earthen pot slow-cooked dishes",
      color: "#C96567",
      img: null,
      description:
`Clay pot cooking gently infuses food with smoky warmth and an earth-sweet finish. Slow-cooked curries, biryanis, and stews retain moisture and deepen flavor. The earthen vessel speaks of age-old technique: fire, patience and a very human devotion to taste. Try a dum biryani or a smoked curry from a clay pot — you'll experience texture and aroma that modern pans can't replicate.`
    },
    {
      title: "Herbal Drinks",
      subtitle: "Cooling village beverages",
      color: "#66A182",
      img: null,
      description:
`From the tangy aam panna to cooling jaljeera, India’s herbal drinks are folk remedies and delights. Made from local produce — mint, roasted cumin, tamarind, raw mango, and jaggery — these beverages hydrate festival crowds and market-goers alike. They are seasonal, restorative, and unexpectedly complex in flavor.`
    },
    {
      title: "Seasonal Specialties",
      subtitle: "Food linked to festivals & seasons",
      color: "#F6AA1C",
      img: null,
      description:
`Indian kitchens tune themselves to the calendar. Winter brings sarson ka saag, summer invites mangoes in every form, monsoon calls for piping pakoras with tea. Seasonal specialties celebrate the harvest, honor the calendar, and reinforce community rhythms — each dish is a marker of time and place.`
    },
    {
      title: "Farm Fresh Cuisine",
      subtitle: "Harvest-based traditional foods",
      color: "#9A6324",
      img: null,
      description:
`The farm-to-table tradition in India is ancient: grains harvested this week become rotis within days; vegetables plucked at dawn arrive at midday markets. Farm Fresh Cuisine highlights this immediacy — simple preparations that allow freshness to sing: roasted vegetables, lightly spiced dals, and slow-cooked grain recipes that celebrate the harvest.`
    },
    {
      title: "Millet Dishes",
      subtitle: "Ancient grains cooked traditionally",
      color: "#CD5D7D",
      img: null,
      description:
`Millets — ragi, jowar, bajra — were staples before rice and wheat dominated. They’re nutty, wholesome and naturally suited to summer climates. Traditional millet rotis, porridges and fermented snacks are regaining attention for their nutrition and deep-rooted taste profiles. Discover millet dishes and meet India’s ancient food heritage.`
    },
    {
      title: "Pickles & Chutneys",
      subtitle: "Homemade tangy delights",
      color: "#59A5D8",
      img: null,
      description:
`Every household keeps jars of pickles and bottles of chutney, made from mango, lime, tamarind, red chilies, and local greens. These pungent, pickled treasures are the soul of many meals, adding bright counterpoint to rich gravies and plain rice. They are fiercely personal — recipes are family heirlooms.`
    },
    {
      title: "Handmade Breads",
      subtitle: "Roti, Bhakri, Thepla & more",
      color: "#E07A5F",
      img: null,
      description:
`Indian breads vary by field and season — thin rotis, thick bhakris, flaky parathas, and spiced theplas. Each bread is a statement of place: millet bhakri on a tribal plate, buttery parathas in mountain kitchens, or crisp puris during puja mornings. Warm bread with ghee is a universal comfort.`
    },
    {
      title: "Festival Feasts",
      subtitle: "Meals served during holy rituals",
      color: "#F4A261",
      img: null,
      description:
`Feasts are offerings to community and divinity. Large platters, shared sweets, and ritual dishes mark weddings, harvests and temple days. A festival feast often stitches together neighbors and family — a temporary kingdom where food expresses gratitude and abundance.`
    },
    {
      title: "Forest Foraged Foods",
      subtitle: "Tribal greens & natural ingredients",
      color: "#2A9D8F",
      img: null,
      description:
`Tribal communities use foraged greens, tubers, wild fruits and smoky herbs. These forest foods are resilient, nutrient-dense, and carry wild flavors you won't find in urban markets. They tell stories of survival, intimate plant knowledge, and a cuisine shaped by forests rather than farms.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf4e6] py-16">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold font-merri mb-6 text-gray-900"
        >
          Indian Traditional Foods
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="text-gray-700 max-w-3xl text-lg mb-10"
        >
          Discover age-old culinary traditions — from clay pot flavors to festive sweets passed down through generations.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {foods.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="transition-transform hover:-translate-y-2 hover:scale-[1.01] cursor-pointer"
              onClick={() => setActive(f)}
            >
              <Card {...f} />
            </motion.div>
          ))}
        </div>

        {active && <DetailModal item={active} onClose={() => setActive(null)} />}

      </div>
    </div>
  );
}
