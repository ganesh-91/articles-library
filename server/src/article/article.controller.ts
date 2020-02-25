import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Article } from '../types/article';
import { User as UserDocument } from '../types/user';
import { User } from '../utilities/user.decorator';
import { CreateArticleDTO, UpdateArticleDTO } from './article.dto';
import { ArticleService } from './article.service';
import { Response } from "../types/response";

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) { }

  @Get()
  async listAll(): Promise<Response> {
    let data = await this.articleService.findAll();
    let pagination = {};
    return { data, pagination };
  }

  @Get('/mine')
  @UseGuards(AuthGuard('jwt'))
  async listMine(@User() user: UserDocument): Promise<Response> {
    const { id } = user;
    let data = await this.articleService.findByAuthor(id);
    let pagination = {};
    return { data, pagination };
  }

  @Get('/user/:id')
  async listBySeller(@Param('id') id: string): Promise<Response> {
    let data = await this.articleService.findByAuthor(id);
    let pagination = {};
    return { data, pagination };
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() article: CreateArticleDTO,
    @User() user: UserDocument,
  ): Promise<Article> {
    return await this.articleService.create(article, user);
  }

  @Get(':id')
  async read(@Param('id') id: string): Promise<Article> {
    return await this.articleService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: string,
    @Body() article: UpdateArticleDTO,
    @User() user: UserDocument,
  ): Promise<Article> {
    const { id: userId } = user;
    return await this.articleService.update(id, article, userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(
    @Param('id') id: string,
    @User() user: UserDocument,
  ): Promise<Article> {
    const { id: userId } = user;
    return await this.articleService.delete(id, userId);
  }
}
