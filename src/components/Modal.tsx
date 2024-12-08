import { closeModal } from "@reducers/modalSlice";
import type { AppDispatch, RootState } from "@store/store";
import React from "react";
import {
  Alert,
  Modal as RNModal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

interface IModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function Modal(props: IModalProps) {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();

  function onClose() {
    props.onClose?.();
    dispatch(closeModal());
  }

  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        onClose();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={onClose}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Modal;
