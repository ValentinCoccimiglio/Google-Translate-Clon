export interface State {
    fromLanguage:string,
    toLanguage: string,
    fromText: string,
    result: string,
    loading: boolean
}
export type Action =
|{ type: 'SET_FROM_LANGUAGE', playload: string}
|{ type: 'INTERCHANGE_LANGUAGE'}
|{ type: 'SET_TO_LANGUAGE', playload: string }
|{ type: 'SET_FROM_TEXT', playload: string}
|{ type: 'SET_RESULT', playload: string }