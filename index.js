// Code your solution here

function findMatching(drivers, string){
  const matches = drivers.filter((driver) => {
    return driver.toUpperCase() === string.toUpperCase()
  })
  return matches
}

function fuzzyMatch(drivers, string){
  const matches = drivers.filter((driver) => {
   return driver.startsWith(string, 0);
  })
  return matches
}

function matchName(drivers, string){
  const matches = drivers.filter((driver) => {
    return driver['name'] === string
  })
  return matches

}