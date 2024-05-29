import { Button, Modal } from '@mui/material'
import React from 'react'
import Confetti from 'react-confetti'
import {WinnerModalStyles}  from '../assets/Styles/WinnerModal.styles'
import '../styles/App.css'

export const WinnerModal = ({teamWinner, restart}) => {
    const styles = WinnerModalStyles();
  return (
    <>
    <Confetti/>
    <Modal open>
        <div style={styles.modalContainer}>
            <span style={styles.modalSubTittle}>¡Ganó el equipo!</span>
            <span className='texto-animado' style={styles.modalTittle}>{teamWinner }</span>
            <Button variant='outlined' onClick={restart} style={styles.modalButton}>
            Nueva Partida
        </Button>
        </div>
    </Modal>
    </>
  )
}
