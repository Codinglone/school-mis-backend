import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {


    console.log("connected!!")

}).catch(error => console.log(error))
