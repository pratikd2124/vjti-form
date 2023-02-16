import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function UploadCv() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload your Resume
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
}