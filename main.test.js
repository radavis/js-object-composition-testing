describe('Band', () => {
  let band, createBassistSpy, bassistSpy

  beforeEach(() => {
    // setup spies and stub createBassist method
    bassistSpy = jasmine.createSpyObj('bassist', ['shred', 'quit', 'otherSickMethod'])
    createBassistSpy = spyOn(Band.prototype, 'createBassist')
      .and.returnValue(bassistSpy)

    // init subject being tested
    band = new Band('The Foobars')
  })

  describe('new', () => {
    it('initializes bassist to null', () => {
      expect(band.bassist).toBe(null)
    })
  })

  describe('start()', () => {
    it('calls the createBassist() method', () => {
      band.start()
      expect(createBassistSpy).toHaveBeenCalled()

      // Not a great test, but ensures we are working with the
      // bassistSpy object, and not something else.
      expect(band.bassist).toEqual(bassistSpy)
    })

    it('sets the bassist property', () => {
      band.start()
      expect(band.bassist).not.toBeNull()
    })
  })
})
