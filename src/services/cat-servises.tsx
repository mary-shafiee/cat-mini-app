import create from "./http-service";

export interface Cat {
  name: string;
  image_link: string;
  playfulness: number;
  grooming: number;
}

export default create("/v1/cats");
