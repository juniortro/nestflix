import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('List Movies');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Movie ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }
}
