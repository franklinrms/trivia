package com.apirest.server.services;

import com.apirest.server.document.Player;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IPlayerService {
	
	Flux<Player> findAll();
	Mono<Player> save(Player player);

}
