export enum ActionTypes {
  ADD_POKEMON = 'ADD_POKEMON',
  RELEASE_POKEMON = 'RELEASE_POKEMON',
  CHANGE_IS_MY_POKEMON = 'CHANGE_IS_MY_POKEMON',
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
