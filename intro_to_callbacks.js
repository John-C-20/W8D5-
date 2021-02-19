class Clock {
    constructor() {
        // 1. Create a Date object.
        let time = new Date()
        // 2. Store the hours, minutes, and seconds.
        this.hours = time.getHours() 
        this.minutes = time.getMinutes()
        this.seconds = time.getSeconds()
        // 3. Call printTime.
        this.printTime()
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000)
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.clear()
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    };

    _tick() {
        // 1. Increment the time by one second.
        this.seconds += 1; 
        if (this.seconds === 60) {
            this.seconds = 0; 
            this.minutes += 1;
        } 
        if (this.minutes === 60) { 
            this.minutes = 0; 
            this.hours += 1;
        };
        if (this.hours === 24) { 
            this.hours = 0; 
        };   
        // 2. Call printTime.
        this.printTime()
    }
}

// const clock = new Clock();

const readline = require('readline'); 
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) { 
    if (numsLeft > 0) {
        reader.question("gimme a wat \n", (answer) => {
            const input = parseInt(answer);
            
            sum += input; 
            
            console.log(sum); 
            
            numsLeft-- 
            
            return addNumbers(sum, numsLeft, completionCallback)
        });
    } else {
        return completionCallback(sum);
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

reader.close();