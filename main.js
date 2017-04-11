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

  // factory function
  createBassist() {
    return new Bassist()
  }
}
