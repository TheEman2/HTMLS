class Lesson {
constructor(title, content) {
this.title = title;
this.content = content;
}
display() {
return `<h1>${this.title}</h1><p>${this.content}</p>`;
}
}