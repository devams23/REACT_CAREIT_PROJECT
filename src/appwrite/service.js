import {Client , Databases , ID, Query} from "appwrite";
import config from "../../config/config";

export class Service{
    client = new Client();
    databases;

    constructor(){
        this.client
            .setEndpoint(config.appwriteurl) // Your API Endpoint
            .setProject(config.appwriteprojectid);
        this.databases = new Databases(this.client);
    }

    async createstreak ({userid , legs  ,chest , arms , cardio, exercises}){
        try {
            return await this.databases.createDocument(
                config.appwritedatabaseid, // databaseId
                config.appwritecollectionid, // collectionId
                ID.unique(), // documentId
                {
                    userid , legs  ,chest , arms , cardio, exercises

                }, // data
                
            );
            
        } catch (error) {
            console.log("Service :: createstreak :: error" , error);
        }
    } 

    async updatestreak (fileid,{legs  ,chest , arms , cardio , exercises}){
        try {
            return await this.databases.updateDocument(
                config.appwritedatabaseid, // databaseId
                config.appwritecollectionid, // collectionId
                fileid, // document id
                {
                    legs  ,chest , arms , cardio , exercises
                }, // data
                
            );
            
        } catch (error) {
            console.log("Service :: updatestreak :: error" , error);
        }
    }

    async deletestreak (fileid){
        try {
             await this.databases.deleteDocument(
                config.appwritedatabaseid, // databaseId
                config.appwritecollectionid, // collectionId
                fileid, // documentId
            );
            return true;
            
        } catch (error) {
            console.log("Service :: deletestreak :: error" , error);
            return false;
        }
    }

    async getallstreaks() {
        try {
            return await this.databases.listDocuments(
                config.appwritedatabaseid, // databaseId
                config.appwritecollectionid, // collectionId

            );
        } catch (error) {
            console.log("Service :: getallstreaks :: error", error);
            return false;
        }
    }
    

    async getstreak (fileid){
        try {
            return await this.databases.getDocument(
                config.appwritedatabaseid, // databaseId
                config.appwritecollectionid,// collectionId
                fileid, // documentId
            );
            
        } catch (error) {
            console.log("Service :: getstreak :: error" , error);
            return false;
        }
    }
    async getstreakofuser (userid){
        try {
            return await this.databases.listDocuments(
                config.appwritedatabaseid, // databaseId
                config.appwritecollectionid,// collectionId
                [
                    Query.equal("userid" , userid)
                ], // documentId
            );
            
        } catch (error) {
            console.log("Service :: getsteakofuser :: error" , error);
            return false;
        }
    }
};

const service = new Service();
export default service;