export const colors = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  TERTIARY: 'TERTIARY',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
}

export const buttonDimensions = {
  xs: 'text-xs leading-1 !max-h-7 py-1 px-1',
  sm: 'text-sm leading-2 !max-h-9 py-1.5 px-2',
  md: 'text-base leading-2 !max-h-10 py-2 px-2',
  lg: 'text-base leading-2 !max-h-12 py-3 px-3',
}

export const buttonVariants = {
  BUTTON: {
    PRIMARY:
      'text-base-100 bg-primary hover:bg-primary-shade-state-hover active:bg-primary-shade-state-active disabled:bg-primary-shade-lighten-40 disabled:active:bg-primary-shade-lighten-40 disabled:cursor-not-allowed',
    SECONDARY:
      'text-secondary-content bg-secondary hover:bg-secondary-shade-state-hover active:bg-secondary-shade-state-active disabled:text-secondary-content-shade-lighten-40 disabled:bg-secondary-shade-lighten-40 disabled:active:bg-secondary-shade-lighten-40 disabled:cursor-not-allowed',
    TERTIARY:
      'text-base-100 bg-base-content hover:bg-base-content-shade-state-hover active:bg-base-content-shade-state-active disabled:bg-base-content-shade-lighten-40 disabled:active:bg-base-content-shade-lighten-40 disabled:cursor-not-allowed',
    SUCCESS:
      'text-base-100 bg-success-content hover:bg-success-content-shade-state-hover active:bg-success-content-shade-state-active disabled:bg-success-content-shade-lighten-40 disabled:active:bg-warning-content-shade-lighten-40 disabled:cursor-not-allowed',
    WARNING:
      'text-base-100 bg-warning-content hover:bg-warning-content-shade-state-hover active:bg-warning-content-shade-state-active disabled:bg-warning-content-shade-lighten-40 disabled:active:bg-warning-content-shade-lighten-40 disabled:cursor-not-allowed',
    ERROR:
      'text-base-100 bg-error-content hover:bg-error-content-shade-state-hover active:bg-error-content-shade-state-active disabled:bg-error-content-shade-lighten-40 disabled:active:bg-error-content-shade-lighten-40 disabled:cursor-not-allowed',
  } as typeof colors,
  OUTLINE: {
    PRIMARY:
      'text-primary border-primary border-solid border-2 bg-transparent hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-primary-shade-lighten-40 disabled:border-primary-shade-lighten-40 disabled:cursor-not-allowed',
    SECONDARY:
      'text-secondary-content border-secondary-content border-solid border-2 bg-transparent hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-secondary-content-shade-lighten-40 disabled:border-secondary-content-shade-lighten-40 disabled:cursor-not-allowed',
    TERTIARY:
      'text-secondary-content border-secondary-content border-solid border-2 bg-transparent hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-secondary-content-shade-lighten-40 disabled:border-secondary-content-shade-lighten-40 disabled:cursor-not-allowed',
    SUCCESS:
      'text-success-content border-success-content border-solid border-2 bg-transparent hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-success-content-shade-lighten-40 disabled:border-success-content-shade-lighten-40 disabled:cursor-not-allowed',
    WARNING:
      'text-warning-content border-warning-content border-solid border-2 bg-transparent hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-warning-content-shade-lighten-40 disabled:border-warning-content-shade-lighten-40 disabled:cursor-not-allowed',
    ERROR:
      'text-error-content border-error-content border-solid border-2 bg-transparent hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-error-content-shade-lighten-40 disabled:border-error-content-shade-lighten-40 disabled:cursor-not-allowed',
  } as typeof colors,
  GHOST: {
    PRIMARY:
      'text-primary decoration-primary hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-primary-shade-lighten-40 disabled:cursor-not-allowed',
    SECONDARY:
      'text-secondary-content decoration-secondary-content hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-secondary-content-shade-lighten-40 disabled:cursor-not-allowed',
    TERTIARY:
      'text-secondary-content decoration-secondary-content hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-secondary-content-shade-lighten-40 disabled:cursor-not-allowed',
    SUCCESS:
      'text-success-content decoration-success-content hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-success-content-shade-lighten-40 disabled:cursor-not-allowed',
    WARNING:
      'text-warning-content decoration-warning-content hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-warning-content-shade-lighten-40 disabled:cursor-not-allowed',
    ERROR:
      'text-error-content decoration-error-content hover:bg-base-200-shade-state-hover active:bg-base-200-shade-state-active disabled:bg-transparent disabled:text-error-content-shade-lighten-40 disabled:cursor-not-allowed',
  } as typeof colors,
}
