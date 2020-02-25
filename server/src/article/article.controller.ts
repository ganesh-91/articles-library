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
import * as Crawler from "crawler";
import { async } from 'rxjs/internal/scheduler/async';
// var Crawler = require("crawler");



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
    const { url } = article;
    let data: CreateArticleDTO = {
      url: '',
      title: '',
      image: '',
      description: '',
      rating: 0
    }

    let promise = new Promise(function (resolve, reject) {
      // executor (the producing code, "singer")
      var c = new Crawler({
        maxConnections: 10,
        callback: function (error, res, done) {
          if (error) {
            reject(error)
          } else {
            var $ = res.$;
            console.log($("domain").text())
            resolve($("title").text())
          }
          done();
        }
      });
      c.queue(url);
    });
    await promise.then((res: string) => {
      data = article;
      data.title = res;
    }).catch((err) => {
      console.log('err', err)
    });

    return await this.articleService.create(data, user);
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

  @Put('/rate/:id/:action')
  @UseGuards(AuthGuard('jwt'))
  async updateRating(
    @Param('id') id: string,
    @Param('action') action: string
  ): Promise<Article> {
    if (action === "UP") {
      return await this.articleService.updateRatingUp(id);
    } else if (action === "DOWN") {
      return await this.articleService.updateRatingDown(id);
    }
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
