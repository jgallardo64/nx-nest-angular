import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Team } from '@prisma/client';
import { TeamsService } from './teams.service'

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async getTeams() {
    return this.teamsService.getTeams()
  }

  @Get(':id')
  async getOneTeam(@Param('id') id: string) {
    return this.teamsService.getOneTeam({
      id: Number(id),
    });
  }

  @Post()
  async createTeam(
    @Body()
    teamData: {
      name: string,
      image: string,
    }
  ): Promise<Team> {
    return this.teamsService.createTeam(teamData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: any) {
    return this.teamsService.updateTeam({
      where: { id: Number(id) },
      data: { ...updateTeamDto },
    });
  }

  @Delete(':id')
  async removeTeam(@Param('id') id: string) {
    return this.teamsService.removeTeam(+id);
  }
}