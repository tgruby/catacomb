import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'

export default class RecentJournalEntry extends Grid {
  constructor() {
    super({ id: 'RecentJournalEntry', width: 80, height: 7, border: true })
    this.add({
      x: 'center',
      y: 0,
      string: ' Messages ',
      force: true
    })
    memory.subscribe({
      key: 'hero.journal',
      callback: this._journalUpdated.bind(this)
    })
  }

  _journalUpdated(entries) {
    const entry = entries[entries.length - 1]
    this.add({ x: 'center', y: 2, string: this._getFormattedDate(entry.date) })
    this.add({ x: 'left', y: 3, block: this._wrapText(entry.text, 76) })
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
