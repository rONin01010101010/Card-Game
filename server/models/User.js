
import { hash } from 'bcryptjs'
class UserModel {
    constructor() {
    this.User = { id: 1, name: "Kenan", score: 5, email: "jkenan72@gmail.com", password:"kenan123"}
    }

    async createUser(_User) {
       
        try {
        if(this.User.name && this.User.email == null) {
          newUser = {
            id: this.User.id++, 
            name: this.User.name,
            score: this.User.score, 
            email: this.User.email,
            password: hash(this.User.password)
          } 
        
        
         return newUser; 
        
        }
    } catch(error){
        throw "User already exists"
    }
    
 }  

  async updateUser(User) {
    
    if(this.User.name && this.User.email == null) {
        console.log('This user cannot update, use does not exist')
    }
          
      
     const newUser = await pool.query('UPDATE users' ,
        [name, email, score, password, id]
    )




  

}





}