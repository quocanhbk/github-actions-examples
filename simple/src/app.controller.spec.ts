import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import * as dotenv from "dotenv";

dotenv.config();
describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      console.log(process.env.NAME === "LA QUOC ANH");
      expect(appController.getHello()).toBe("Hello World! I'm from Docker");
    });
  });
});
