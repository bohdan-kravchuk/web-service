import { toastr } from 'react-redux-toastr';

export const toastrError = async errorMessage => {
  toastr.error('Error', errorMessage);
};

export const toastrSuccess = async message => {
  toastr.success('Success', message);
};
