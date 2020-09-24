rooms = [];

let MAXROOMS = 5;


class Location
{

    constructor()
    {
        this.adjectives = [
            "dull",
            "glossy",
            "youthful",
            "icy",
            "thin",
            "unsightly",
            "entertaining",
            "consistent",
            "informal",
            "questionable",
            "thirsty",
            "wise",
            "unequaled",
            "painful",
            "frail",
            "elastic",
            "woozy",
            "alike",
            "agonizing",
            "abrasive",
            "extra-small",
            "quaint",
            "deadpan",
            "thick",
            "understood",
            "aberrant",
            "old",
            "immense",
            "obvious",
            "sweltering",
            "short",
            "talented",
            "boorish",
            "futuristic",
            "ablaze",
            "tan",
            "amusing",
            "mammoth",
            "reasonable",
            "scandalous",
            "somber",
            "shallow",
            "wet",
            "unhealthy",
            "acceptable",
            "oceanic",
            "separate",
            "aloof"
        ];
        this.nouns = [
            "cemetery",
            "hospital",
            "station",
            "library",
            "zoo",
            "castle",
            "Millennium Falcon",
            "halway",
            "airport",
            "church",
            "school",
            "theatre"

        
        
        ];
        this.nouns2 = [
            "fingers",
            "Karens",
            "frogs",
            "dogs",
            "cats",
            "men",
            "advice",
            "uncles",
            "insects",
            "monkeys",
            "memers",
            "gamers",
            "ninjas",
            "monks",
            "zomnies",
            "vampires",
            "undead",
            "hamsters",
            "feet",
            "bigfoots",
            "feminists"


        ];
        this.environment = [
            "Stone",
            "Grass",
            "Gravel",
            "Dirt",
            "Sand",
            "Pits",
            "Creek",
            "Cold",
            "Hot",
            "Windy"
        ];
        this.exits = [];

        this.roomID = 0;
        this.roomName = this.NameGen();
        this.environment = this.Environment();
    }


    NameGen()
    {
        let string = "The " + this.nouns[Math.floor(Math.random() * this.nouns.length)] + " " + 
        "of " + this.adjectives[Math.floor(Math.random() * this.adjectives.length)] + " " +
        this.nouns2[Math.floor(Math.random() * this.nouns2.length)];


        return string;
    }

    Environment()
    {
        let string = "Environment: " + this.environment[Math.floor(Math.random() * this.environment.length)]
        return string;
    }

    Exits()
    {
        switch (roomID) 
        {
            case 0:
                
                break;
        
            case MAXROOMS:

             break;

            default:
                break;
        }
    }
    
}

// Generates a new room with ID, Name and Exits
function RoomGen(amountOfRooms, roomArray)
{
    for (let i = 0; i < amountOfRooms; i++) 
    {        
        roomArray[i] = new Location;
        roomArray[i].roomID = i;
        roomArray[i].exits = roomArray[i].Exits();
    }
}

RoomGen(MAXROOMS, rooms);

// For Debugging
function Print(roomArray)
{
    for (let i = 0; i < rooms.length; i++) 
    {
        console.log("Room: " + i);
        console.log(roomArray[i].roomName);
        console.log(roomArray[i].environment);
        console.log(roomArray[i].roomID);
        console.log(roomArray[i].exits + "\n");
    }
}

Print(rooms);
