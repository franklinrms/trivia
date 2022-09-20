package com.apirest.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apirest.server.document.Player;
import com.apirest.server.repository.PlayerRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class PlayerService implements IPlayerService {

    @Autowired
    private PlayerRepository repository;

    @Override
    public Flux<Player> findAll() {
        return repository.findAll();
    }

    @Override
    public Mono<Player> save(Player player) {
        return repository.save(player);
    }

}
