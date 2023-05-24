import cron from 'node-cron'
import * as dotenv from 'dotenv'

dotenv.config()

const displayGreeting = () => {
  console.log(`Hello world @ `)
}

// Run the scheduled task
cron.schedule(`*/1 * * * * *`, async () => { // Test to run once every minute
  displayGreeting()
})
