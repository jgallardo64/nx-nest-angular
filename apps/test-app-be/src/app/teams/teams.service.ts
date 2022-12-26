import { Injectable } from '@nestjs/common'
import { PrismaClient, Team, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class TeamsService {
  async getTeams(): Promise<Team[]> {
    return prisma.team.findMany({
        include: {
          drivers: true,
        },
      })
  }

  async getOneTeam(teamWhereUniqueInput: Prisma.TeamWhereUniqueInput): Promise<Team> {
    return prisma.team.findUnique({
      where: teamWhereUniqueInput,
        include: {
          drivers: true,
        },
      })
  }

  async createTeam(createTeamDto: Prisma.TeamCreateInput) {
    return prisma.team.create({
      data: createTeamDto
    });
  }

  async updateTeam(params: {
    where: Prisma.TeamWhereUniqueInput;
    data: Prisma.TeamUpdateInput;
  }): Promise<Team> {
    const { where, data } = params;
    return prisma.team.update({
      data,
      where,
    });
  }

  async removeTeam(id: number) {
    return prisma.team.delete({ where: { id } });
  }
}