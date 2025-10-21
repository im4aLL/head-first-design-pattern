interface IPost {
  id: number;
  content: string;
}

interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}

class FeedIterator implements IIterator<IPost> {
  private index = 0;
  private posts: IPost[];

  constructor(posts: IPost[]) {
    this.posts = posts;
  }

  hasNext(): boolean {
    return this.index < this.posts.length;
  }

  next(): IPost {
    return this.posts[this.index++];
  }
}

class Feed {
  private posts: IPost[];

  constructor(posts: IPost[]) {
    this.posts = posts;
  }

  createIterator(): IIterator<IPost> {
    return new FeedIterator(this.posts);
  }
}

// Usage
const feed = new Feed([
  { id: 1, content: "Hello world!" },
  { id: 2, content: "Learning TypeScript" },
  { id: 3, content: "Design patterns are cool" },
]);

const iterator = feed.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next().content);
}
