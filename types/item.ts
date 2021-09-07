import { Tag } from './tag';

export class Item {
  id?: number;
  title: string = '';
  content: string = '';
  image: string;
  link: string | undefined;
  tags: Array<Tag> = new Array<Tag>();

  constructor(id: number, title: string, content: string, image: string, link: string | undefined, tags: Tag[]) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.link = link;
    this.tags = tags;
  }
}
