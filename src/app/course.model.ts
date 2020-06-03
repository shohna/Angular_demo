export class course {
  private title: String;
  private name: String;
  private description: String;

  constructor(title: String, name: String, description: String) {
    (this.title = title), (this.name = name), (this.description = description);
  }
}
