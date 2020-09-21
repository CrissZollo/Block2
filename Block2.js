const MAXNUM = 10;
const DEBUG = true;

// Array Class
class MyArray
{
    constructor()
    {
        this.data = [];
        this.data.length = MAXNUM
        this.index = 0;

        (DEBUG) ? console.log(`Created a new Array with length: ${this.data.length}`) : null;
    }

    //push(x) push number if next position is avalible
    push(x)
    {
        if(this.index >= MAXNUM)
        {
            console.log("Error: Array is full")
            return false;
        }
        else
        {
            this.data[this.index++] = x;
            (DEBUG) ? console.log(`Pushed ${x} at ${this.index-1}`) : null;
            return true;
        }
    }

    show()
    {
        if (this.index == 0) 
        {
            console.log("No Data in Array")    
        }
        else
        {
            for (let i = 0; i < this.index; i++)    
            {
                console.log(this.data[i])                
            }
        }
    }


}

let data = new MyArray;

let i = 0;

while (data.push(i++)) 
{
    
}

data.show();