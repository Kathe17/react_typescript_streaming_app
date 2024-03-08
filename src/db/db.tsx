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
    bgImage: "https://example.com/images/the-journey-beyond-bg.jpg",
    logo: "https://example.com/images/the-journey-beyond-logo.png",
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
    bgImage: "https://example.com/images/mysteries-cosmos-bg.jpg",
    logo: "https://example.com/images/mysteries-cosmos-logo.png",
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
    bgImage: "https://example.com/images/heartbeats-in-tokyo-bg.jpg",
    logo: "https://example.com/images/heartbeats-in-tokyo-logo.png",
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
];
