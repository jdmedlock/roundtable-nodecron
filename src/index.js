import cron from 'node-cron'

const sleep = async (secondsToSleep) => {
  return new Promise(resolve => setTimeout(resolve, secondsToSleep*1000))
}

const displayGreeting = async () => {
  const currentDate = new Date()
  const displayDateTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'America/Chicago'
  }).format(currentDate)
  console.log('Hello world @', displayDateTime)
}

// Run the scheduled task
cron.schedule(`5-40 * * * * *`, async () => { // Test to run every minute at second 5-40
  displayGreeting()
})
