import { closeModal } from "@reducers/modalSlice";
import type { AppDispatch, RootState } from "@store/store";
import React from "react";
import { Modal as RNModal, StyleSheet, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import ModalType from "@enums/ModalType";

interface IModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function Modal(props: IModalProps) {
  const { isOpen, modalType, message } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch<AppDispatch>();

  function onClose() {
    props.onClose?.();
    dispatch(closeModal());
  }

  function status(type: ModalType) {
    switch (type) {
      case ModalType.INFO:
        return {
          name: "information",
          color: "blue",
          defaultMessage: "Information",
        };
      case ModalType.ERROR:
        return {
          name: "close",
          color: "red",
          defaultMessage: "Error",
        };
      case ModalType.SUCCESS:
        return {
          name: "checkmark",
          color: "green",
          defaultMessage: "Success",
        };
      case ModalType.WARNING:
        return {
          name: "alert",
          color: "orange",
          defaultMessage: "Warning",
        };
      default:
        return {
          name: "alert-circle",
          color: "black",
          defaultMessage: "",
        };
    }
  }

  const { name, color, defaultMessage } = status(modalType);

  return (
    <RNModal
      onDismiss={onClose}
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        onClose();
      }}
    >
      <Pressable style={styles.centeredView} onPress={onClose}>
        <Pressable style={styles.modalView}>
          <Icon name={name} size={48} color={color} />
          <Text style={styles.modalText}>{message || defaultMessage}</Text>
          <Pressable onPress={onClose} style={styles.close}>
            <Icon name="close" size={24} />
          </Pressable>
        </Pressable>
      </Pressable>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    zIndex: -1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default Modal;
