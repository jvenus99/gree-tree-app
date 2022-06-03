import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';

export const ModalView = ({ open, setOpen }) => {
    return (
        <>
            <Dialog open={open} fullWhidth={true}>
                <DialogContent>
                    <ButtonCloseModal onClick={() => setOpen(false)}>
                        <IoMdClose
                            style={{ background: '#117821', borderRadius: '50%' }}
                            color={'white'}
                            size={25}
                        />
                    </ButtonCloseModal>
                    <ContentModal>
                        <h1>Informações do ponto de doação</h1>
                        <span>cep:</span>
                        <p>$Local</p>
                        <br />
                        <span>Cidade:</span>
                        <p>$Local</p>
                        <br />
                        <span>Logradouro:</span>
                        <p>$Local</p>
                        <br />
                        <span>Bairro:</span>
                        <p>$Local</p>
                        <br />
                        <span>Número:</span>
                        <p>$Local</p>
                    </ContentModal>
                </DialogContent>
            </Dialog>
        </>
    )
}