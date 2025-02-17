import state from '../game/SharedState.js'
import Modal from '../ui/Modal.js'
import { upperLeft, upperRight, lowerLeft, lowerRight } from '../ui/CelticBorder.js'

export default class Jornal extends Modal {
  constructor() {
    super({
      id: 'JournalModal',
      width: 76,
      height: 39,
      border: true
    })
    this.add({ x: 0, y: 0, block: upperLeft, force: true })
    this.add({ x: 67, y: 0, block: upperRight, force: true })
    this.add({ x: 0, y: 31, block: lowerLeft, force: true })
    this.add({ x: 68, y: 31, block: lowerRight, force: true })
    this.update()
  }

  keyPressed(e) {
    if (e.key === 'a' || e.key === 'ArrowLeft') {
      // page left
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      // page right
    } else if (e.key === 'j' || e.key === 'Escape') {
      this.close()
    } else {
      console.log('Journal keyPressed:', e.key)
    }
  }

  update() {
    const entries = state.get('hero.journal')
    let previousEntry = null
    let y = 6
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      if (!previousEntry) {
        this.add({ x: 6, y, string: `${this._getFormattedDate(entry.date)}` })
        this.add({ x: 6, y: y + 1, string: '⎻'.repeat(28) })
        y = y + 2
      } else {
        // get dates from the previous and current entries
        // if they match, do not display the date.  Otherwise, display the date
        if (previousEntry.date !== entry.date) {
          this.add({ x: 6, y: y + 1, string: `${entry.date}` })
          this.add({ x: 6, y: y + 2, string: '⎻'.repeat(28) })
          y = y + 3
        }
      }
      const block = this._wrapText(`${entry.text}`, 32)
      this.add({ x: 6, y, string: '◊' })
      this.add({ x: 7, y, block })
      y += block.length + 1
      previousEntry = entry
    }
  }

  // format the date as MMMM DD (e.g. November 25th)
  _getFormattedDate(time) {
    const day = time.getDate()
    const month = time.getMonth() + 1
    const monthName = this._getMonthName(month)
    // add the ordinal suffix to the day
    const lastDigit = day % 10
    let suffix = 'th'
    if (lastDigit === 1) suffix = 'st'
    if (lastDigit === 2) suffix = 'nd'
    if (lastDigit === 3) suffix = 'rd'
    return `${monthName} ${day}${suffix}`
  }

  _getMonthName(month) {
    switch (month) {
      case 1:
        return 'January'
      case 2:
        return 'February'
      case 3:
        return 'March'
      case 4:
        return 'April'
      case 5:
        return 'May'
      case 6:
        return 'June'
      case 7:
        return 'July'
      case 8:
        return 'August'
      case 9:
        return 'September'
      case 10:
        return 'October'
      case 11:
        return 'November'
      case 12:
        return 'December'
    }
  }

  _wrapText(text, width) {
    const words = text.split(' ')
    const lines = []
    let line = ''
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (line.length + word.length + 1 < width) {
        line += `${word} `
      } else {
        lines.push(line)
        line = `${word} `
      }
    }
    lines.push(line)
    return lines
  }
}
