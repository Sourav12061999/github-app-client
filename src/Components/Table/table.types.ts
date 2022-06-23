export type TableRow ={
 name:string,
 student_code:string,
 _id:string,
 github_username:string,
 status:"PENDING" | "ACTIVE" | "DONE" | "WRONG USERNAME" | "CORRECT USERNAME",
 isSelected?:boolean
}