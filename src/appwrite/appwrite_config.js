import { Client, Account, Databases } from "appwrite";


const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("6686c4400000b2ce3e84")


export const account=new Account(client);

//Database

export const databases=new Databases(client,"60031472772024");
