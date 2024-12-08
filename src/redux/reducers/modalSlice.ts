import ModalType from "@enums/ModalType";
import type RootScreen from "@enums/RootScreen";
import type TabScreen from "@enums/TabScreen";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IModalState {
  isOpen: boolean;
  modalType: ModalType;
  message?: string;
  onConfirm?: TabScreen | RootScreen;
}

const initialState: IModalState = {
  isOpen: false,
  modalType: ModalType.SUCCESS,
  message: "",
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
    openSuccess: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalType = ModalType.SUCCESS;
      state.message = action?.payload;
    },
    openError: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalType = ModalType.ERROR;
      state.message = action?.payload;
    },
    openWarning: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalType = ModalType.WARNING;
      state.message = action?.payload;
    },
    openInfo: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalType = ModalType.INFO;
      state.message = action?.payload;
    },
    openConfirm: (
      state,
      action: PayloadAction<{ message: string; onConfirm: TabScreen | RootScreen }>
    ) => {
      state.isOpen = true;
      state.modalType = ModalType.CONFIRM;
      state.message = action?.payload.message;
      state.onConfirm = action?.payload.onConfirm;
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
  openConfirm,
} = modalSlice.actions;

export default modalSlice;
