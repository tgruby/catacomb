class Memory {
  constructor() {
    this.data = {}
    this.listeners = {}
  }

  get(key) {
    return this.data[key]
  }

  remove(key) {
    this.unsubscribe({ key })
    delete this.data[key]
  }

  /*
    Set a value in memory and notify subscribers
    If value is a primative and doesn't change don't notify
    If value is a complex object notify every time as we don't know if a containing value has changed
  */
  set(props) {
    const { key, value } = props
    this.data[key] = value
    this._notify(key, value)
  }

  /*
    Dump memory
  */
  dump() {
    return this.data
  }

  subscribe(props) {
    const { key, callback } = props
    if (!this.listeners[key]) {
      this.listeners[key] = []
    }
    if (this.listeners[key].includes(callback)) return
    this.listeners[key].push(callback)
  }

  unsubscribe(props) {
    const { key, callback } = props
    if (this.listeners[key]) {
      if (callback) {
        this.listeners[key] = this.listeners[key].filter(
          (listener) => listener !== callback
        )
      } else {
        delete this.listeners[key]
      }
    }
  }

  _notify(key, value) {
    if (this.listeners[key]) {
      this.listeners[key].forEach((callback) => callback(value))
    }
  }
}

const memory = new Memory()
export default memory
