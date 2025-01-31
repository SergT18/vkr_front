const initialState = {
    items: [],
    // currentDialogId: window.location.pathname.split('dialog/')[1],
    currentDialogId: null,
    isLoading: true,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'DIALOGS:SET_ITEMS':
        return {
          ...state,
          items: payload,
        };
      case 'DIALOGS:LAST_MESSAGE_READED_STATUS':
        return {
          ...state,
          items: state.items.map(dialog => {
            if (dialog.lastMessage && dialog._id === payload.dialogId) {
              dialog.lastMessage.readed = true;
            }
            return dialog;
          }),
        };
      case 'DIALOGS:SET_CURRENT_DIALOG_ID':
        return {
          ...state,
          currentDialogId: payload,
        };
      case 'DIALOGS:REMOVE_DIALOG':
      return {
        ...state,
        items: state.items.filter(dialog => dialog._id !== payload),
      };
      default:
        return state;
    }
  };