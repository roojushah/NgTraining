package com.cd.ngtraining.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cd.ngtraining.model.Book;
import com.cd.ngtraining.service.BookService;

@RestController
@RequestMapping(value = "/api")
public class BookController {

	@Autowired
	BookService bookService;
	
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	@GetMapping("/book/{id}")
	public Book getBookById(@Valid @PathVariable int id) {
		return bookService.getBookById(id);
	}
	
	@PutMapping("/book/update")
	public Book updateBook(@Valid @RequestBody Book book) {
		return bookService.saveBook(book);
	}
	
	@PostMapping("/book/save")
	public Book saveBook(@Valid @RequestBody Book book) {
		return bookService.saveBook(book);
	}
	
	@DeleteMapping("/book/delete/{id}")
	public List<Book> deleteBook(@Valid @PathVariable int id) {
		bookService.deleteBook(id);
		return bookService.getAllBooks();
	}
}
