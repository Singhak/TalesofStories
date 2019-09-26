import { Routes, Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

import { MarkdownService } from 'ngx-markdown';
import { PostService } from './../post.service';
import { EditorInstance, EditorOption } from '../../../lib/angular-markdown-editor';
import { Post } from '../post.model';

@Component({
  templateUrl: './post-edit.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./post-edit.component.css']
})
// tslint:disable: align
export class PostEditComponent implements OnInit {
  bsEditorInstance: EditorInstance;
  markdownText: string;
  showEditor = true;
  templateForm: FormGroup;
  editorOptions: EditorOption;
  id: number;
  @ViewChild('postform', { static: true }) editform: NgForm;
  constructor(private fb: FormBuilder, private markdownService: MarkdownService,
    private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val)
    };
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        const post = this.postService.getPost(this.id);
        console.log(post);
        this.markdownText = post.content;
        setTimeout(() => {
          this.editform.form.patchValue({
            title: post.title,
            subtitle: post.subtitle
          });
        });
        this.buildForm(this.markdownText);
      }
    });

  }

  onSubmit(pf: NgForm) {
    console.log(pf);
    const data: Post = {
      title: pf.value.title,
      subtitle: pf.value.subtitle,
      content: this.markdownText,
      postDate: Date.now().toString(),
      category: pf.value.category,
      author: pf.value.author
    }; // pf.value.title;
    this.postService.addNewPost(data);
  }

  buildForm(markdownText) {
    this.templateForm = this.fb.group({
      body: [markdownText],
      isPreview: [true]
    });
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  hidePreview() {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  showFullScreen(isFullScreen: boolean) {
    if (this.bsEditorInstance && this.bsEditorInstance.setFullscreen) {
      this.bsEditorInstance.showPreview();
      this.bsEditorInstance.setFullscreen(isFullScreen);
    }
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();
    return markedOutput;
  }


}
