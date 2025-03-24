package CoffeeShop.coffeeshop.dto;

public class BookDTO{
  private String title,author,isbn;
  private boolean available;




public BookDTO(String title, String author, String isbn,boolean available) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = available;
}
public boolean isAvailable() {
    return available;
}

public void setAvailable(boolean available) {
    this.available = available;
}
public String getTitle() {
    return title;
}

public void setTitle(String title) {
    this.title = title;
}

public String getAuthor() {
    return author;
}

public void setAuthor(String author) {
    this.author = author;
}

public String getIsbn() {
    return isbn;
}

public void setIsbn(String isbn) {
    this.isbn = isbn;
}  
}