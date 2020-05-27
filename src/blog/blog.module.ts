import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { AppController } from '../app.controller';
import { PostController } from './post.controller';
import { PostService } from './services/postService';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PostEntity} from './entity/postEntity';


@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity])
    ],
    providers:[AppService,PostService],
    controllers: [AppController, PostController]
})
export class BlogModule {}
