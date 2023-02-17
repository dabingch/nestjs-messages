import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';

import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessageService;

  constructor() {
    // Don't do this in real apps
    // Use dependency injection instead
    this.messageService = new MessageService();
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  // Use class-transformer to transform the body into an instance of CreateMessageDto
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
}
