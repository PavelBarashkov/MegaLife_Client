import { useState } from 'react';
import './modal.css';
import { Modal } from 'react-bootstrap';
import { BtnClose } from '../BtnClose/BtnClose';
import { Btn } from '../../../../components/UI/Btn/Btn';

export const ModalCustom = ({show, handleClose, handleDelete} : any) => {


    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered={true}
        >
            <Modal.Body>
                Удалить учетную запись пользвателя?
            </Modal.Body>
            <Modal.Footer>
                <div className='container-modal'>
                    <BtnClose click={handleClose}/>
                </div>
                <div className='container-modal'>
                    <Btn onClick={handleDelete}>Да</Btn>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
