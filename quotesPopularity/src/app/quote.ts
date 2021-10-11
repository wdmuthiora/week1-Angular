export class Quote {
  upVote: number;
  downVote: number;
  constructor(
    public personSubmitting: string,
    public author: string,
    public quoteText: string,
    public dateCreated: Date
  ) {
    this.upVote = 0;
    this.downVote = 0;
  }
}
