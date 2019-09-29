import { configuration } from './../configuration';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './post.model';
import { PostDataStorageService } from './post-data-storage.service';
// import * as firebase from 'firebase/app';



@Injectable({
    providedIn: 'root'
})
export class PostService {

    postNotification = new BehaviorSubject<Post[]>(null);
    private posts: Post[] = [];
    constructor(private postDataService: PostDataStorageService) { }

    isInternetConnected(): boolean {
        return navigator.onLine;
    }

    getPost(id: number): Post {
        return this.posts[id];
    }

    getPosts() {
        this.postDataService.getPosts().subscribe((res) => {
            this.posts = res.map((rawPost) => {
                const post = rawPost.payload.doc.data() as Post;
                return {
                    id: rawPost.payload.doc.id,
                    content: post.content,
                    subtitle: post.subtitle,
                    postDate: post.postDate,
                    title: post.title,
                    author: post.author,
                    category: post.category,
                    imgPath: post.imgPath ? post.imgPath : '',
                    social: this.getAuthorSocial(post.author),
                    imgOwner: this.imgCreator('owner', post.imgOwner),
                    imgId: this.imgCreator('contentId', post.imgOwner)
                };
            });
            this.postNotification.next(this.posts.slice());
        });
        if (this.posts.length) {
            this.postNotification.next(this.posts.slice());
        }
    }

    private imgCreator(type: string, ImgOwner: string) {
        if (ImgOwner) {
            const img = ImgOwner.split('/');
            if (type === 'owner') {
                return img[0].trim();
            }
            if (type === 'contentId') {
                return img[1].trim();
            }
        }
        return '';
    }
    private getAuthorSocial(name: string) {

        const social =
            configuration.aboutus.authors.find((n) => {
                return n.name === name;
            });
        console.log(social);

        return social ? social.social : '';
    }

    addNewPost(post: Post) {
        this.postDataService.createPost(post).then(resp => {
            this.postNotification.next(this.posts.slice());
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    }

    updatePost(index: number, post: Post) {
        // this.posts[index] = post;
        this.postDataService.updatePost(post);
        // this.postNotification.next(this.posts.slice());
    }

    deleteRecipe(index: number, post: Post) {
        // this.posts.splice(index, 1);
        this.postDataService.deletePost(post.id);
        // this.postNotification.next(this.posts.slice());
    }
}
