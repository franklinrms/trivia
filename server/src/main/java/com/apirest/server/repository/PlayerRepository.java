package com.apirest.server.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.apirest.server.document.Player;

public interface PlayerRepository extends ReactiveMongoRepository<Player, String>{

}
