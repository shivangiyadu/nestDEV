import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { PostDto } from './post.dto';

@Injectable()
export class PostService {
    constructor(private readonly prismaService:PrismaService) {}
    createPost(postDto:PostDto){
        return this.prismaService.post.create({
            data: {
               title:postDto.title,
                description:postDto.description,
                author_id:+postDto.author_id
            }
        });
    }
}
