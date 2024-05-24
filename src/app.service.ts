import { Injectable } from '@nestjs/common';


interface Hello {
  message: string
}

@Injectable()
export class AppService {
  getHello(): Hello{
    return {"message": 'Hello World!'};
  }
}
