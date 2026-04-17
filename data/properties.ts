export interface Property {
  id: string;
  title: string;
  price: number;
  city: string;
  type: "Vente" | "Location";
  surface: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  images: string[];
  address: string;
  dpe: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Villa Contemporaine avec Piscine",
    price: 1_250_000,
    city: "Aix-en-Provence",
    type: "Vente",
    surface: 280,
    rooms: 7,
    bedrooms: 4,
    bathrooms: 3,
    address: "12 Chemin des Oliviers, 13100 Aix-en-Provence",
    description:
      "Somptueuse villa contemporaine nichée dans un écrin de verdure, offrant une vue panoramique sur la Sainte-Victoire. Architecturé autour d'un patio central, ce bien d'exception marie matériaux nobles et lignes épurées. La piscine à débordement et la terrasse de 80 m² complètent un ensemble rare sur le marché.",
    features: [
      "Piscine à débordement",
      "Terrasse 80 m²",
      "Double garage",
      "Cuisine équipée haut de gamme",
      "Domotique intégrée",
      "Jardin paysager 800 m²",
      "Cave à vin",
      "Système d'alarme",
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    dpe: "B",
  },
  {
    id: "2",
    title: "Appartement Haussmannien",
    price: 895_000,
    city: "Paris 7e",
    type: "Vente",
    surface: 145,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    address: "8 Rue de Varenne, 75007 Paris",
    description:
      "Au cœur du 7e arrondissement, majestueux appartement Haussmannien au 3e étage avec ascenseur. Moulures, parquet point de Hongrie et cheminées en marbre constituent le cadre authentique de ce bien d'exception. La hauteur sous plafond de 3,20 m et la clarté des volumes en font une résidence principale de prestige.",
    features: [
      "Parquet point de Hongrie",
      "Cheminées en marbre",
      "Moulures et corniches",
      "Gardien",
      "Cave et cellier",
      "Hauteur 3,20 m",
      "Double vitrage",
      "Digicode + interphone",
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
    ],
    dpe: "D",
  },
  {
    id: "3",
    title: "Loft Design – Ancien Entrepôt",
    price: 4_200,
    city: "Lyon",
    type: "Location",
    surface: 120,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    address: "34 Quai Rambaud, 69002 Lyon",
    description:
      "Loft unique reconverti d'un ancien entrepôt industriel sur les quais de Saône. Volumes spectaculaires avec une hauteur de 5 m sous charpente métallique apparente. La mezzanine abrite deux chambres tandis que le plateau principal accueille un séjour-cuisine ouvert baigné de lumière grâce aux verrières d'origine.",
    features: [
      "Hauteur 5 m",
      "Verrières d'origine",
      "Charpente métallique apparente",
      "Cuisine américaine",
      "Mezzanine",
      "Parking inclus",
      "Fibre optique",
      "Interphone vidéo",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80",
    ],
    dpe: "C",
  },
  {
    id: "4",
    title: "Mas Provençal Rénové",
    price: 780_000,
    city: "Gordes",
    type: "Vente",
    surface: 220,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 2,
    address: "Route des Bories, 84220 Gordes",
    description:
      "Authentique mas provençal entièrement rénové dans un esprit de haute qualité, préservant l'âme du bâti originel. Pierres apparentes, voûtes et tomettes anciennes côtoient une cuisine de chef moderne et des salles de bains en marbre. Posé sur 3 500 m² de garrigue, avec verger et pool house.",
    features: [
      "Pierres apparentes",
      "Piscine chauffée",
      "Pool house",
      "Verger 3 500 m²",
      "Cuisine de chef",
      "Tomettes anciennes",
      "Voûtes en pierre",
      "Portail électrique",
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?w=1200&q=80",
    ],
    dpe: "C",
  },
  {
    id: "5",
    title: "Penthouse Vue Mer",
    price: 2_100_000,
    city: "Nice",
    type: "Vente",
    surface: 195,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    address: "3 Promenade des Anglais, 06000 Nice",
    description:
      "Rare penthouse au dernier étage d'une résidence de standing face à la Méditerranée. Terrasse de 120 m² orientée plein sud avec vue imprenable sur la Baie des Anges. Prestations ultra-premium : domotique, sol en travertin, cuisine Boffi, salle de bain spa avec baignoire balnéo et hammam privatif.",
    features: [
      "Terrasse 120 m² vue mer",
      "Domotique Crestron",
      "Cuisine Boffi",
      "Hammam privatif",
      "Ascenseur privatif",
      "Deux parkings en sous-sol",
      "Gardiennage 24h/24",
      "Piscine commune sur le toit",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=80",
    ],
    dpe: "B",
  },
  {
    id: "6",
    title: "Studio Premium – Centre Historique",
    price: 1_650,
    city: "Bordeaux",
    type: "Location",
    surface: 42,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    address: "15 Rue Saint-James, 33000 Bordeaux",
    description:
      "Élégant studio entièrement meublé et équipé au cœur du triangle d'or bordelais, à deux pas du Grand Théâtre. Rénové avec des matériaux de qualité, il séduit par son parquet chêne massif, sa kitchenette Bosch encastrée et sa salle d'eau en béton ciré. Idéal cadre dirigeant ou investisseur locatif.",
    features: [
      "Meublé et équipé",
      "Parquet chêne massif",
      "Kitchenette Bosch",
      "Béton ciré",
      "Fibre optique incluse",
      "Charges incluses",
      "Interphone vidéo",
      "Digicode",
    ],
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    ],
    dpe: "C",
  },
];
