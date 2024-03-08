import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Method to create a new user
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10), // Hashing the password before saving it
    };

    const createdUser = await this.prismaService.user.create({ data }); // Creating the user using Prisma

    return {
      ...createdUser,
      password: undefined, // Omitting the password from the returned user object for security
    };
  }

  findByEmail(email: string) {
    // Method to find a user by email
    return this.prismaService.user.findFirst({ where: { email } }); // Querying the database using Prisma
  }
}
