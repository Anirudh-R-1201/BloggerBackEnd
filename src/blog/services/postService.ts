import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "../entity/postEntity";
import { Repository } from "typeorm";
import * as _ from "lodash";
import {PostDto} from '../dtos/postDTO';
import {CreatePostDto} from '../dtos/createPostDTO';
import {map} from "rxjs/operators";
import{from,Observable} from 'rxjs';

@Injectable() 
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {
        
    }
    public findAll(): Observable<PostEntity[]> {
        return from(this.postRepository.find()).pipe(map((posts)=> _.orderBy(posts,['id'],['desc'])));
    }
    
    public create(createPostDto: CreatePostDto): Promise<PostDto> {
        return this.postRepository.save(createPostDto);
    }
  
    public delete(postId: number): void {
         this.postRepository.delete(postId);
    }
 
}