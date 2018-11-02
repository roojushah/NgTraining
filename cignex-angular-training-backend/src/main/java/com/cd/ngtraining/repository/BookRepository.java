package com.cd.ngtraining.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cd.ngtraining.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}
