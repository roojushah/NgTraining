package com.cd.ngtraining.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cd.ngtraining.model.Book;
import com.cd.ngtraining.repository.BookRepository;

@Service
public class BookService {
	
	@Autowired
	BookRepository bookRepository;
	
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
	}
	
	public Book getBookById(int id){
		return bookRepository.findById(id).get();
	}

	public Book saveBook(Book book){
		return bookRepository.save(book);
	}
	
	public void deleteBook(int id){
		bookRepository.deleteById(id);
	}

	
}
