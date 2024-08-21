import {
  createContext,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  EModalEventType,
  IEventModal,
  IMetaRef,
  IModalContextProviderProps,
  IModalFunctionOptions,
  IModalReturn,
} from "./modal-context.types";

export const ModalsContext = createContext<IModalReturn | undefined>(undefined);

import React from "react";
import { Modal, Portal } from "react-native-paper";
import { StyleSheet } from "react-native";
import theme from "@/shared/theme/theme";

const ModalContextProvider = ({ children }: IModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const promiseRef =
    useRef<(value: IEventModal | PromiseLike<IEventModal>) => void>();
  const metaRef = useRef<IMetaRef>();

  const modal = useCallback((p: IModalFunctionOptions) => {
    setIsOpen(true);
    metaRef.current = p;
    return new Promise<IEventModal>((resolve) => {
      promiseRef.current = resolve;
    });
  }, []);

  const onClose = useCallback((value?: IEventModal["value"]) => {
    setIsOpen(false);
    if (promiseRef.current)
      promiseRef.current({ type: EModalEventType.CLOSE, value });
  }, []);

  const onDismiss = useCallback((value?: IEventModal["value"]) => {
    setIsOpen(false);
    if (promiseRef.current)
      promiseRef.current({ type: EModalEventType.DISMISS, value });
  }, []);

  const onConfirm = useCallback((value?: IEventModal["value"]) => {
    setIsOpen(false);
    if (promiseRef.current)
      promiseRef.current({ type: EModalEventType.CONFIRM, value });
  }, []);

  return (
    <ModalsContext.Provider
      value={{
        modal,
        onClose,
        onConfirm,
        onDismiss,
      }}
    >
      {children}
      {isOpen && (
        <Portal  >
          <Modal
            visible={isOpen}
            // onDismiss={hideModal}
            contentContainerStyle={styles.modalStyles}
            style={metaRef.current?.options?.style}
          >
            {React.cloneElement(metaRef.current?.template as ReactElement, {})}
          </Modal>
        </Portal>
      )}
    </ModalsContext.Provider>
  );
};

export default ModalContextProvider;

const styles = StyleSheet.create({
    modalStyles: {
        backgroundColor: theme.colors.secondary,
        marginHorizontal: 20,
        minHeight: 200,
        borderRadius: 40,
        padding: 10
    },
    wrap: {
        width: '90%',
        display: 'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})
