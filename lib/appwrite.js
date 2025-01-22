import {Account, Client,ID } from 'react-native-appwrite';

export const appwriteConfig = {
     endpoint:'https://cloud.appwrite.io/v1',
     platform: 'com.Riffany.Riffany',
     projectId: '6790d928001d57dff452',
     databaseId: '6790dc7b000dc91cc9c6',
     userCollectionId: '6790dcb700254b96cca3',
     videoCollectionId: '6790dd0700216c8565d0',
     storageId: '6790e03b0000b0581524'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = () => {
    
}



