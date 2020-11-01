import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryRunner, Repository } from 'typeorm';

import { BaseService } from '@/common/services/base.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends BaseService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    protected readonly connection: Connection,
  ) {
    super(connection);
  }

  async create(newUser: CreateUserDto) {
    const handler = (queryRunner: QueryRunner) => {
      const { manager } = queryRunner;
      manager.save(User, { ...newUser });
    };
    await this.performActionInTransaction(handler);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
