import { Controller, Get } from '@nestjs/common';
import { PostService } from "./services/postService";
import { PostModel } from './model/postModel';
import { Observable ,of} from 'rxjs';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService){}

    @Get()
    findAll(): Observable<PostModel[]> {
        return this.postService.findAll();
    }
}
