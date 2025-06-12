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
  console.log(`Hello world @ ${ displayDateTime }`)
}

// Run the scheduled task
(async () => {
  cron.schedule(`30 * * * * *`, async () => { // Run every 30 seconds
    await displayGreeting()
  })

  console.log(`${ new Date().toISOString() } task is scheduled`)
}) ()