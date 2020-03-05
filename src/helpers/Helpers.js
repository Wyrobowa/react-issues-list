export const setAlertsAction = (setState, state, type, msg) => {
  setState([
    ...state,
    {
      type,
      msg,
    },
  ]);
};
