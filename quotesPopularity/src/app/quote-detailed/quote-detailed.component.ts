import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detailed',
  templateUrl: './quote-detailed.component.html',
  styleUrls: ['./quote-detailed.component.css'],
})
export class QuoteDetailedComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() toUpvote = new EventEmitter<boolean>();
  @Output() toDownvote = new EventEmitter<boolean>();
  @Output() toDelete = new EventEmitter<boolean>();

  //function to notify parent to upvote
  upVoteQuote(upVote: boolean) {
    this.toUpvote.emit(upVote);
  }

  //function to notify parent to downvote
  downVoteQuote(downVote: boolean) {
    this.toDownvote.emit(downVote);
  }

  // function to delete a quote in the parent
  deleteQuote(deleteThisQuote:boolean) {
    this.toDelete.emit(deleteThisQuote);
  };

  constructor() {}

  ngOnInit(): void {}
}
