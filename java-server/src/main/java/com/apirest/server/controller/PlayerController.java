package com.apirest.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apirest.server.document.Player;
import com.apirest.server.services.PlayerService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/ranking")
public class PlayerController {

    final PlayerService service;

    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @PostMapping
	public Mono<Player> save(@RequestBody Player player){
		return service.save(player);
	}

    @GetMapping
    public Flux<Player> findAll(){
        return  service.findAll();
    }
    
}
