import { CategoryModel } from "./Category.model";

export interface DetailsModelBase {
  id: number;
  name: string;
  bgImage: string;
  logo: string;
  synopsis: string;
  detailedSypnosis: string;
  duration: string;
  directors: string[];
  releaseDate: string;
  starring: string[];
  rating: string;
  urlMediaFull: string;
}

export interface DetailsModel extends DetailsModelBase {
  categories: CategoryModel[];
}

export interface DetailsModelDB extends DetailsModelBase {
  categories: number[];
}
