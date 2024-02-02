import Usuarios from "./Usuarios.json"
import { readFileSync, writeFileSync } from "fs" 


interface PeopleData {

    name: string,
    lastName: string,
    age: number

}

class People {

    name;
    lastName;
    age;
    gender;

    constructor(user: PeopleData){

        const {name, lastName, age} = user

        this.name = name,
        this.lastName = lastName,
        this.age = age,
        this.gender = this.#createGender()

    }

    #createGender(): string{

       let randomNumber = Math.floor(Math.random()*3)

       if(randomNumber === 1) {return "Male"}
       if(randomNumber === 2) {return "Female"}
       else {return "Shemale"}

    }
    
    setAge(): number{

      let age = this.age = 32
      return age

    }

    static getUsers(): People[]{

       let data = readFileSync(Usuarios, 'utf-8') 
       let parseData = JSON.parse(data) 

       return parseData

    }

    static createPeople (user: People): boolean{

        let usuarios = this.getUsers()
        //accedo al listado de usuarios []

        let data = usuarios.push(user)
        //pusheando user 

        let result = JSON.stringify(data)
        //stringify de data

        writeFileSync(Usuarios, result)
        //sobreescribiendo usuarios 

        return true

    }

}

export { People, PeopleData }