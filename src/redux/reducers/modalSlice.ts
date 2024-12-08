import ModalType from "@enums/ModalType";
import { createSlice } from "@reduxjs/toolkit";
interface IModalState {
  isOpen: boolean;
  modalType: ModalType;
}
const initialState: IModalState = {
  isOpen: false,
  modalType: ModalType.SUCCESS,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSuccess: (state) => {
      state.isOpen = true;
      state.modalType = ModalType.SUCCESS;
    },
    openError: (state) => {
      state.isOpen = true;
      state.modalType = ModalType.ERROR;
    },
    openWarning: (state) => {
      state.isOpen = true;
      state.modalType = ModalType.WARNING;
    },
    openInfo: (state) => {
      state.isOpen = true;
      state.modalType = ModalType.INFO;
    },
  },
});
export const {
  openModal,
  closeModal,
  toggleModal,
  openSuccess,
  openError,
  openWarning,
  openInfo,
} = modalSlice.actions;
export default modalSlice;
