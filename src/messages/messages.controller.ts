import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

  @Get()
  listMessages() {
    return { message: "This lists all messages" };
  };

  @Post()
  createMessage(@Body() body: any) {
    return { body: body };
  };

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return { id: id };
  };

};
