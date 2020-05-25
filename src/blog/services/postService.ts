import { Injectable } from "@nestjs/common";
import { PostModel } from "../model/postModel";
import { Observable ,of} from "rxjs";
import {MockData} from '../mockdata/mockdata';

@Injectable() 
export class PostService {
    public findAll(): Observable<PostModel[]> {
        return of(MockData);
    }
}