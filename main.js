class Bassist {
  constructor() {
    console.log('bassist joined')
  }
}

class Band {
  constructor(name) {
    this.name = name
    this.bassist = null
  }

  start() {
    this.bassist = this.createBassist()
  }

  // factory function (will be stubbed out in test)
  createBassist() {
    return new Bassist()
  }
}
