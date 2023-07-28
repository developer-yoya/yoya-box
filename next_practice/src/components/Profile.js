const Profile = ({filterVal}) => {

const personsList = [
    {
        name:"morikawa",
        age:23,
        hobbies:["futsal","unko"]
    },
    {
        name:"tanaka",
        age:25,
        hobbies:["baseball","unko"]
    },
    {
        name:"satou",
        age:23,
        hobbies:["soccer","unko"]
    },
    {
        name:"suzuki",
        age:23,
        hobbies:["tennis","unko"]
    }
]

return(
    <>
    <ul>
        {personsList

            .filter((person) => (
                person.name.indexOf(filterVal) !== -1
            ))
            .map((person) => (
                <li key = {person.name}>
                    <p>Name:{person.name}</p>
                    <p>Age:{person.age}</p>
                    <p>Hobbies:{person.hobbies.join(",")}</p>
                </li>
            ))
            
        }
    </ul>
        
    </>
)

}

export default Profile;