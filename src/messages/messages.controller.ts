import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

  @Get()
  listMessages() {
    return { message: "This lists all messages" };
  };

  @Post()
  createMessage() {
    return { message: "This creates a new message" };
  };

  @Get('/:id')
  getMessage() {
    return { message: "This gets a message by ID" };
  };

};
