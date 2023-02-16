import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  // Use class-transformer to transform the body into an instance of CreateMessageDto
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
