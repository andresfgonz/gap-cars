export namespace ActionTypes {
  export enum CarActions {
    FILTER = '@@cars/FILTER',
    SORT = '@@cars/SORT',
    CLEAR = '@@cars/CLEAR',
  }

  export enum SideMenuActions {
    TOGGLE = '@@menu/TOGGLE',
  }

  export enum SelectedCarsActions {
    ADD_CAR = '@@selectedCars/ADD',
    REMOVE_CAR = '@@selectedCars/REMOVE',
  }

  export enum AddCarFormActions {
    SHOW = '@@addCarForm/SHOW',
    HIDE = '@@addCarForm/HIDE',
  }

  export enum CarDetailsModal {
    SHOW = '@@carDetailsModal/SHOW',
    HIDE = '@@carDetailsModal/HIDE',
  }
}
