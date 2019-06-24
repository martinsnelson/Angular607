export interface Photo {
    name: string;
    description: string;
    url: string;
    id:number;
    postDate:Date;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number; 
}