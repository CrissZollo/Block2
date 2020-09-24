const MAXNUM = 10;
const DEBUG = true;

// Array Class
class MyArray
{
    constructor()
    {
        this.data = [];
        this.data.length = MAXNUM;
        this.index = 0;

        (DEBUG) ? console.log(`Created a new Array with length: ${this.data.length}`) : null;
    }

    // push(x) push number if next position is avalible
    push(x)
    {
        if(this.index >= MAXNUM)
        {
            console.log("Error: Array is full");
            return false;
        }
        else
        {
            this.data[this.index++] = Math.floor(Math.random() * 100) + 10;
            (DEBUG) ? console.log(`Pushed ${x} at ${this.index-1}`) : null;
            return true;
        }
    }

    // Prints the whole Array
    show()
    {
        if (this.index == 0) 
        {
            console.log("No Data in Array");  
        }
        else
        {
            for (let i = 0; i < this.index; i++)    
            {
                console.log(this.data[i])                
            }  
        }
    }

    // Removes last possible number type in the Array
    pop()
    {
        if (this.index <= 0) 
        {
            (DEBUG) ? console.log("Array is already empty") : null
        } 
        else 
        {
            this.index--;
        }
    }  

    // Inserts a number on a specific position in an Array
    insert(x, pos)
    {
        if (pos > this.index) 
        {
            (DEBUG) ? console.log("Error: Invalid") : null 
        }
        else
        {
            for (let i = this.index; i >= pos; i--) 
            {
                this.data[i] = this.data[i-1];
            }
            this.data[pos] = x;  
            this.index++;
        }
    }

    // Delete at a specific position in an Array
    delete(pos)
    {      
        for (let i = pos; i <= this.index; i++) 
        {
            this.data[i] = this.data[i+1];
        }
        this.index--;
    }

    min()
    {

    }


}

let data = new MyArray;

let i = 0;

while (data.push(i++)) 
{
 
}
/*
data.pop();

data.insert(25, 2);

data.delete(6);
*/

data.show();