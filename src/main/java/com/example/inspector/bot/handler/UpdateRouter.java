package com.example.inspector.bot.handler;

import org.springframework.stereotype.Component;
import ru.max.botapi.model.MessageCreatedUpdate;

import java.util.List;

@Component
public class UpdateRouter {

    private final List<UpdateHandler> handlers;

    public UpdateRouter(List<UpdateHandler> handlers) {
        this.handlers = handlers;
    }

    public void route(MessageCreatedUpdate update) {
        // TODO: найти первый handler, у которого supports(update) == true, и вызвать handle(update)
    }
}
