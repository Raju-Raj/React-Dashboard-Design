import React, { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const AddUpdateVehicleDialog = ({ isOpen, onClose, onSave, selectedItem }) => {
  const [name, setName] = React.useState('');

  useEffect(() => {
    setName(selectedItem?.name || '');
  }, [selectedItem]);

  const handleSave = () => {
    onSave({ ...selectedItem, name });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{selectedItem ? 'Update Vehicle' : 'Add Vehicle'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Vehicle Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{marginTop:"10px"}}
        />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSave} color="success" variant="contained">
          {selectedItem ? 'Update' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUpdateVehicleDialog;
