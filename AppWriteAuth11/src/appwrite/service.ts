import { ID, Account, Client } from 'appwrite';
import Config from 'react-native-config';
import { Snackbar } from 'react-native-snackbar';

const appWriteClient = new Client();

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

console.log(APPWRITE_ENDPOINT, 'app');

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppWriteService {
  account;

  constructor() {
    appWriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appWriteClient);
  }

  //create a new record of user inside appwrite
  async createAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAcc = await this.account.create({
        userId : ID.unique(),
        email,
        password,
        name,
      }
      );
      if (userAcc) {
        return this.login({ email, password });
      } else {
        return userAcc;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite Service :: create Account ::', error);
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await this.account.createEmailPasswordSession({ email, password });
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite Service :: login ::', error);
    }
  }

  async getCurrentUserDetails() {
    try {
      return await this.account.get();
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite Service :: Get Curr User Details ::', error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession({
        sessionId: 'current',
      });
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite Service :: logout ::', error);
    }
  }
}

export default AppWriteService;
