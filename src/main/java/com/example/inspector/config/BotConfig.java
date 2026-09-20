package com.example.inspector.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.max.botapi.client.MaxBotAPI;
import ru.max.botapi.longpolling.MaxLongPollingConsumer;
import ru.max.botapi.model.MessageCreatedUpdate;
import ru.max.botapi.model.NewMessageBody;

@Configuration
public class BotConfig {

    private static final Logger log = LoggerFactory.getLogger(BotConfig.class);

    @Bean
    MaxBotAPI maxBotAPI(@Value("${bot.token}") String token) {
        MaxBotAPI api = MaxBotAPI.create(token);
        var me = api.getMyInfo().execute();
        log.info("БОТ: имя={}, ник=@{}", me.firstName(), me.username());
        return api;
    }

    @Bean
    MaxLongPollingConsumer consumer(MaxBotAPI api) {
        return MaxLongPollingConsumer.builder()
                .api(api)
                .handler(update -> {
                    if (update instanceof MessageCreatedUpdate msg) {
                        String text = msg.message().body().text();
                        Long chatId = msg.message().recipient().chatId();
                        if (text != null && chatId != null) {
                            api.sendMessage(new NewMessageBody(text, null, null, null, null))
                                    .chatId(chatId)
                                    .execute();
                        }
                    }
                })
                .onError(e -> log.error("Ошибка long polling", e))
                .build();
    }

    @Bean
    ApplicationRunner startPolling(MaxLongPollingConsumer consumer) {
        return args -> consumer.start();
    }
}
