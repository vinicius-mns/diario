export class HandleLocalStorage<T> {
  
  constructor(private _key: string, private _defaultValue: T){
    this._init()
  }

  private _init(): void {
    if(!localStorage.getItem(this._key)) {
      localStorage.setItem(this._key, JSON.stringify(this._defaultValue))
    }
  }

  public get read (): T {
    return JSON.parse(localStorage.getItem(this._key) as string)
  }

  public update (newValue: T): void {
    localStorage.setItem(this._key, JSON.stringify(newValue))
  }

  public updateAndReturn (newValue: T): T {
    this.update(newValue)
    return this.read
  }

  public delete () {
    localStorage.removeItem(this._key)
  }
}
