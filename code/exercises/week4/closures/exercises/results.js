//exercise 1
const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box

// Exercise 2
import * as bank from 'Bank.js';
import depositCash as deposit from 'Bank.js';
import checkBalance as showBalance from 'Bank.js';

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// Exercise 3
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ