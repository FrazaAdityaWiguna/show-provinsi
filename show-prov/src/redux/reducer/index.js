const initialState = {
  provinsiID: '',
  kabupatenID: '',
  kecamatanID: '',
  desaID: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PROVINSI':
      return {
        ...state,
        provinsiID: action.action,
      };
    case 'CHANGE_KABUPATEN':
      return {
        ...state,
        kabupatenID: action.action,
      };
    case 'CHANGE_KECAMATAN':
      return {
        ...state,
        kecamatanID: action.action,
      };
    case 'CHANGE_DESA':
      return {
        ...state,
        desaID: action.action,
      };
    default:
      return state;
  }
};

export default Reducer;
