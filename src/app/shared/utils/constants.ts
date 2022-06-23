export const colorDefault: string = '#FEE979';
export const colors_palette = [
  '#B1BCCD',
  '#F3B2A6',
  '#F6C67D',
  '#F9DA78',
  '#9ADEA8',
  '#8DD5ED',
  '#91C8FA',
  '#D4B9FA',
  '#F5C0EF',
];
export const base_path: string = 'https://be-system.herokuapp.com/api';
export const toastMessages = {
  contentCreatedSuccessfully: 'Contenuto creato con successo!',
  contentUndoSuccessfully: 'Contenuto ripristinato con successo!',
  contentDeletedSuccessfully: 'Contenuto rimosso con successo!',
};

export const temi = [
  '',
  'assets/images/tema1.png',
  'assets/images/tema2.png',
  'assets/images/tema3.png',
  'assets/images/tema4.png',
];

export const types = {
  BACHECA: 'Bacheca',
  LINK: 'Link',
  CONVENZIONI: 'Convenzioni',
};

export const toastNames = {
  ADDED_LINK_SUCCESS: 'ADDED_LINK_SUCCESS',
  DELETED_LINK_SUCCESS: 'DELETED_LINK_SUCCESS',
  ADDED_LINK_ERROR: 'ADDED_LINK_ERROR',
  DELETED_LINK_ERROR: 'DELETED_LINK_ERROR',

  ADDED_POST_SUCCESS: 'ADDED_POST_SUCCESS',
  DELETED_POST_SUCCESS: 'DELETED_POST_SUCCESS',
  ADDED_POST_ERROR: 'ADDED_POST_ERROR',
  DELETED_POST_ERROR: 'DELETED_POST_ERROR',

  ADDED_CONV_SUCCESS: 'ADDED_CONV_SUCCESS',
  DELETED_CONV_SUCCESS: 'DELETED_CONV_SUCCESS',
  ADDED_CONV_ERROR: 'ADDED_CONV_ERROR',
  DELETED_CONV_ERROR: 'DELETED_CONV_ERROR',

  REGISTERED_USER_ALREADY_EXISTS_ERROR: 'REGISTERED_USER_ALREADY_EXISTS_ERROR',

  GENERIC_ERROR: 'GENERIC_ERROR',
};

export const toast = {
  [toastNames.ADDED_LINK_SUCCESS]: {
    message: 'Link aggiunto!',
    icon: '🎉',
  },
  [toastNames.DELETED_LINK_SUCCESS]: {
    message: 'Link rimosso!',
    icon: '🕳️',
  },
  [toastNames.ADDED_LINK_ERROR]: {
    message: 'Errore aggiunta Link!',
    icon: '❌',
  },
  [toastNames.DELETED_LINK_ERROR]: {
    message: 'Errore rimozione Link!',
    icon: '❌',
  },
  [toastNames.ADDED_POST_SUCCESS]: {
    message: 'Post aggiunto!',
    icon: '🎉',
  },
  [toastNames.DELETED_POST_SUCCESS]: {
    message: 'Post rimosso!',
    icon: '🕳️',
  },
  [toastNames.ADDED_POST_ERROR]: {
    message: 'Errore aggiunta Post!',
    icon: '❌',
  },
  [toastNames.DELETED_POST_ERROR]: {
    message: 'Errore rimozione Post!',
    icon: '❌',
  },
  [toastNames.ADDED_CONV_SUCCESS]: {
    message: 'Convenzione aggiunta!',
    icon: '🎉',
  },
  [toastNames.DELETED_CONV_SUCCESS]: {
    message: 'Convenzione rimossa!',
    icon: '🕳️',
  },
  [toastNames.ADDED_CONV_ERROR]: {
    message: 'Errore aggiunta Convenzione!',
    icon: '❌',
  },
  [toastNames.DELETED_CONV_ERROR]: {
    message: 'Errore rimozione Convenzione!',
    icon: '❌',
  },
  [toastNames.REGISTERED_USER_ALREADY_EXISTS_ERROR]: {
    message: "L'utente inserito è già registrato!",
    icon: '❌',
  },
  [toastNames.GENERIC_ERROR]: {
    message: "C'è stato un errore, riprova!",
    icon: '❌',
  },
};
