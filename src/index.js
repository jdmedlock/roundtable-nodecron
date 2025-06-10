import cron from 'node-cron'

const sleep = async (secondsToSleep) => {
  return new Promise(resolve => setTimeout(resolve, secondsToSleep*1000))
}

const displayGreeting = async () => {
  await sleep(2)
  const currentDate = new Date()
  const displayDateTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'America/Chicago'
  }).format(currentDate)
  console.log('Hello world @', displayDateTime)
}

// Run the scheduled task
//cron.schedule(`5-40 * * * * *`, async () => { // Test to run every minute at second 5-40
//cron.schedule(`10,20,30 * * * * *`, async () => { // Test to run every 10 seconds
cron.schedule(`5-40 * * * * *`, async () => { // Test to run every other minute
  displayGreeting()
})

console.log('task is scheduled')