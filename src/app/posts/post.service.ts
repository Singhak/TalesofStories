import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Post } from './post.model';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    postNotification = new Subject<Post[]>();
    private posts: Post[] = [
        {
            title: 'The recipe of the day',
            subtitle: 'Food from heart',
            author: 'Anil Kumar',
            postDate: '20-12-19',
            category: 'Poem',
            content: 'This is the recipe that is made by my wife and doe this at home in spare time,'
        },
        {
            title: 'दो बोल के वो अल्फ़ाज़',
            subtitle: 'ना केहते बनें ना सुनते बनें ',
            author: 'Anubhav Shankar',
            postDate: '22-Sep-2019',
            category: 'Poem',
            content:
                `> ‍‍‍‌‌दो बोल के वो अल्फ़ाज़<br>
            > ना केहते बनें ना सुनते बनें<br>
            > अल्फ़ाज़ की वो‌ आवाज़<br>
            > खामोशियों में दफ्न गूंज सी<br>
            > धड़कन के लय को जकड़ती रहती<br>
            > एहसास की सांस रोकती रहती<br><br>
            > इस मर्म रूह में<br>
            > ज़ाबित ख्वाहिशों से कांपती<br>
            > इताब की जड़ फूंकती रहती<br>
            > ‍‍‍‌‌दो बोल के वो अल्फ़ाज़<br>
            > तेरे इस्म की वो आवाज़<br>
            > ना केहते बनें ना सुनते बनें <br>`
        },
        {
            title: 'Mai Badalte waqt ki raftar',
            subtitle: 'waqt aur mai',
            author: 'Anil Kumar',
            postDate: '22-Sep-2019',
            category: 'Poem',
            content:
                `> Mai Badalte waqt ki raftar ko dekh rha hu<br>
            > Is badalte waqt mai apne aap o dekh rha hu
            > <p>Sayad mai nahi badla, par badlate hu har insan ko dekh rha hu<br>
            > Mai Badalte waqt ki raftar ko dekh rha hu<p>`
        },
        {
            title: 'तुम खुश तो हो ना',
            subtitle: 'ग़लत तो नहीं कहा ना',
            author: 'Anubhav Shankar',
            postDate: '22-Sep-2019',
            category: 'tale',
            content:
                `> आज बरसों बाद, गली के उसी चौराहे से
                > अस्लम की आइस क्रीम खरीदी है
                > तुम्हारे पसंदीदा पिष्ता बादाम
                > और उसने पूछ ही लिया मुझसे,
                > की तुम आज मेरे साथ क्यों दिख नहीं रही,
                > सब खैरियत तो है, सेहत सलामत तो है
                > मेंने हंस कर हामी भर दी,
                > कह दिया कि तुम याद कर रही हो उन्हें
                > ग़लत तो नहीं कहा ना ?
                > मैं शायद अब तुम्हारी दफ्न यादों का हिस्सा हूं पर
                > पर वो चौराहे पे अस्लम काका के चेहरे की मुस्कान
                > वो तो आज भी याद है ना ?
                > तुम खुश हो ना ?
                >
                > कुछ दिन पहले तुम्हारे जन्मदिन पर,
                > वो ऑनलाइन फूल की दुकान,
                > जिसके नलिनी और गुलनार के फूल,
                >  तुम्हे बेहद पसंद हैं,
                > उनका कॉल आया था,
                > पूछ रहे थे कि क्या उसी पते पर,
                > उसी प्यार और ऐतबार के साथ,
                > फूलों का गुलदस्ता,
                > तुम्हे भेज दिया जाय,
                > मेंने हंस कर इनकार कर दिया,
                > कह दिया कि तुम अब वहां नहीं रहती,
                > गलत तो नहीं कहा ना ?
                > हां घर तो अब भी वही है तुम्हारा,
                > पर शायद अब तुम,
                > जो मेरे भेजे गुलदस्ते का इंतजार किया करती थी,
                > वो शायद अब वहां नहीं रहती,
                > पर घर के आंगन में जो गुलाब,
                > हमने साथ में लगाए थे,
                > वो आज भी तुम्हे अज़ीज़ है ना ?
                तुम खुश तो हो ना ?`
        },
    ];

    constructor(private firestore: AngularFirestore) { }

    getPost(id: number): Post {
        return this.posts[id];
    }
    _getPosts(): Post[] {
        return this.posts.slice();
    }



    addNewPost(post: Post) {
        this.posts.push(post);
        this.postNotification.next(this.posts.slice());
    }

    updatePost(index: number, post: Post) {
        this.posts[index] = post;
        this.postNotification.next(this.posts.slice());
    }

    deleteRecipe(index: number) {
        this.posts.splice(index, 1);
        this.postNotification.next(this.posts.slice());
    }

    setPosts(posts: Post[]) {
        console.log(posts);
        this.posts = posts;
        this.postNotification.next(this.posts.slice());
    }
    ///

    createPost(data) {
        console.log('Create Post: ', data);

        return this.firestore.collection('Posts').add(data);
        // return new Promise<any>((resolve, reject) => {
        //     this.firestore
        //         .collection('posts')
        //         .add(data)
        //         .then(res => { }, err => reject(err));
        // });
    }

    getPosts() {
        return this.firestore.collection('Posts').snapshotChanges();
    }

    // tslint:disable: adjacent-overload-signatures
    _updatePost(data) {
        // this.firestore.doc('Students/' + recordID).update(record);
        return this.firestore
            .collection('Posts')
            .doc(data.payload.doc.id)
            .set({ completed: true }, { merge: true });
    }

    deleteCoffeeOrder(recordId) {
        return this.firestore
            .collection('Posts')
            .doc(recordId)
            .delete();
    }
}
