export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comments[];
}

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
