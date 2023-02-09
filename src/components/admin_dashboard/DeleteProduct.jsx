import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from '../../axios';
import './dashboardstyle.css'
import { deleteProduct } from '../../service/adminApi';

export default function DeleteProduct(props) {

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = async () => {
        const res = await deleteProduct(props.product_id)
        if (res) {
            handleClose();
            alert("Product Deleted Successfully")
            props.getProd()
        }
    }

    const handleClose = async () => {
        setOpen(false);
    };

    return (

        <div>
            {
                props.signal ?
                    <>
                        <button className="deleteProduct" onClick={handleClickOpen}>Delete</button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Confirm Delete Product</DialogTitle>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleSubmit} color="primary">
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </>
                    : null
            }

        </div>
    );
}
