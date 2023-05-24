import cron from 'node-cron'
import * as dotenv from 'dotenv'

dotenv.config()

const sleep = (secondsToSleep) => {
  if (secondsToSleep === 0) {
    return new Promise(resolve => null)
  }
  return new Promise(resolve => setTimeout(resolve, secondsToSleep*1000))
}

const displayGreeting = () => {
  const currentDate = new Date()
  const displayDateTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'America/Chicago'
  }).format(currentDate)
  console.log('Hello world @', displayDateTime)
}

// Run the scheduled task
cron.schedule(`* */1 * * * *`, async () => { // Test to run once every minute
  displayGreeting()
})
