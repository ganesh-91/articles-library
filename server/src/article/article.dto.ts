export interface CreateArticleDTO {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export type UpdateArticleDTO = Partial<CreateArticleDTO>;
