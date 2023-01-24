import express, { Express } from 'express';
import { BragServer } from './setupServer';
import brDBConnection from './setupDatabase';
import { config } from './config';

class Application {
  public initialize(): void {
    this.loadConfig();
    brDBConnection();
    const app: Express = express();
    const server: BragServer = new BragServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
