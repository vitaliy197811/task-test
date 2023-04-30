import { useEffect } from 'react';

import {
  Overlay,
  Container,
  Text,
  Span,
  Button,
  ButtonBox,
} from './Modal.styled';

export const Modal = ({ isOpen, onClose, onDelete }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay isOpen={isOpen} onClick={handleBackdropClick}>
      <Container>
        <Text>
          Delete task
          <br />
          <Span>Are you sure you want to delete this task?</Span>
        </Text>
        <ButtonBox>
          <Button type="button" onClick={onClose} no>
            No
          </Button>
          <Button type="button" onClick={onDelete} yes>
            Yes
          </Button>
        </ButtonBox>
      </Container>
    </Overlay>
  );
};
