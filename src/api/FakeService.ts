import { v1 as uuidv1 } from 'uuid';
import news from './news.json';
import { News } from 'models/index.js';

interface LoginParams {
  username: string;
  password: string;
}

interface SaveInterestsParams {
  interests: string[];
}

interface UserData {
  username: string;
  token: string;
}

interface InterestsData {
  interests: string[];
}

const TIMEOUT = 1000;

export abstract class FakeService {
  private static _superSecretAndUltraSecureDB: { interests: string[] } = {
    interests: []
  };

  public static login (params: LoginParams): Promise<UserData> {
    return new Promise(resolve => {
      const { username } = params;
      setTimeout(() => {
        resolve({ username, token: uuidv1() });
      }, TIMEOUT);
    });
  }

  public static saveInterests (params: SaveInterestsParams) {
    return new Promise(resolve => {
      setTimeout(() => {
        const { interests } = params;
        FakeService._superSecretAndUltraSecureDB.interests = interests;
        resolve(params);
      }, TIMEOUT);
    });
  }

  public static getInterests (): Promise<InterestsData> {
    return new Promise(resolve => {
      setTimeout(() => {
        const { interests } = FakeService._superSecretAndUltraSecureDB;
        resolve({ interests });
      }, TIMEOUT);
    });
  }

  public static getNews (filter?: string[]): Promise<News[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        let data = news;

        if (filter && filter.length > 0)
          data = data.filter(item => filter.includes(item.type));

        resolve(JSON.parse(JSON.stringify(data)));
      }, TIMEOUT);
    });
  }
}
