import React from 'react';
import  { Button } from "@material-ui/core";

interface MaterialButtonProps {
    onMaterialButtonClick: () => {},
}

const MaterialButton: React.FC<MaterialButtonProps> = ({onMaterialButtonClick}) => {
    return(
        <div>
            <h1>I'm a Material UI Button</h1>
            <Button variant="contained" color="primary" onClick={onMaterialButtonClick}>
                Material Primary Button
            </Button>
        </div>
    )
}

export default MaterialButton;