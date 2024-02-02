import { People, PeopleData} from "./model"


let user: PeopleData = {

    name: "Leo",
    lastName: "Baña",
    age: 30

}

const users = new People(user)


People.createPeople(users)

