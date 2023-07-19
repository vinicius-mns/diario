import { computed, ref, type Ref, type ComputedRef } from 'vue'

export class ReactiveValues {
  private _value: Ref<string>

  constructor(
    private initialValue: string,
    private _ref = ref,
    private _computed = computed,
  ){
    this._value = this._ref(this.initialValue)
  }

  public updateValue(newValue: string){
    this._value.value = newValue
  }

  get value(): ComputedRef<Ref<string>>  {
    return this._computed(() => this._value)
  }
}