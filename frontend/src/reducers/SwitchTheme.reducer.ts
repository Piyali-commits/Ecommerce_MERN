import { ThemeConstants } from '../Constants'

export type ThemeStateType = {
  theme: string
}
export type ThemeActionType = {
  type: ThemeConstants
}
type ThemeDispatchType = (value: ThemeActionType) => void

export const SwitchThemeReducer = (state: ThemeStateType, action: ThemeActionType): ThemeStateType => {
  switch (action.type) {
    case ThemeConstants.SWITCH_MODE_DARK:
      localStorage.setItem('theme', ThemeConstants.SWITCH_MODE_LIGHT)
      return { ...state, theme: ThemeConstants.SWITCH_MODE_LIGHT }
    case ThemeConstants.SWITCH_MODE_LIGHT:
      localStorage.setItem('theme', ThemeConstants.SWITCH_MODE_DARK)
      return { ...state, theme: ThemeConstants.SWITCH_MODE_DARK }
    default:
      return state
  }
}

export const SwitchTheme = async (dispatch: ThemeDispatchType) => {
  if (localStorage.getItem('theme') === ThemeConstants.SWITCH_MODE_DARK) dispatch({ type: ThemeConstants.SWITCH_MODE_DARK })
  else dispatch({ type: ThemeConstants.SWITCH_MODE_LIGHT })
}
