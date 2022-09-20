class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
         printTimeCallback()
      }
      this.currentTime += 1
    }, 1000)
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {

    if (value.toString().length == 1) {
      return "0" + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId)
   
  }

  reset() {
    this.currentTime = 0
  }

  split() { 
    let minuts = this.getMinutes()
    let seconds = this.getSeconds()
    let minutsString = this.computeTwoDigitNumber(minuts)
    let secondsString = this.computeTwoDigitNumber(seconds)
    
    return `${minutsString}:${secondsString}`
    
  }
}
