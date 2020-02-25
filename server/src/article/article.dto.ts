export interface CreateArticleDTO {
  title: string;
  image: string;
  description: string;
}

export type UpdateArticleDTO = Partial<CreateArticleDTO>;
