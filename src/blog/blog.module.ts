import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { AppController } from '../app.controller';
import { PostController } from './post.controller';
import { PostService } from './services/postService';

@Module({
    imports: [],
    providers:[AppService,PostService],
    controllers: [AppController, PostController]
})
export class BlogModule {}
