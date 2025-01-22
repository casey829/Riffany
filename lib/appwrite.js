import {Account, Avatars, Client,Databases,ID, Query } from 'react-native-appwrite';

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
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
    const newAccount = await account.create(
       ID.unique(),
       email,
       password,
       username
    )
    if(!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password);

    const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )

    return newUser;

    } catch (error) {
       console.log(error);
       throw new Error(error);

    } 
}

{/*export async function signIn(email,password) {
    try {
       const session = await account.createEmailPasswordSession(email, password) 
       return session;     
    }catch (error) {
     throw (error);
    }
}*/}

export async function signIn(email, password) {
    try {
        // First try to delete any existing sessions
        try {
            await account.deleteSession('current');
        } catch (error) {
            // Ignore error if no session exists
        }
        
        // Now create new session
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw error;
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount. $id)]
    )

    if(!currentUser) throw Error;

    return currentUser.documents[0];

    } catch (error) {
        
    }
}
