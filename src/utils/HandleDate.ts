export class HandleDate {

  static create() {
    return new Date()
  }

  static changeToBrazilianDate(date: Date) {
    return date.toLocaleString("pt-BR", {
      day: "numeric",
      month: "long"
    });
  }

  static changeToBrazilianHour(date: Date) {
    return date.toLocaleString("pt-BR", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  }

  static getWeek(date: Date) {
    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    
    const dayNumber = date.getDay()

    const dayOfWeek = weekDays[dayNumber]

    return dayOfWeek
  }
}