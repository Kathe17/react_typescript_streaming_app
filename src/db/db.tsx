import { CategoryModel } from "../Models/Category.model";
import { DetailsModel } from "../Models/Details.model";
import { UsuarioModel } from "../Models/Usuario.model";
import { baseUrlImages } from "../Share/Constants";

export const usuarios: UsuarioModel[] = [
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/juanPerez.jpg`,
    nombre: "Juan Pérez",
    user: "juanperez@gmail.com",
    password: "1234",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/mariaRodriguez.jpg`,
    nombre: "María Rodríguez",
    user: "mariarodriguez@outlook.com",
    password: "password2",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/pedroGonzalez.jpg`,
    nombre: "Pedro González",
    user: "pedrogonzalez@hotmail.com",
    password: "password3",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/anaMartinez.jpg`,
    nombre: "Ana Martínez",
    user: "anamartinez@gmail.com",
    password: "password4",
  },
  {
    imgProfile: `${baseUrlImages}/userProfilePicture/luisLopez.jpg`,
    nombre: "Luis López",
    user: "luislopez@gmail.com",
    password: "password5",
  },
];

export const categorias: CategoryModel[] = [
  {
    id: 1,
    nombre: "Terror",
    bgImage: `${baseUrlImages}/Categories/bg/terror.jpg`,
    logo: "https://example.com/terror-logo.jpg",
  },
  {
    id: 2,
    nombre: "Romance",
    bgImage: `${baseUrlImages}/Categories/bg/romance.jpg`,
    logo: "https://example.com/romance-logo.jpg",
  },
  {
    id: 3,
    nombre: "Anime",
    bgImage: `${baseUrlImages}/Categories/bg/anime.jpg`,
    logo: "https://example.com/anime-logo.jpg",
  },
  {
    id: 4,
    nombre: "Comedia",
    bgImage: `${baseUrlImages}/Categories/bg/comedia.jpg`,
    logo: "https://example.com/comedia-logo.jpg",
  },
  {
    id: 5,
    nombre: "Acción",
    bgImage: `${baseUrlImages}/Categories/bg/accion.jpg`,
    logo: "https://example.com/accion-logo.jpg",
  },
];

export const movieDetails: DetailsModel[] = [
  {
    id: 1,
    name: "The Journey Beyond",
    bgImage: `${baseUrlImages}/Details/the-journey-beyond-bg.jpg`,
    logo: `${baseUrlImages}/Details/the-journey-beyond-logo.png`,
    synopsis:
      "A gripping tale of adventure and discovery as a group of explorers ventures into unknown lands.",
    detailedSypnosis:
      "In 'The Journey Beyond', a team of daring explorers sets out to uncover the secrets of an uncharted territory. Faced with the challenges of nature and unexpected obstacles, they find more than they bargained for. As they delve deeper into the unknown, they must confront their fears and work together to survive. This epic tale of adventure, bravery, and discovery explores the depths of the human spirit and the boundless wonders of our world.",
    duration: "2h 15min",
    directors: ["Alex Rivera", "Morgan Lee"],
    releaseDate: "2023-07-21",
    categories: [1, 3, 5],
    starring: ["Chris Evans", "Zoe Saldana", "Idris Elba", "Tessa Thompson"],
    rating: "PG-13",
  },
  {
    id: 2,
    name: "Mysteries of the Cosmos",
    bgImage: `${baseUrlImages}/Details/mysteries-cosmos-bg.jpg`,
    logo: `${baseUrlImages}/Details/mysteries-cosmos-logo.png`,
    synopsis:
      "Explore the vastness of the universe and the wonders it holds in this captivating documentary series.",
    detailedSypnosis:
      "‘Mysteries of the Cosmos’ takes viewers on a breathtaking journey through space and time, exploring galaxies, nebulae, and black holes. Each episode delves into the latest discoveries and theories in astrophysics, bringing the secrets of the universe closer to home. Featuring stunning visuals and interviews with leading scientists, this series is an awe-inspiring exploration of our universe and its infinite mysteries.",
    duration: "45min",
    directors: ["Samantha Lee", "Jonathan Hughes"],
    releaseDate: "2024-01-15",
    categories: [2, 4, 5],
    starring: ["Neil deGrasse Tyson", "Emily Calandrelli", "Bill Nye"],
    rating: "TV-G",
  },
  {
    id: 3,
    name: "Heartbeats in Tokyo",
    bgImage: `${baseUrlImages}/Details/heartbeats-in-tokyo-bg.jpg`,
    logo: `${baseUrlImages}/Details/heartbeats-in-tokyo-logo.png`,
    synopsis:
      "A romantic comedy that unfolds under the neon lights of Tokyo, where two strangers find laughter and love.",
    detailedSypnosis:
      "When Alex, an aspiring comedian from America, and Hana, a Japanese manga artist, bump into each other in the bustling streets of Tokyo, neither of them expects the whirlwind of comedy and romance that follows. 'Heartbeats in Tokyo' is a heartwarming tale that navigates the complexities of love, culture, and finding common ground in the most unexpected places. Through laughter and tears, Alex and Hana discover that love knows no boundaries.",
    duration: "1h 45min",
    directors: ["Samantha Cho", "Eiji Tanaka"],
    releaseDate: "2024-02-14",
    categories: [2, 4],
    starring: ["Emma Stone", "Ken Watanabe", "Rila Fukushima"],
    rating: "PG",
  },
  {
    id: 4,
    name: "Whispers in the Dark",
    bgImage: `${baseUrlImages}/Details/whispers-in-the-dark-bg.jpg`,
    logo: `${baseUrlImages}/Details/whispers-in-the-dark-logo.png`,
    synopsis:
      "An eerie tale of a haunted house that whispers secrets of the past, terrifying those who dare to uncover them.",
    detailedSypnosis:
      "In the heart of the countryside lies a house that whispers secrets of a tragic past. When a group of friends decides to spend the weekend there, they are quickly enveloped by the house's dark history. 'Whispers in the Dark' takes you on a terrifying journey through the unknown, where every corner hides a story, and every whisper could be your last.",
    duration: "1h 50min",
    directors: ["Elena Morales"],
    releaseDate: "2023-10-31",
    categories: [1], // Terror
    starring: ["Daniel Kaluuya", "Anya Taylor-Joy"],
    rating: "R",
  },
  {
    id: 5,
    name: "Skybound Dreams",
    bgImage: `${baseUrlImages}/Details/skybound-dreams-bg.jpg`,
    logo: `${baseUrlImages}/Details/skybound-dreams-logo.png`,
    synopsis:
      "An enchanting anime adventure that soars through the skies, exploring dreams and the bonds that tie us together.",
    detailedSypnosis:
      "'Skybound Dreams' tells the story of Kai and Aria, two young dreamers with the power to enter each other's dreams. As they navigate their way through fantastical skybound worlds, they uncover a deeper connection and a destiny that transcends the very fabric of dreams. This visually stunning anime explores themes of friendship, destiny, and the power of dreams.",
    duration: "2h",
    directors: ["Miyu Takahashi"],
    releaseDate: "2024-04-15",
    categories: [3], // Anime
    starring: ["Voices: Haruka Tomatsu, Yuki Kaji"],
    rating: "PG",
  },
  {
    id: 6,
    name: "Operation Thunderbolt",
    bgImage: `${baseUrlImages}/Details/operation-thunderbolt-bg.jpg`,
    logo: `${baseUrlImages}/Details/operation-thunderbolt-logo.png`,
    synopsis:
      "An action-packed thriller following an elite squad on a mission to stop a global threat.",
    detailedSypnosis:
      "When a dangerous weapon falls into the wrong hands, an elite squad led by Captain Mia Stone is tasked with a critical mission: retrieve the weapon and neutralize the threat. 'Operation Thunderbolt' is a high-octane action film that takes you on a thrilling ride across the globe, showcasing breathtaking stunts, strategic battles, and the unbreakable spirit of heroes fighting for peace.",
    duration: "2h 10min",
    directors: ["Liam Wright"],
    releaseDate: "2023-08-05",
    categories: [5], // Acción
    starring: ["Scarlett Johansson", "Idris Elba", "Chris Hemsworth"],
    rating: "PG-13",
  },
  {
    id: 7,
    name: "Love at Second Sight",
    bgImage: `${baseUrlImages}/Details/love-at-second-sight-bg.jpg`,
    logo: `${baseUrlImages}/Details/love-at-second-sight-logo.png`,
    synopsis:
      "A charming tale of unexpected love, second chances, and the magic of fate.",
    detailedSypnosis:
      "Julia, a successful but cynical businesswoman, unexpectedly crosses paths with Tom, a free-spirited artist, reigniting a spark from their past. 'Love at Second Sight' explores the unpredictable nature of love, the importance of second chances, and the belief that sometimes, fate has its own way of bringing people together.",
    duration: "1h 40min",
    directors: ["Carlos Mendez"],
    releaseDate: "2024-02-14",
    categories: [2], // Romance
    starring: ["Rachel McAdams", "Ryan Gosling"],
    rating: "PG-13",
  },
];
