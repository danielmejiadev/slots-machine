import { Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService, GameType, UserAccount } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/game')
  @ApiOkResponse({ description: 'The game was initiated successfully' })
  getGame(): GameType {
    return this.appService.getGame();
  }

  @Post('/play')
  @ApiOkResponse({ description: 'The user play successfully' })
  play(): GameType {
    return this.appService.play();
  }

  @Get('/cash-out')
  @ApiOkResponse({ description: 'The user cash-out rewards to the account.' })
  castOut(): UserAccount {
    return this.appService.cashOut();
  }
}
