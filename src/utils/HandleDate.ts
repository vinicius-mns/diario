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
}