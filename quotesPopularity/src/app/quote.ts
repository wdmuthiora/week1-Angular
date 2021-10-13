export class Quote {
  
  upVote: number;
  downVote: number;

  constructor( public id: string,public author: string, public quote: string, public dateCreated: Date ) {
    this.upVote = 0;
    this.downVote = 0;
  }
}
