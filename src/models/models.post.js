const Post = class {
  constructor(id, title, content, comments) {
    this.id = id || '';
    this.title = title || '';
    this.content = content || '';
    this.comments = comments || [];
  }
  //getter, settter
  getId = () => this.id;

  setId = (id) => {
    this.id = id;
  }

  getComments = () => this.comments;

  setComments = (comments) => this.comments = comments;


};
export default Post;